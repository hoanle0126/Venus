import EcommerceCategory from "./category"
import EcommerceNews from "./category/sales"
import ECommerceHeader from "./header/header"
import ECommerceMarketing from "./marketing"
import EcommerceProduct from "./product"
import ECommerceService from "./service"

const ECommerce = () => {
  return (
    <div className="ecommerce">
      <ECommerceHeader/>
      <ECommerceService/>
      <EcommerceCategory/>
      <ECommerceMarketing/>
      <EcommerceProduct/>
      <EcommerceNews/>
    </div>
  )
}

export default ECommerce