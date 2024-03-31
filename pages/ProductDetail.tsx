import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import useProducts from '../services/useProducts'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Features from '../components/Features'

const ProductDetail = () => {

  const {id}=useParams()
  const {products}=useProducts()
  const oneProduct=products.filter((product)=>product.id==Number(id))
  

  return (
    <>
    <NavBar/>
    <Container>
    {oneProduct.map((product)=>( <Content key={product.id} product={product}/>))}
    <Features/>
    <Footer/>
    </Container>
    </>
  )
}

export default ProductDetail