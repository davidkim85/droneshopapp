import {useEffect, useState } from 'react'
import {auth} from '../services/DataBaseConfig'
import {onAuthStateChanged,signOut} from 'firebase/auth'
import {User} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io"
import { PiSignIn } from "react-icons/pi"
import { LuFileSignature } from "react-icons/lu"
import { toast } from 'react-toastify'
import { BsCart4 } from "react-icons/bs";

const Authentication = () => {
    const [authenticatedUser,setAuthenticatedUser]=useState<User|null>(null)
    const navigate=useNavigate()
    useEffect(()=>{
        const listenAuth=onAuthStateChanged(auth,(user)=>{
            if (user){
                setAuthenticatedUser(user);
            }
            else{
                setAuthenticatedUser(null);
            }
            })
        return ()=>{listenAuth()};
    },[])



    const userSignOut=()=>{
        signOut(auth)
        toast.success("You has been logged out!")
        navigate('/login')

    }


  return (
    <>
        { authenticatedUser==null ? 
        <>
        <li className="nav-item mx-2"><a href='/login' className='text-white btn btn-dark  px- py-1 rounded-4 '><PiSignIn/>   Sign In</a></li>
        <li className="nav-item mx-2 "><a href='/signup' className='text-white btn btn-danger px- py-1 rounded-4'><LuFileSignature />   Sign Up</a></li>
        
        </> 
        :
        <>
        <li className="nav-item mx-2"><a className="text-white btn btn-dark  px- py-1 rounded-4" href="/cart"><BsCart4 />  Cart</a></li>
        <li className="nav-item mx-2"><a className="ext-white btn btn-danger px- py-1 rounded-4" href="#" onClick={userSignOut}><IoIosLogOut />  Sign Out</a></li>
        </>}    
    </>
  )
}

export default Authentication