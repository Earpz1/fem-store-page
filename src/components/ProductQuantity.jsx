import React from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'

const ProductQuantity = ({ removeQuantity, addQuantity, quantity }) => {
  return (
    <div className="quantity-container d-flex px-3 mt-5 justify-content-between align-items-center">
      <HiMinus className="quantity-icon" onClick={removeQuantity} />
      <span className="quantity">{quantity}</span>
      <HiPlus className="quantity-icon" onClick={addQuantity} />
    </div>
  )
}

export default ProductQuantity
