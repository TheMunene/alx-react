import logo from './logo.jpg';
import React from 'react'
import './Header.css';

export function Header () {
    return(
        <div>
            <header className="App-header">
            <img src={logo} alt="logo"></img>
            <h1>School dashboard</h1>
        </header>
        <hr className='hr'></hr>

      </div>
    );
}