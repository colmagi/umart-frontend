import logo from './logo.svg';
import './App.css';
import Main from "./Main";
import {NavLink} from "react-router-dom";
import React, { Component } from 'react';
import HNavigation from "./HNavigation";

const Navigation = () => (
    <nav>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Search'>Search</NavLink></li>
    </nav>
);

function App() {
    return (
        <div className="App">
            <HNavigation/>
            <Main/>
        </div>
    );
}

export default App;
