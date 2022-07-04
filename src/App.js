import { useState, } from 'react';
import './App.css'
import { Order } from "./components/Order/Order";
import {Menu} from "./components/Menu/Menu"
import { OrderWindow } from './components/Order/OrderWindow';
import Modal from 'react-modal'

// Main Data 
const Items=[
  {
    name:"Margherita pizza",
    type:"PIZZA",
    amount:160,
    index:0,
    quantity:0,
    url:"https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18190748/051092068-01-pizza-recipe-main.jpg"
  },
  {
    name:"Chicken Crspy Burger",
    type:"Burger",
    amount:120,
    index:1,
    quantity:0,
    url:"https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
  },
  {
    name:"Noodles",
    type:"Chinese",
    amount:140,
    index:2,
    quantity:0,
    url:"https://images.unsplash.com/photo-1592312406345-c6f552c9619f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
  },
  {
    name:"Manchurian",
    type:"Chinese",
    amount:80,
    index:3,
    quantity:0,
    url:"https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/chinese-veg-manchurian-asian-style-vegetarian-meatless-meatballs-2621185.jpg"
  },
  {
    name:"Pepperoni",
    type:"Pizza",
    amount:140,
    index:4,
    quantity:0,
    url:'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    name:"Butter Chicken",
    type:"Chinese",
    amount:215,
    index:5,
    quantity:0,
    url:"https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/indian-butter-chicken-8.jpg"
  },
  {
    name:"Mac&Cheese",
    type:"Pasta",
    amount:270,
    index:6,
    quantity:0,
    url:"https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1898839932584067401/7ae6390f5d41cba1e52501ca038d3fdc_large.png&width=512&type=webp&quality=90"
  },
  {
    name:"Mutton Biryani",
    type:"Biryani",
    amount:140,
    index:7,
    quantity:0,
    url:"https://lh3.googleusercontent.com/NPBxbGVp4jkF0NunasuFl3JE_QdLCRndkj2kS1bkT0i_PCQ7BJKSYt_0RqVkhT449XrYaR7ehz36R1JJkhK_-d6yL4e6=w512"
  },
]

Modal.setAppElement('#root')

function App() {
  // useState Hooks
  const [cartValue, setCartValue] = useState(0);
  const [order, setOrder] = useState(false);

  // Handlers
  const addToCartHandler=()=>{
    setOrder(true)
    console.log(Items)

  }
  const cartValueHandler =()=> {
    let count=0
    Items.map(item=> parseInt(item.quantity)!==0 ? count += 1:'')
    setCartValue(count)
  }
  
  return (
    
    <div className="App">
      <div className="banner">
        {!order && <Order className='order-btn' onAddToCart={addToCartHandler} cartValue={cartValue} />}
        <h1>FoodieHub</h1>
      </div>
      <Modal isOpen={order} onRequestClose={() => setOrder(false)}>
        <OrderWindow menu_data={Items} />
      </Modal>
      <Menu 
            className="Menu"
            cartValue={cartValueHandler} 
            menu_data={Items}/>
    </div>
  );
}

export default App;
