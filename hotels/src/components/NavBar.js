import React, { Component } from 'react';
import logo from "../images/dadada.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom"

class NavBar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => { this.setState({ isOpen: !this.state.isOpen }) }

    logout = () => {
        localStorage.removeItem("username")
        localStorage.removeItem("isAdmin")
    }
    render() {
        const user = localStorage.getItem("username");
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className='nav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to='/' > HOME </Link>
                        </li>
                        <li>
                            <Link to='/rooms' > Rooms </Link>
                        </li>
                        <li>
                            <a href='/services'>Services</a>
                        </li>
                        <li>
                            <Link to='/featuredrooms' > FeaturedRooms </Link>
                        </li>
                        <li>
                            <Link to='/contact' > Contact </Link>
                        </li>
                        {/* <li>
                            <Link to='/rooms' > Book a room </Link>
                        </li> */}
                        <li>
                            {user ? <><a href='/'>Hello,{user}</a><button className='btn-primary' onClick={()=>{localStorage.removeItem("username"); localStorage.removeItem("isAdmin"); window.location='/'}}>
                                logout
                                </button></> : 
                                <Link to='/login' ><button className='btn-primary'> Sign in </button> </Link>}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;