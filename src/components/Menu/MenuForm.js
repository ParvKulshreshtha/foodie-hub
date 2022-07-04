import React,{useState} from 'react';
import './MenuForm.css'
import AddIcon from './icons/take-away.png'

let cartValue=0

export const MenuForm = (props) => {
  // useState Hooks
  const [currentCart, setCurrentCart] = useState(''); 
  const [showQuantity, setShowQuantity]=useState(false)

  // Handlers
  const quantityShowHandler =()=>{
    // on changing items quantity
      setShowQuantity(true)
  }
  const cartChangeHandler =(event)=>{
    setCurrentCart(event.target.value)
  }

  const addHandler = (event) =>{
      event.preventDefault()
      props.quantityValue(currentCart)
      cartValue += parseInt(currentCart)
      props.onFormSubmit(cartValue)
      setShowQuantity(false)
      setCurrentCart('')
  }

  // return 
  return <div>
      {showQuantity && <form onSubmit={addHandler}>
        <input className='add submit' type="number" onChange={cartChangeHandler} value={currentCart} min={0} step={1} />
        <button type='submit' className='add'> {AddIcon} </button>   
        </form>}
      {!showQuantity &&  <button className='add' onClick = {quantityShowHandler}> Add </button>}
  </div>;
};