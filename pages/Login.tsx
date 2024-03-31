import {FormEvent, useState} from 'react'
import NavBar from '../components/NavBar'
import { Container, Row, Col, Card, Form} from 'react-bootstrap'
import {signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {auth, db, googleProvider} from '../services/DataBaseConfig'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaUserAlt } from "react-icons/fa";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FcGoogle } from "react-icons/fc";
import Features from '../components/Features'



const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const SignInWithGoogle = async ()=>{{
      await signInWithPopup(auth,googleProvider).then(async(result) => {
        toast.success("User has been logged by google!")
        const user = result.user;
        await addDoc(collection(db,'users'),{
          fullName:user.displayName,
          email:user.email,
          password:'',
          phone:user.phoneNumber,
          created:serverTimestamp(),
      }).then(()=>{
        navigate('/')
      }).catch(() => {
        toast.success('User exists!');
     });
    })}
    }

 


    const SignIn = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success("You has been logged!");
            setEmail('');
            setPassword('');
            navigate('/');
            })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${errorCode}+" "+${errorMessage}`)
        setEmail('')
        setPassword('')
     }
     );
    }

  return (
    <>
    
    <NavBar/>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase text-center"><FaUserAlt /> Sign in</h2>
                <Form className="mb-3" onSubmit={SignIn}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                  </Form.Group>
                  <div className="mb-3">
                    <p className="small">
                      <a className="text-primary" href="#!">
                        Forgot password?
                      </a>
                    </p>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary " type="submit">
                      Login
                    </button>
                  </div>
                  </Form>
                  <div className="d-grid">
                  <button className="btn btn-danger " onClick={SignInWithGoogle}>
                      Login by <FcGoogle /> Google account
                    </button>
                </div>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-primary fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Features/>
    </Container>
    </>
  )
}

export default Login