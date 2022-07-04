import React from 'react';
import { OrderMenu } from './OrderMenu';
import './OrderWindow.css'

export const OrderWindow = props => {
  let totalCost=0
  
  props.menu_data.filter(item=> (item.quantity!==0)
    ).map(item=>(
      totalCost+=item.amount*parseInt(item.quantity)
    ))
  const clickeHandler =()=>{
    console.log('order confirmed...')
  }
  return <div className='order-window' onClick={props.onWindowClick}>
      <div className='content'>
          <p>Confirm order</p>
          <ul>
              {props.menu_data.filter(item=> (item.quantity!==0)
              ).map(item=>(<OrderMenu
                                key={item.index}
                                url={item.url}
                                name={item.name}
                                amount={item.amount}
                                quantity={item.quantity}  />))}
          </ul>
          <p>Total Cost:{totalCost}</p>
          <button onClick={clickeHandler}>confirm order</button>
      </div>
  </div>;
};
