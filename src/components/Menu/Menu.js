import React from 'react';
import {MenuItem} from './MenuItem'
import './Menu.css'

export const Menu = (props) => {
  const formSubmitHandler =()=> {
    props.cartValue()
  }
  const quantityChangeHandler =(quantity)=>{

  }
  return <>
    <ul className='Menu'>
        {props.menu_data.map(item => (
            <MenuItem   key={item.index}
                        id={item.index}
                        itemName={item.name} 
                        amount={item.amount}
                        quantity={item.quantity}
                        url={item.url}
                        quantityChange={quantityChangeHandler}
                        onFormSubmit={formSubmitHandler}
                        menu_data={props.menu_data}/>))}
    </ul>
  </>;
};
