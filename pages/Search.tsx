import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import GridProducts from '../components/GridProducts'
import Footer from '../components/Footer'
import Features from '../components/Features'
const Search = () => {
   
  return (
    <>
    <NavBar/>
    <Container>
    <GridProducts/>
    <Features/>
    <Footer/>
    </Container>
    </>
  )
}

export default Search