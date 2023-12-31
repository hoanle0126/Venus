/* eslint-disable react/prop-types */
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";
import { BsFillPlusCircleFill } from "react-icons/bs";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const ECommerceHeader = ({ categories = [] }) => {
  const [height, setHeight] = React.useState("450px");
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <section className="ecommerce__header">
      <div className="ecommerce__header--category">
        <div className="ecommerce__header--category__header">
          ALL CATEGORIES
        </div>
        <div
          className="ecommerce__header--category__content"
          style={{ height: height }}
        >
          <Grid container columns={1}>
            {categories.map((category) => (
              <Grid key={category.id} xs={1}>
                <div className="ecommerce__header--category__content-item">
                  {category.name}
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div
          className="ecommerce__header--category-more"
          onClick={() => setHeight(height === "400px" ? "" : "400px")}
        >
          <BsFillPlusCircleFill/>
          More categories
        </div>
      </div>
      <div className="ecommerce__header--highlight">
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "500px",
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </section>
  );
};

export default ECommerceHeader;
