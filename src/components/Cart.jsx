import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const Cart = ({ cart, removeProduct }) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <p className="px-3 pt-3">Cart</p>
      </div>
      <div className="cart-content d-flex justify-content-center">
        {cart.length === 0 && (
          <p className="empty-cart mt-5">Your cart is empty</p>
        )}
        {cart.length !== 0 && (
          <div className="d-flex mt-3 justify-content-center w-100">
            <img src="image-product-1.jpg" className="cart-image" alt="Cart" />
            <div className="d-flex flex-column">
              <span className="cart-product-name">
                Fall Limited Edition Sneakers
              </span>
              <span className="cart-product-name">
                ${cart.price} x {cart.quantity}{' '}
                <span className="product-total-price">
                  ${cart.quantity * cart.price}
                </span>
              </span>
            </div>
            <AiOutlineDelete
              className="delete-product mt-2"
              onClick={removeProduct}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
