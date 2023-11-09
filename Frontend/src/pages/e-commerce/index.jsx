import EcommerceCategory from "./category"
import ECommerceHeader from "./header/header"
import ECommerceMarketing from "./marketing"
import EcommerceProduct from "./product"
import ECommerceService from "./service"
import { useEffect, useState } from "react";
import { axiosClient } from "../../axios";

const ECommerce = () => {
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    axiosClient.get("/categories").then(({ data }) => {
      setCategories(data.data);
    });
  }, []);
  return (
    <div className="ecommerce">
      <ECommerceHeader categories={categories}/>
      <ECommerceService/>
      <EcommerceCategory categories={categories}/>
      <ECommerceMarketing/>
      <EcommerceProduct/>
    </div>
  )
}

export default ECommerce