import React, { useEffect, useState } from 'react'
import {add} from '../store/cartSlice'
import { useDispatch } from 'react-redux';


const Products = () => {
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();
   

    useEffect(() => {
      
      async function fetchMyAPI() {
        let response = await fetch('https://fakestoreapi.com/products')
        response = await response.json()
         setProducts(response)
        console.log(response);
      }
      fetchMyAPI();
     
    },[])
    
    const addToCart=(product)=>{
    dispatch(add(product))
     console.log(dispatch);
    }
  return (
    <div className='productsWrapper'>
      {
        products.map((product)=>(
          <div className='card' key={product.id}>
            <img src={product.image} alt="image" ></img>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn' onClick={()=>addToCart(product)}>Add to cart</button>
            </div>
        ))
      }

    </div>
  )
}

export default Products