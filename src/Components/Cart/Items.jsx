import React from 'react';

const CartItem = ({ item, handleIncrease, handleDecrease, handleRemoveItem }) => (
  <tr key={item._id}>
    <td>{item.name}</td>
    <td>Quantity: {item.count}</td>
    <td>${item.price}</td>
    <td>
      <button onClick={() => handleIncrease(item.name)}>+</button>
      <button onClick={() => handleDecrease(item.name)}>-</button>
      <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
    </td>
  </tr>
);

export default CartItem;