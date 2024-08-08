import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import SignUp from './Signup/signup';
import Login from './Login/login';
import Home from './Home/Homepage'
import Toolbar from './Toolbar/toolbar';
import Customorder from './CustomOrder/Customorder';
import PackageList from './Packages/PackageList/PackageList';
import Package1 from './Packages/Packages/Package1';
import OrderList from './Order/OrderList';
import AboutUs from './AboutUS/Aboutus';
import Admin from './Admin/Admin';
function App() {
  return (
    <BrowserRouter>
       <Routes>

       <Route index element={<SignUp/>}></Route>
       <Route path="/" element={<Toolbar/>}>
       <Route path='/Home' element={<Home/>}></Route>       
       <Route path='/Customorder' element={<Customorder/>}></Route>
       <Route path='/PackageList' element={<PackageList/>}></Route>
       <Route path='/Package1' element={<Package1/>}></Route>
       <Route path='/OrderList' element={<OrderList/>}></Route>
       <Route path='/AboutUs' element={<AboutUs/>}></Route>
       </Route>
       <Route path='/Login' element={<Login/>}></Route>
       <Route path='/Admin' element={<Admin/>}></Route>
       <Route path='/Signup' element={<SignUp/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App