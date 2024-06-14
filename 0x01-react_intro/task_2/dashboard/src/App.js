import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import Login from './Login/Login';
import { Footer } from './Footer/Footer';
import Notifications from './Notification/Notifications';


function App() {
  return (
    <React.Fragment>

      <Notifications />

      <Header/>

      <Login />

      <Footer />

    </React.Fragment> 
  );
}


export default App;
