import Home from '../pages/Home'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import Search from '../pages/Search'
import ProductDetail from '../pages/ProductDetail'
import Registration from '../pages/Registration'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'


const App= () => {
  


  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Registration />} />
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<ProductDetail />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      <ToastContainer />
      </>
  )
  }
export default App
