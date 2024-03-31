import { Product } from '../services/useProducts'
import {Link} from 'react-router-dom'
import { CgDetailsMore } from "react-icons/cg";
import { SiDji } from "react-icons/si";


export  interface Props{
  product: Product
}

const CardProduct = ({product}:Props) => {
  return (
<div className="col">
<div className="card h-80 shadow p-2 mb-0 bg-white rounded" key={product.id}>
      <img src={product.photo_url} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title text-center">Model: {product.title_name}</h5>
      <p className="card-text text-center text-nowrap">Brand: {product.product_name} <SiDji/></p>
      <h4 className="card-title text-center">Price:  {product.price} ₪</h4>
      </div>
      <div className="card-footer d-flex flex-column justify-content-center align-items-center" >
        <Link to={`/detail/${product.id}`}>
        <button className="btn btn-dark" ><CgDetailsMore /> More Details</button>
        </Link>
      
      </div>
    </div>
    </div>
  )
}

export default CardProduct