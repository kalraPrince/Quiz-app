import React, { useEffect, useState } from 'react'
import {add} from '../store/cartSlice'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { useSelector } from 'react-redux';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    // const [products,setProducts] = useState([]);
    const dispatch = useDispatch();
    const {data : products,status} = useSelector((state)=>state.product);   

    useEffect(() => {
      
      dispatch(fetchProducts())
      console.log("1");
      // async function fetchMyAPI() {
      //   let response = await fetch('https://fakestoreapi.com/products')
      //   response = await response.json()
      //    setProducts(response)
      //   console.log(response);
      // }
      // fetchMyAPI();
     
    },[])
    
    const addToCart=(product)=>{
    dispatch(add(product))
     console.log(dispatch);
    }
    if(status == STATUSES.LOADING){
      return <h1>Loading ...</h1>
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