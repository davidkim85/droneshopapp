import NavBar from '../components/NavBar'
import CarouselBar from '../components/CarouselBar'
import Jumbutron from '../components/Jumbutron'
import Features from '../components/Features'
import Footer from '../components/Footer'
import GridProducts from '../components/GridProducts'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <>
    <NavBar/>
    <Container>
    <CarouselBar/>
    <Jumbutron/>
    <GridProducts/>
    <Features/>
    <Footer/>
    </Container>
    </>
  )
}

export default Home