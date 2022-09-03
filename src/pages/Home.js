import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>Home
        <h1>Welcome to the Redux toolkit store</h1>
        <section>
           <h3>Productss</h3>
            <Products></Products>
        </section>
    </div>
  )
}

export default Home