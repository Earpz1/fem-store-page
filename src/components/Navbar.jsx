import React from 'react'
import { Row, Badge } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'
import Cart from './Cart'

const NavBar = ({ cart, removeProduct }) => {
  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => {
    if (showCart === true) {
      setShowCart(false)
    } else {
      setShowCart(true)
    }
  }

  return (
    <Row className="d-flex justify-content-center d-md-none d-lg-flex">
      <div className="d-flex justify-content-between nav-container">
        <div className="logo mt-5">sneakers</div>

        <ul className="d-flex nav-links">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="right-side-nav">
          <div className=" d-flex justify-content-end header-cart-icon">
            <AiOutlineShoppingCart className="mt-2" onClick={toggleCart} />
            <img className="nav-avatar" src="image-avatar.png" alt="Avatar" />
          </div>
          {showCart && <Cart cart={cart} removeProduct={removeProduct} />}
          <h6>
            <Badge bg="danger" className="cart-badge">
              {cart.quantity}
            </Badge>
          </h6>
        </div>
      </div>
    </Row>
  )
}

export default NavBar
