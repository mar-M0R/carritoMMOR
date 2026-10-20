//import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { CartProvider } from './context/CartProvider'
import { BrowserRouter, Routes, Route } from "react-router"
import { Catalog } from './components/Catalog'
import { Cart } from './components/Cart'
import { AddProductForm } from './components/AppPoductForm'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Catalog/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/add' element={<AddProductForm/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App