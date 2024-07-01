import React from 'react';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
import '../App.css';

function NavLogin() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link><img id='Logo1' src={Logo} alt="logo" width={250} height={50}/></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./About">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact Us</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-none" style={{backgroundColor: "dark"}} type="button">Search</button>
            <button className="btn btn-outline-none" style={{backgroundColor: "dark"}} type="button">Cart</button>
            <button className="btn btn-outline-none" style={{backgroundColor: "dark"}} type="button">Messages</button>
            <div className='dropdown'>
            <button 
            className="btn btn-outline-none dropdown-toggle" 
            style={{backgroundColor: "dark"}} 
            type="button"
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            >Profile</button>
            <ul className='dropdown-menu'>
                <li>Personal Info</li>
                <li>Account Settings</li>
                <li><Link to="/" style={{textDecoration: "none", color: 'lightgray'}}>Logout</Link></li>
            </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavLogin;
