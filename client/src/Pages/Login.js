import React , {useState}from 'react'
import { Link  , useNavigate} from 'react-router-dom'



// export default function login() {
    //  const Newuse =  ()=>{
      const App = () => {

     

      // const state = useState();
      const [cred , setCred] = useState({email : "" , password: ""})
    //  }


    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login" , {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    
      body : JSON.stringify({email: cred.email , password: cred.password })
    });
    const json  = await response.json();
    if(!json.success){
      
      alert ("enter valid details")
    }
    if(json.success){
      localStorage.setItem("authToken" , json.authToken);
      
 
      console.log(localStorage.getItem("authToken"))
      navigate ("/");
      // alert ("success")
    }
  
   
    }
    const onchange = async (event) => {
      // console.log(cred.email , cred.password);
    
      setCred({...cred, [event.target.name]: event.target.value});
    }

  
   

  return (
    <div>
      <h1>Login</h1>
      {     global.mail = cred.email}
      {window.localStorage.setItem("email" , cred.email)}
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
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/signup" className='btn m-3 btn-danger' >new user</Link>
</form>
  
    
  </div>
  )
  
     }


      

export default App;

