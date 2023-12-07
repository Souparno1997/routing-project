import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from '../component/Home/Home'
import About from '../component/About/About'
import Features from '../component/Features/Features'
import HeaderPart from '../Layout/Header/Header'
import PNF from '../Layout/Page Not Found/PNF'
import AllUser from '../component/Users/AllUser/AllUser'
import SingleUser from '../component/Users/AllUser/SingleUser/SingleUser'


const Routing = () => {
  return (
    <Router>
        <HeaderPart/>
        <Routes>
            <Route path="" element={<Home/>}/>

            <Route path="about/:name" element={<About/>}/>
            <Route path="features" element={<Features/>}/>
            <Route path="Users" element={<AllUser/>}/>
            <Route path="Users/single-user/:userid" element={<SingleUser/>}/>

            <Route path="*" element={<PNF/>}/>

        </Routes>
    </Router>
  )
}

export default Routing