import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Authentication from '../components/Authentication';
import { useNavigate} from 'react-router-dom'

 

const NavBar = () => {
  const navigate=useNavigate();

 
  const onSearchEnter = (e:any)=>{
    e.preventDefault();
    const searchString=e.target.searchbox.value;
    e.target.searchbox.value='';
    navigate(`/search?query=${searchString}`);

 }


  return (
<div className='featurette shadow bg-white rounded'>
    <nav className='navbar navbar-expand-lg navbar-dark bg-transparent'>
    <div className="container">
      
      <a className="navbar-brand fs-4 text-dark " href="/" ><img src='../src/images/icons/drone.png' width='50px'/>  Drone Best Selling Store</a>
      <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="sidebar offcanvas offcanvas-start  justify-content-end align-items-end " tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div className="offcanvas-header text-white border-bottom">
          <h5 className="offcanvas-title " id="offcanvasNavbar2Label ">Navigation</h5>
          <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column p-4 flex-lg-row p-lg-0">
          <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-1">
            {/* <li className="nav-item mx-2 ">
              <a className="nav-link active text-white btn btn-dark px- py-1 rounded-4 " aria-current="page" href="/"><CiHome />Home</a>
            </li> */}
            
            <Authentication/>
            
         <li className='nav-item mx-2'>
         <Form className="d-flex m-2 text-dark" onSubmit={onSearchEnter}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-4 border-dark"
              aria-label="Search"
              name='searchbox'
            
            />
            <Button type="submit" variant="outline-primary " className='btn btn-success text-white'> Search</Button>
          </Form>

         </li>
         
          </ul>
        </div>
      </div>
    </div>
    </nav>
    
</div>
  );
}

export default NavBar;