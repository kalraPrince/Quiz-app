import React from 'react'
import { useSelector } from 'react-redux'
import {remove} from '../store/cartSlice'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const Products = useSelector((state)=>state.cart);
  console.log(Products);
  const dispatch = useDispatch();
   
  const removeItem = (Product) => {
   dispatch(remove(Product));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div >
      {
        Products.map((Product)=>(
      
         <div className='cartCard'>
          <img src = {Product.image}></img>
          <h5>{Product.title}</h5>
          <h5>{Product.price}</h5>
          <button className='btn' onClick={()=>removeItem(Product.id)}>Remove</button>
          </div>
        )) 
      }
      </div>
    
    </div>
  )
}

export default Cart