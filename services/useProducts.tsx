import {useState,useEffect} from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios';


interface Description {
    id:number;
    description:string;
    product_id:number;
  
  }
  
  interface Detail{
    id:number;
    url: string;
    header_name:string;
    content:string;
    product_id: number;
  }
  
export  interface Product {
    id: number;
    title_name: string;
    product_name: string;
    photo_url: string;
    price:number;
    details: Detail[];
    descriptions:Description[];
  }


const useProducts = () => {
    const [products,setProducts]=useState<Product[]>([]);
    const [error,setError]=useState([]);
    useEffect(()=>{
     const controller= new AbortController
        apiClient.get<Product[]>('/list',{signal:controller.signal})
        .then(products => setProducts(products.data))
        .catch((err)=>{
            if (err instanceof CanceledError) return;
            setError(err.message)
        });
        return () => controller.abort();
    },[]);

    return{products,error}

}

export default useProducts