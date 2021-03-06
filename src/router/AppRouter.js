import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotFound from '../pages/NotFound/NotFound'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import MovieStore from '../pages/MovieStore/MovieStore'
import Details from '../pages/Details/Details'
import Register from "../pages/Register/Register";
import Personal from "../pages/Personal/Personal";


// TO DO
const id = true 

const AppRouter = () => {
    return (

            <Routes>
                <Route path='/' element={id? <Navigate to='/home'/>:<Navigate to='/Login'/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/store' element={<MovieStore/>}/>
                <Route path='/personal' element={<Personal/>}/>
                <Route path='/details/:id' element={<Details />}/>

                <Route path='/*' element={<NotFound/>}/>
            </Routes>

    )
}

export default AppRouter;