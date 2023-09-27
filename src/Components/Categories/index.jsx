import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedCategory, fetchCategories } from "../../store/Slice/categories";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Categories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
    navigate(`/products/${category}`);
  };

  return (
    <div className="categoriesCont">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {categories.map((item) => (
            <Grid item xs={4} key={item.id}>
              <Paper
                onClick={() => handleCategoryClick(item.name)}
                sx={{
                  textAlign: "center",
                }}
              >
                <div className="imgContain">
                  {/* <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "-webkit-fill-available" }}
                  /> */}
                </div>
                <h3 style={{ color: "red" }}>{item.name}</h3>
                <p>{item.description}</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Categories;
