import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export default class Navbar extends Component {
    render() {
        return (
            <nav className = "navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
                <Link to="/products">
                    <img src={logo} alt = "Store" className="navbar-brand"></img>
                </Link>
                <ul className = "navbar-nav ml-auto">
                    <li className = "nav-item ml-5">
                        <Link to = "/products" className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to = "/cart" className = "btn btn-secondary" style={{marginLeft:"auto",backgroundColor:"white",color:"black",fontFamily:"monospace",cursor:"pointer",transition:"all 0.5s ease-in-out"}}>
                    My Cart
                </Link>
            </nav>
        )
    }
}
