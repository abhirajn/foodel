import React from 'react'
// import  Badge  from 'react-bootstrap/Badge'
import { useCart , useDispatch } from './Reducer'


 
// var json;
export default function Cart() {
  var totalprice = 0;
  // var sumne = false;
  let data = useCart();
  let dispatch = useDispatch();
  // console.log(data)
  // let date =  new Date().toLocaleString()
  let date =  Date()
  // date.stringify();
  let new_date = date.slice(4,15);
  let time = date.slice(16, 24)
  const { REACT_APP_URL } = process.env;
  const handlleSubmit = async (e) => {
    // sumne = true;
    e.preventDefault();
    const response = await fetch(REACT_APP_URL+"/dis/myorders" , {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    
      body : JSON.stringify({cart : [new_date, time , ...data ]  , mail:localStorage.getItem('email')})

    });
 
  
    
    // json  = await response.json();
    // console.log(json);
    // // if(!json.success){
      
    //   alert ("enter valid details")
    // }
  // global.his = [json];
  // amplify.store("myKey", "myValue")
  // console.log( global.his)
  //  console.log(response)
    }
    const submithandle = (()=>(
      <div>
     { dispatch({type:"DEL"})}
     

</div>
    ))
    // const handleclick = ()=>{
    //     // console.log("clicked")
    //     // {document.getElementById("overlay").styles.on };
    //     const some = document.getElementById("overlay");
    //     // some.classNameName = styles
    //     console.log(styles.body)
    //     // console.log(some.classNameName)
    // }
    
  return (


    
    <div>
      
     
      <h1>MY CART</h1>
      <hr/>
 {
  data.map((food , index) => (
   
    <div {...totalprice += food.price} key={food.name}>
      
    <div className="row ">
    <div className="col">{index+1}{". "}{food.name}</div>
    <div className="col">
    <div className="row ">
    <div className="col">{food.qnt}</div>
    <div className="col">{food.size}</div>
    </div>
    </div>
    <div className="col">
    <div className="row ">
    <div className="col">{food.price}rs</div>
    <div className="col"><div className='btn mx-2 bg-danger text-white'onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>X</div></div>
    </div>
    </div>
   
  </div>
  <hr/>
  </div>
  ))
  
 }
{
(data.length !== 0) ? <div> <div className='btn bg-success mx-2' onClick={()=> {dispatch({type:"DEL"})}}>Clear All 

</div><div onClick={handlleSubmit}><div className='btn bg-success float-end mx-4 '  onClick={submithandle} >Pay {totalprice}

</div></div></div>: <h3>Your cart is empty</h3>
}

  


    </div>
  
  )
  
}

