import React , {useState}  from 'react'
import 'bootstrap';
import 'react-bootstrap';
// import { Nav  } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link  , useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Cart from './Cart';
import Modal from './Modal';
// import Modall from './OrderModal';
import Myorder from '../Pages/Myorder';
import Myord from './Myord';


export default function Navbarr() {
  const [cartView, setCartView] = useState(false)
  const [myorderView, setMyorderView] = useState(false)
const navigate = useNavigate();
const handleChange = ()=>{
  localStorage.removeItem("authToken");
  navigate("/");
}
const loadorder = () => {
  setMyorderView(true)
}

const loadCart = () => {
  setCartView(true)
}

  return (
    <div>
  
<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
<Link className="navbar-brand fs-2" to="/">Foodel</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto me-auto mb-2">
      <li className="nav-item active">
        <Link className="nav-link active fs-5" to="/">Home</Link>
      </li>
     
      {
        (localStorage.getItem("authToken"))?
        <li className="nav-item active">
        <Link className="nav-link active fs-5" to="/" onClick={loadorder} >My Orders</Link>
      
      </li>
      :""
      }
        {myorderView ? <Modal onClose={() => setMyorderView(false)}> <Myorder></Myorder> </Modal> : ""}

       </ul>
      {
        (!localStorage.getItem("authToken"))?
        <div className='d-flex m-2' > 
        <Link className="btn btn-success text-white mx-1 " to="/signup">Signup</Link>
        <Link className="btn btn-success text-white mx-1" to="/login">Login</Link>
        </div>
        :
        <div>
          
          <div className='btn bg-white text-success mx-2' onClick={loadCart}>
      My Cart 
      
          </div>
          {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
          <div className='btn bg-white text-danger mx-2' onClick={handleChange}>
          Logout
          </div>
        </div>
      }
 
      
  
 
    
  </div>
</nav>


    </div>
  );
}
