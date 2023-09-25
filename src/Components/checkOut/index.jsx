import React, { useState } from 'react';

const CheckoutForm = ({ handleSubmit }) => {
  const [billingInfo, setBillingInfo] = useState({ address: '', creditCard: '' });

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <label>
        Billing/Shipping Address:
        <input
          type="text"
          required
          onChange={(e) =>
            setBillingInfo({ ...billingInfo, address: e.target.value })
          }
        />
      </label>
      <label>
        Credit Card Information:
        <input
          type="text"
          required
          onChange={(e) =>
            setBillingInfo({ ...billingInfo, creditCard: e.target.value })
          }
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutForm;
