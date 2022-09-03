import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import store from './store/store'

const App = () => {
  return (
    <div>
     <Provider store={store}>
     <Router>
        <Navbar></Navbar>
        <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </Router>
     </Provider>
    </div>
  )
}

export default App