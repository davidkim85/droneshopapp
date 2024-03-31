import React, { useEffect, useState } from 'react'
import { auth, db } from '../services/DataBaseConfig';
import { collection, getAggregateFromServer, sum } from 'firebase/firestore';
export interface Props {
    quantity:number,
    setQuantity:(number:number)=>any,

    
   }
const CartIcon = ({quantity,setQuantity}:Props) => {
    const userUid=auth.currentUser?.uid
    const getProducts=async ()=>{
        if(userUid){
        const querySnapshot = collection(db, "carts"+userUid);
        const snapshot = await getAggregateFromServer(querySnapshot, {
            totalQuantity: sum('productQuantity')
          }); 
          console.log('totalQuantity: ', snapshot.data().totalQuantity);
        setQuantity(Number(snapshot.data().totalQuantity))
        }
      }
    useEffect(()=>{

      getProducts();
      },[quantity])
      
  return (
    <>
    <li className="nav-item mx-2 "><a className="nav-link active text-dark" aria-current="page" href="/">{quantity}</a> </li>
</>
  )
}

export default CartIcon