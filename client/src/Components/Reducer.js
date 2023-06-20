
/* eslint-disable react-hooks/rules-of-hooks */

import React, { createContext, useReducer, useContext } from "react";







const cartContext = createContext();
const dispatchContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return( [...state, { name: action.name , qnt : action.quant ,size: action.sizee, price :action.price }]
            )
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;    
        case "DEL":
            return (
                 []
            )    

        default:
            break;
    }
}

export const CartProvider = ({ children }) => {
 
   

const [state, dispatch] = useReducer(reducer,[]);


    return (
        
        <dispatchContext.Provider value={dispatch }>
            <cartContext.Provider value={state}>
                {children}
                {/* {console.log(cartProvider)} */}
            </cartContext.Provider>
        </dispatchContext.Provider>
        
    )
};







// console.log(dispatchContext)
// console.log(cartContext)
export  const useCart = () => useContext(cartContext);
export  const useDispatch = () =>  useContext(dispatchContext);
// console.log(useDispatch())