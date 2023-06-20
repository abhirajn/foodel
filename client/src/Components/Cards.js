import React, { useState } from "react";
// import Cart from "./Cart";
import { useCart , useDispatch  } from "./Reducer";
// import { Link } from 'react-router-dom';




export default function Cards(props) {
  
  let options = props.cardopt;
  let realopt = Object.keys(options);
 const dispatch = useDispatch();
  // console.log(useDispatch())
 
  let data = useCart();
  const[qnt , setQnt] = useState(1);
  const[size ,  setSize ] = useState(realopt[0]);
  
// const {addToCart} = useDispatch;
  const handleAddToCart=async ()=>{
     await dispatch({
      type : "ADD", name: props.card.name, quant : qnt , sizee : size, price : price
    
     });
// console.log(data)

  };
let price = qnt * parseInt(options[size])

  return (
    
    <div>
      <div class="card m-3  " style={{ width: "18rem" }}>
        <img
          src={props.cardimg}
          class="card-img-top"
          alt="."
          style={{ height: "140px ", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.card.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-secondary rounded" onChange={(e) => {setQnt(e.target.value)}}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 bg-secondary rounded" onChange={(e) => {setSize(e.target.value)}}>
              {realopt.map((data) => {
                return (
                  <option key={data} value={data}>
                    {" "}
                    {data}
                  </option>
                );
              })}
            </select>

            <div className="d-inline  fs-5">{price}</div>
          </div>
          <hr/>
          <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart} > Add to cart</button>
        </div>
      </div>
    </div>
   
  );
}
