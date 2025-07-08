import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import CartProvider from './Features/Cart/CartProvider'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider >
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/proudcts/:pid' element={<ProductDetails />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
