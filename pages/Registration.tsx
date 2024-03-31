import { FormEvent, useState } from 'react'
import NavBar from '../components/NavBar'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import {auth, db} from '../services/DataBaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { HiOutlineDocumentText } from "react-icons/hi";


const Registration = () => {
    const [fullName,setFullName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();

    const SignUp = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
            await addDoc(collection(db,'users'),{
              fullName:fullName,
              email:email,
              password:password,
              phone:phone,
              created:serverTimestamp(),
            })
            toast.success("You has been registered!");
            navigate('/');
             
         })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`${errorCode}+" "+${errorMessage}`);
            setFullName('')
            setPhone('')
            setEmail('');
            setPassword('');
          
         });
         

    }
    
  return (
    <>
     
    <NavBar/>
    <Container>
    <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase text-center"><HiOutlineDocumentText /> Sign Up</h2>
                <p className=" mb-2">Please enter your details to join us!</p>
                <Form onSubmit={SignUp}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formFullName"
                    >
                      <Form.Label className="text-center">
                        Your full name
                      </Form.Label>
                      <Form.Control type="text" placeholder="Enter Full name" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formPhoneNumber"
                    >
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formEmail"
                    >
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <InputGroup>
                        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        
                      </InputGroup>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>
                  </Row>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Already have an account?{" "}
                    <a href="/login" className="text-primary fw-bold">
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
     </Container>
    </>
   
  )
}

export default Registration