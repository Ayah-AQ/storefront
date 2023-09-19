import React from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { removeItemFromCart } from "../../store/Actions/cartAction";

function Cart(props) {
  let counter = 0;

  const handleRemoveItem = (name) => {
    props.removeItemFromCart(name);
  };

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {props.cart.items.map((item, idx) => {
          counter = counter + item.price * item.count;
          return (
            <React.Fragment key={idx}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.description}
                      </Typography>
                      <div className="price">{item.price}$</div>
                      <span>Quantity: {item.count}</span>
                    </React.Fragment>
                  }
                />
                <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        })}
        <ListItemText
          primary="Total:"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="body2"
                color="text.primary"
                className="total"
              >
                <span className="price"> {Math.ceil(counter)}$</span>
              </Typography>
            </React.Fragment>
          }
        />
      </List>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
