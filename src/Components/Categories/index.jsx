// Categories.js
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectedCategory } from "../../store/Actions/actions";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Categories(props) {
  return (
    <div className="categoriesCont">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {props.myCategories.category.map((item) => (
            <Grid item xs={4} key={item.id}>
              <Link to="/products" className="link">
                <Paper
                  onClick={() => props.selectCategory(item.name)}
                  sx={{
                    backgroundColor:
                      props.theme.palette.mode === "dark"
                        ? "#1A2027"
                        : "#fff",
                    ...props.theme.typography.body2,
                    padding: props.theme.spacing(1),
                    textAlign: "center",
                    color: props.theme.palette.text.secondary,
                  }}
                >
                  <div className="imgContain">
                    <img
                      src={item.image}
                      alt={item.displayName}
                      style={{ width: "-webkit-fill-available" }}
                    />
                  </div>
                  <h3 style={{ color: "red" }}>{item.displayName}</h3>
                  <p>{item.description}</p>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myCategories: state.myCategoriesReducer,
});

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (categoryName) => dispatch(selectedCategory(categoryName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
