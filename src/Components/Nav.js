import React from 'react';
import { useState } from 'react';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
      if (username === regUsername && password === regPassword) {
          window.location.replace('./Login')
      } else {
          alert("Wrong Username or Password");
      }
  }
  
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <Link to="/"><img id='Logo1' src={Logo} alt="logo" width={250} height={50} /></Link>
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
                <Link className="nav-link" to="/About">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact Us</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-none" style={{ backgroundColor: "dark" }} type="submit">Search</button>
              <button className="btn btn-outline-none" style={{ backgroundColor: "dark" }} type='button' data-bs-toggle="modal" data-bs-target="#login">Login</button>
            </form>
           
          </div>
        </div>
      </nav>
       {/* Login Modal */}
       <div className="modal" id="login">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form id="loginFormElement">
                        <fieldset>
                            <label className="form-label">USERNAME:</label>
                            <input
                                id="username"
                                className="form-control"
                                placeholder="Enter Email Address"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <br />
                            <label className="form-label">PASSWORD:</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <br />

                            <button 
                            type="button" 
                            className="btn btn-primary form-control"
                            onClick={handleSubmit}
                            >Login</button>

                            <br /> <br />
                            <a href="#" style={{color: "red"}}>Forgot password?</a>
                            <br /> <br />
                            <p>Not a member?</p>

                            <button 
                            className='btn btn-success form-control' 
                            type='button' 
                            data-bs-toggle="modal" 
                            data-bs-target="#signup"
                            >Sign Up</button>
                            <br /><br />
                            
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
            {/* End Login Modal */}

            {/* Sign up Modal */}
            <div className="modal" id="signup">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                <form>
                    <fieldset>
                        <input className="form-control" type="text" placeholder="First Name" required/>
                        <input className="form-control" type="text" placeholder="Last Name" required/>
                        <input className="form-control" type="email" placeholder="Email" required/>

                        <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Create Username" 
                        required
                        value={regUsername}
                        onChange={(e) => setRegUsername(e.target.value)}
                        />

                        <input 
                        className="form-control" 
                        type="password" 
                        placeholder="Create Password" 
                        required
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        />

                        <input className="form-control" type="password" placeholder="Confirm Password" required/>
                        <br />
                        <button 
                        className="btn btn-success form-control" 
                        type='button'
                        data-bs-toggle="modal" 
                        data-bs-target="#login"
                        >Sign Up</button>
                      </fieldset>
                </form>
                    </div>
                </div>
            </div>
            {/* End Sign Up Modal */}
    </>
  );
}

export default NavBar;
