import {Container} from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CartContent from '../components/CartContent'
import Features from '../components/Features'
const Cart = () => {
  return (
    <Container>
    <NavBar/>
    <CartContent/>
    <Features/>
    <Footer/>
 </Container>
  )
}

export default Cart