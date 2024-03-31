import CardProduct from './CardProduct'
import useProducts from '../services/useProducts'
import { useSearchParams } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { useEffect } from 'react'


const GridProducts = () => {
    const {products,error}=useProducts()
    const [searchParams]=useSearchParams()
 function getFilteredProducts(){
    const search=searchParams.get('query');
    if (search===null || search===""){
      return products;
    } 
   
    else {
      return products.filter((product)=>product.title_name.toLowerCase().indexOf(search.toLowerCase())>-1);}
 }
 useEffect(()=>{
 
  
  
},[products])

  return (
    <Container className='mt-1'>
    <div className="row row-cols-1 row-cols-md-4 g-4">
    { getFilteredProducts().map((product)=>( <CardProduct key={product.id} product={product}/>)) }
 
    </div>
</Container>
  
  )
}

export default GridProducts