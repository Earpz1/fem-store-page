import React from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { useState } from 'react'

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1)

  const addQuantity = () => {
    setQuantity(quantity + 1)
  }

  const removeQuantity = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <div className="quantity-container d-flex px-3 mt-5 justify-content-between align-items-center">
      <HiMinus className="quantity-icon" onClick={removeQuantity} />
      <span className="quantity">{quantity}</span>
      <HiPlus className="quantity-icon" onClick={addQuantity} />
    </div>
  )
}

export default ProductQuantity
