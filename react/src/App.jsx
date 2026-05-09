import React,{useState} from 'react'
import Navbar from './component/Navbar'
import Container from './component/Container'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Homes from './pages/Homes'
import Profile from './pages/Profile'
import Wishlist from './pages/Wishlist'
import Bag from './pages/Bag'
import Homepage from './pages/Homepage'
import ProductDetails from './pages/ProductDetails'
import Login from './Authentication/Login'




function App() {
  const [search,setSearch] = useState("");
  return (
    <>
      <Navbar name="StyleKart" search={search} setSearch={setSearch}/>

      <Routes>
        <Route path='/' element={<Homepage search={search} />} />
        <Route path='/Men' element={<Men search={search} />} />
        <Route path='/Women' element={<Women  search={search}/>} />
        <Route path='/Kids' element={<Kids search={search}/>} />
        <Route path='/Homes' element={<Homes search={search}/>} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/Bag' element={<Bag />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      {/*<Container />*/}
    </>
  )
}

export default App