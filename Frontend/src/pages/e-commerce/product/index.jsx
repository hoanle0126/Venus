import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Tabs,
  Typography,
} from "@mui/material";
import { leaf } from "../../../context/ThemeContext";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: leaf,
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "1.4rem",
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    "&:hover": {
      color: leaf,
      opacity: 1,
    },
    "&.Mui-selected": {
      color: leaf,
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: leaf,
    },
  })
);

const EcommerceProduct = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="ecommerce__product">
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ bgcolor: "#E5E7EB" }}>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab label="FEATURED" value="1" />
              <AntTab label="NEW ARRIVAL" value="2" />
              <AntTab label="ON SALE" value="3" />
            </AntTabs>
            <Box sx={{ p: 0 }} />
          </Box>
          <TabPanel value="1" sx="padding:0;overflow:hidden;height:700px">
            <Grid container columns={4}>
              <Grid xs="1" height={"350px"}>
                <Card sx={{ width:"100%",height:"100%",borderRadius:0 }}>
                  <CardMedia
                    sx={{ height: 230 }}
                    image="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-anime-cute-1.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="2" sx="padding:0">
            Item Two
          </TabPanel>
          <TabPanel value="3" sx="padding:0">
            Item Three
          </TabPanel>
        </TabContext>
      </Box>
    </section>
  );
};

export default EcommerceProduct;
