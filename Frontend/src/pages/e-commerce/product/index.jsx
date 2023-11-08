
const EcommerceProduct = () => {
  return (
    <section className="ecommerce__product">
        <div className="ecommerce__product--header">
            <div className="ecommerce__product--header-title">FEATURED</div>
            <div className="ecommerce__product--header-title">NEW ARRIVAL</div>
            <div className="ecommerce__product--header-title">ON SALE</div>
        </div>
        <div className="ecommerce__product--content">
            <div className="ecommerce__product--content-item">
                <div className="ecommerce__product--content-item-image"></div>
                <div className="ecommerce__product--content-item-category">Category</div>
                <div className="ecommerce__product--content-item-name">Name</div>
                <div className="ecommerce__product--content-item-cost">Cost</div>
            </div>
        </div>
    </section>
  )
}

export default EcommerceProduct