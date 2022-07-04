import React from 'react'
import './OrderMenu.css'

export const OrderMenu = (props) => {
  return (
    <div className='inner'>
        <span className="itemname">{props.name}</span>
        <p className='amount'>{props.amount}*{props.quantity}:{props.amount*props.quantity}</p>
    </div>
  )
}