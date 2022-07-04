import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home.js'
import Search from './Search.js'

const Main = () => {
    return (
        <Routes> {/* The Routes decide which component to show based on the current URL.*/}
            <Route path='/' element={<Home />}></Route>
            <Route path='/Search' element={<Search />}></Route>
        </Routes>
    );
}

export default Main;