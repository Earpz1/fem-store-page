import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

import ProductQuantity from './ProductQuantity'

const ProductDescription = () => {
  return (
    <div className="description-container">
      <div className="d-flex justify-content-center flex-column">
        <p className="company-name">SNEAKER COMPANY</p>
        <h1>Fall Limited Edition Sneakers </h1>
        <p className="mt-3 product-description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="d-flex price-container">
          <p className="product-price mt-2 mr-3">$125.00</p>
          <span className="product-discount mt-3 px-2">50%</span>
        </div>
        <span className="old-product-price">$250.00</span>
        <div className="d-flex">
          <ProductQuantity />
          <div className="add-to-cart mt-5 d-flex justify-content-center align-items-center">
            <CiShoppingCart className="cart-icon" /> <span>Add to cart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription