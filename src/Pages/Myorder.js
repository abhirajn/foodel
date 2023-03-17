// import { response } from 'express';
import React , {useEffect , useState} from 'react'

import Myord from '../Components/Myord';
// import { response } from 'express';

export default function Myorder() {
  let email = window.localStorage.getItem('email')


 

  // })


  const [hist, setHist] = useState([])

  useEffect(() => {
    // console.log("here")
    fetch("http://localhost:5000/api/myordersdisplay", {
       method:"GET"
     }).then((res)=> res.json()).then((data)=>{
       data.map((anodata)=>{
         if(anodata.email === email){
          //  anodata.history.map((hisdata)=>{
          //   setHist([...hist , hisdata])
          //  })
          setHist( anodata.history)
         }
       })
       
     })
   
     
   
   }, [])
  //  console.log(hist)

  return (
    




    <div >
      <h1 className='text-success'>Previous Orders</h1>
    <br/>

  {
    
    hist.map((data , index)=>{
      //  <h3>{data[0]}{ " "}{data[1]}</h3>
      var totalprice = 0;
       return <div key={data[1]}>
            <h3>{data[0]}{ " "}</h3>
            <h6>{data[1]}</h6>
            {
              data.map((newdata,i)=>{
                if(i >= 2){
                  return <div {...totalprice += newdata.price}>
                  <h5>{newdata.qnt + " x "}{newdata.size + " x "}{newdata.name + " = " }{newdata.price}</h5>
                 </div>
                }
                
              })
            
            } 
            <h5>{"Order value = " + totalprice}</h5>
               <hr/>
       </div>

       
    

  
        
      
      // for (let index = 0; index < array.length; index++) {
      //   const element = array[index];
        
      // }
      



       })
  }
    </div>
  )
}
