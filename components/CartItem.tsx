import { useState } from 'react'
import {ItemProduct} from '../components/CartContent'
import { Row, Col, Button,Image} from 'react-bootstrap'
import { auth, db } from '../services/DataBaseConfig'
import { toast } from 'react-toastify'
import {deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'

import { CiCircleRemove } from "react-icons/ci";

export  interface Props {
   product:ItemProduct,
  }

const CartItem = ({product}:Props) => {
    const [,setProduct]=useState<Props>()
    const[,setQuantity]=useState(0);
  
    const user=auth.currentUser
  
   
    const removeCart=async (product:any)=>{
        
        if (user) {
            await deleteDoc(doc(db, "carts"+user?.uid,product.id));
            setProduct(product)

            
        }
        

    }
        const incrementQuantity=async (product:any)=>{
            setQuantity(product.quantity)
            if (user){
                const docRef = doc(db, "carts"+user?.uid,product.id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const quantity=docSnap.data().productQuantity
                    await updateDoc(docRef, {
                        productQuantity:quantity+1,
                      });
                      
                      toast.success("New quantity updated in Cart")
                    }
                }
    }

    const decrementQuantity=async (product:any)=>{
        if (user){
            const docRef = doc(db, "carts"+user?.uid, product.id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const quantity=docSnap.data().productQuantity
                if (quantity==1){
                removeCart(product)
                  toast.success(`The product has been removed from the Cart`)
                }
                else{
                    await updateDoc(docRef, {
                        productQuantity:quantity-1,
                      });
                      toast.success("New quantity updated in Cart")
                }
            }
}


    }



  return (
<>

    <Row className="align-items-center justify">
    <Col className="text-center"><Image src={product.productUrl} rounded fluid  /></Col>
    <Col className="text-center" >{product.productName}</Col>
    <Col className="text-center">{product.productTitle}</Col>
    <Col className="text-center"><Button className='btn btn-dark px- py-1 rounded-4' onClick={()=>incrementQuantity(product)}>+</Button>{product.productQuantity}<Button className='btn btn-dark px- py-1 rounded-4' onClick={()=>decrementQuantity(product)}>-</Button></Col>
    <Col className="text-center">{product.productPrice} ₪</Col>
    <Col className="text-center"><Button className='btn btn-dark px- py-1 rounded-4' onClick={()=>removeCart(product)}> Remove <CiCircleRemove />
    </Button></Col>
    <hr className="featurette-divider"></hr>
    </Row>

</>
  )
}

export default CartItem


