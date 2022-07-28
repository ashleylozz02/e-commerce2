import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/cart";
import Footer from "./Components/footer";
import Contact from "../pages/contact";
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Announcement from "./Components/Announcement"
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";;

function App(){
  return (
    
    <Router>
    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/productList" element={<ProductList/>}/>
    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/Product" element={<Product/>}/>
    <Route path ="/Login" element={<Login/>}/>
    <Route path ="/Register" element={<Register/>}/>
    <Route path ="/Announcement" element={<Announcement/>}/>
    <Route path ="/Navbar" element={<Navbar/>}/>
    <Route path ="/Categories" element={<Categories/>}/>
    <Route path ="/Footer" element={<Footer/>}/>
    <Route path ="/cart" element={<Cart/>}/>
   </Routes>
  </Router>


);
  }

export default App;

