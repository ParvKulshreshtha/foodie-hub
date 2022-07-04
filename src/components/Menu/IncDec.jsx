import React from 'react'
import {useState} from "react";

let cartValue=0

export const IncDec = (props) => {
    let [num, setNum]= useState(0);
    const [currentCart, setCurrentCart] = useState(''); 
    let incNum =()=>{
      if(num<10)
      {
        setNum(Number(num)+1);
        console.log("num");
        props.quantityValue(num+1)
        cartValue += parseInt(num+1)
        props.onNumChange(num+1)
       }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
        console.log("num");
        props.quantityValue(num-1)
        cartValue += parseInt(num-1)
        props.onNumChange(num-1)
       }
    }
  return (
         <>
    <div className="col-xl-1">
    <div className="input-group">
  <div className="input-group-prepend">
    <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" className="form-control" value={num}/>
  <div className="input-group-prepend">
    <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
   </>
  )
}