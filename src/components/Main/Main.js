import React from 'react';
import '../../App.css';
import './Main.css';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Cards';

function Main() {
    return (
        <div className="main-container">
            <img className="main-img" src='images/img-home.jpeg'/>
            <p>No chance ? Provoke It.</p>
            <h1>PROVOKE</h1>
            <Cards />
            <Footer /> 
        </div>
    )
}

export default Main;
