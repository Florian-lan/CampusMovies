import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotFound from '../pages/NotFound/NotFound'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import MovieStore from '../pages/MovieStore/MovieStore'
import Details from '../pages/Details/Details'


// TO DO
const id = true 

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={id? <Navigate to='/home'/>:<Navigate to='/Login'/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/store' element={<MovieStore/>}/>
                <Route path='/details/:id' element={<Details />}/>

                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;