import {useNavigate } from 'react-router-dom'
import { Props } from './CardProduct'
import { auth, db } from '../services/DataBaseConfig'
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { BsCartPlus } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";



const Content = ({product}:Props) => {
    const user=auth.currentUser;
    const navigate=useNavigate()
    
    const addToCart=async ()=>{
        if (user){
        const docRef = doc(db, "carts"+user?.uid, user?.uid+product.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const quantity=docSnap.data().productQuantity
            await updateDoc(docRef, {
                productQuantity:quantity+1,
              });
              
              toast.success("New quantity updated in Cart")
        } 
        
        else {
            await setDoc(doc(db,"carts"+user?.uid,user?.uid+product.id),{
                productTitle:product.title_name,
                productName:product.product_name,
                productQuantity:1,
                productPrice:product.price,
                productUrl:product.photo_url,
                created:serverTimestamp(),
              }
              )
              toast.success("New product added to Cart")
            
    }
    }
    else {
        navigate('/login')
        toast.success("Please login or sign up")

    }

    }





  return (
    <>
    <hr className="featurette-divider"></hr>
    <div className="row featurette shadow p-3 mb-5 bg-white rounded" >
      
      <div className="col-md-7 " >
        <h1 className="featurette-heading fw-normal lh-1 " key={product.id}>{product.title_name} <span className="text-body-secondary"></span></h1>
        <p className="lead"> Brand: {product.product_name}</p>
   
        <h3 className='m-3'>Product Descriptions:</h3>
        {product.descriptions.map((desc)=><><li className="m-1" key={desc.id}>{desc.description}</li></>)}
      
        <h3 className='m-4'><ImPriceTag />  Price: {product.price} ₪</h3>
        <button className='m-4 btn btn-dark' onClick={addToCart}><BsCartPlus /> Add to Cart</button>
        
      </div>
      <div className="col-md-5">
      <img className="img-fluid" src={product.photo_url} width="500" height="500"/></div>
    </div>
     
    <hr className="featurette-divider"></hr>
    {product.details.map((detail)=>
    
    <><div className="row featurette m-3 shadow p-3 mb-5 bg-white rounded" key={detail.id}>
        <div className="col-md-7 order-md-2">
          
          <h2 className="featurette-heading fw-normal lh-1">{detail.header_name}
          </h2>
          <p className="lead"> {product.product_name}</p>
          <hr className="featurette-divider"></hr>
          <p>{detail.content}</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="img-fluid" src={detail.url} width="500" height="500" />
        </div>
      </div><div>
          <hr className="featurette-divider"></hr>
        </div></>
       )}
    <hr className="featurette-divider"></hr>
    
 
    </>
  )
}

export default Content