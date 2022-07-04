import React from 'react';
import plateIcon from './icons/pieces-of-cutlery.png'
import './Order.css'

export const Order = (props) => {
  return <div>
      <button className='order-btn' onClick={props.onAddToCart}><img src={plateIcon} alt="" />
        <span className='cart-value'>Order {props.cartValue}</span>
      </button>
  </div>;
};
