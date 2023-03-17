import React, { useState  } from 'react'
import { Link  , useNavigate} from 'react-router-dom'
export default function Signup() {
  const navigate = useNavigate();
const [cred , setcred] = useState({email : "" , password: "" , location : ""})
  const handleSubmit = async (e) =>{
  e.preventDefault();
  const response = await fetch("http://localhost:5000/api/create" , {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({email:cred.email , password: cred.password , location : cred.location})
  });
  const json  = await response.json();
  if(!json.success){
    alert ("enter valid details")
  }else{
    navigate("/login")
  }

  }

  const onchange = async (event) => {
    setcred({...cred, [event.target.name]: event.target.value});
  }
  return (
    
<div>
  <h1>Signup</h1>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" name='email' value={cred.email} onChange={onchange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={cred.password} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='location' value={cred.location} onChange={onchange}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className='btn m-3 btn-danger' >Already a user</Link>
</form>
  
    
  </div>
    
  )
};
