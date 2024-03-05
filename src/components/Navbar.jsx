import React from 'react'
import logo from '../assets/img/cupcakelogo.png';
import '../assets/styles/navbar.css'
import { Link } from 'react-router-dom';
// paketten gelen link tag ini ekledik

const navbar = () => {
    return (
        <div className='navbar'>
            <div className='letfSide'>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className='name'>
                <Link to="/"><h3>Milky Cupcakes </h3></Link>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default navbar