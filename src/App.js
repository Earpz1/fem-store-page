import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/Navbar'
import ProductImages from './components/ProductImages'
import { Container } from 'react-bootstrap'
import ProductDescription from './components/ProductDescription'

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <div className="d-flex">
          <ProductImages />
          <ProductDescription />
        </div>
      </Container>
    </>
  )
}

export default App
