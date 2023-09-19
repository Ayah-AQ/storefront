import React from 'react';
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { addItemToCart } from "../../store/Actions/cartAction";
import { increaseProduct } from "../../store/Actions/cartAction";

function Products(props) {
  const handleQuantityChange = (itemId, quantity) => {
    props.increaseProduct(itemId, parseInt(quantity));
  };

  return (
    <div className="productContain" style={{ padding: "10px" }}>
      <h1>{props.myProducts.products[0].category}</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {props.myProducts.products.map((item) => (
            <Grid item xs={4} key={item.id}>
              <Paper
                sx={{
                  backgroundColor:
                    props.theme?.palette.mode === "dark" ? "#1A2027" : "#fff",
                  ...props.theme?.typography.body2,
                  padding: props.theme?.spacing(2),
                  textAlign: "center",
                  color: props.theme?.palette.text.secondary,
                }}
              >
                <div className="imgContain">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "-webkit-fill-available" }}
                  />
                </div>
                <h3 style={{ color: "red" }}>{item.name}</h3>
                <div className="price">${item.price} JD</div>
                <p>{item.description}</p>
                <div className="quantityCont">
                  <label>Quantity</label>
                  <input
                    type="number"
                    placeholder="1"
                    onChange={(e) => handleQuantityChange(item.name, e.target.value)}
                  />
                </div>
                <button onClick={() => props.addItemToCart(item, 1)}>Add To Cart</button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myProducts: state.myProductsReducer,
});

const mapDispatchToProps = { addItemToCart, increaseProduct };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
