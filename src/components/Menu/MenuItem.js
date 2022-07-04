import React from 'react';
import { IncDec } from './IncDec';
// import { MenuForm } from './MenuForm';
import './MenuItem.css'


export const MenuItem = (props) => {

  // Handlers
  const quantityHandler =(quantity)=>{
    props.quantityChange(quantity);
    props.menu_data[props.id].quantity=quantity
  }
  const formSubmitHandler =()=> {
    props.onFormSubmit()
  }
  return <>
    <li className='menu-item'>
      <img  className='flexbox image' src={props.url} alt="" />
      <div className="inner">
        <p className='itemname'> {props.itemName} </p> 
        <p className='amount'> {props.amount}</p>
        {/* <MenuForm className='flexbox add' quantityValue={quantityHandler} onFormSubmit={formSubmitHandler} /> */}
        <IncDec className='add' quantityValue={quantityHandler} onNumChange={formSubmitHandler}  />
      </div>
      
    </li>
  </>;
};
