import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/Navbar'
import ProductImages from './components/ProductImages'
import { Container } from 'react-bootstrap'
import ProductDescription from './components/ProductDescription'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (quantity) => {
    setCart({
      product: 'Fall Limited Edition Sneakers',
      price: '125',
      quantity: quantity,
      image: 'image-product-1.jpg',
    })
  }

  const removeFromCart = () => {
    setCart([])
  }

  return (
    <>
      <Container>
        <NavBar cart={cart} removeProduct={removeFromCart} />
        <div className="d-flex">
          <ProductImages />
          <ProductDescription addProduct={addToCart} />
        </div>
      </Container>
    </>
  )
}

export default App
