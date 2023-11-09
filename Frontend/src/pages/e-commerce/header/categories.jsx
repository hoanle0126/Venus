// /* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { useState } from "react";

export default function Categories({categories}) {
  const [height, setHeight] = useState("450px");

  return (
    <div className="ecommerce__header--category">
      <div className="ecommerce__header--category__header">ALL CATEGORIES</div>
      <div
        className="ecommerce__header--category__content"
        style={{ height: height }}
      >
        <Grid container columns={1}>
          {categories.map((category) => {
            <Grid xs={1}>
              <div className="ecommerce__header--category__content-item">
                {category.name}fd
              </div>
            </Grid>;
          })}
        </Grid>
      </div>
      <div
        className="ecommerce__header--category-more"
        onClick={() => setHeight(height === "400px" ? "" : "400px")}
      >
        More categories
      </div>
    </div>
  );
};