import  { useEffect, useState } from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '../services/DataBaseConfig'
import CartItem from '../components/CartItem'
import { BiShow } from "react-icons/bi";

export interface ItemProduct {
    id: string,
    productName: string,
    productTitle:string,
    productPrice: number,
    productQuantity: number,
    productUrl:string,
    
  }


const CartContent = () => {

    const[products,setProducts]=useState<ItemProduct[]>([])
    const[total,setTotal]=useState(0)
    
 

 
    useEffect(()=>{
      getCartProducts();
     },[products,total]);




    const getCartProducts=async ()=>{
      const user=auth.currentUser;
        if (user){
        const querySnapshot = await getDocs(collection(db, "carts"+user?.uid));
        setProducts(querySnapshot.docs.map((doc)=>({
            id:doc.id,
            productName:doc.data().productName,
            productTitle:doc.data().productTitle,
            productPrice:doc.data().productPrice,
            productQuantity:doc.data().productQuantity,
            productUrl:doc.data().productUrl,
    }
    )))
  }
  totalCosts();

    }


    const totalCosts=()=>{
      let sum: number = products.map(a => a.productPrice*a.productQuantity).reduce(function(a, b)
      {
        return a + b;
      });
   setTotal(sum);
      
    }    



  return (
    <Container>

    <Row className="align-items-center">
        <hr className="featurette-divider "></hr>
        <Col className="text-center">Picture</Col>
        <Col className="text-center">Brand</Col>
        <Col className="text-center">Model</Col>
        <Col className="text-center">Quantity</Col>
        <Col className="text-center">Price</Col>
        <Col className="text-center">Delete</Col>
        <hr className="featurette-divider"></hr>
        {products.map((product)=>( <CartItem  key={product.id} product={product}/>))}
        <hr className="featurette-divider"></hr>
        {products.length>0 ? <h3>Total Costs of Cart: {total} ₪</h3> :<h3>Press the buttom to show the cart items</h3>}
      </Row>
      <Button onClick={getCartProducts} variant="primary"><BiShow /> Show Card</Button>
       
 </Container>
  )


}

export default CartContent