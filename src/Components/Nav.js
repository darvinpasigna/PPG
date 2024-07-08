import React, { useState } from 'react';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [memberInfo, setMemberInfo] = useState(() => JSON.parse(sessionStorage.getItem('member')) || []);

  const handleSignup = () => {
    const newMember = [...memberInfo, {
      regUsername,
      regPassword,
      confirmPass,
      firstName,
      lastName,
      email,
      memberInfo,
    }];
    sessionStorage.setItem('member', JSON.stringify(newMember));
    setMemberInfo(newMember);

    if (!firstName || !lastName || !email || !regUsername || !regPassword || !confirmPass) {
      alert("Please fill in all fields.");
    
    }

    if (regPassword !== confirmPass) {
      alert('Passwords do not match');
    
    }
  }

  const handleLogin = () => {
    if (!regUsername || !regPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (regUsername === regUsername && regPassword === regPassword) {
      window.location.replace('./memberhome');
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
        <div className="modal-dialog modal-dialog-centered" style={{ width: "400px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ height: "5px" }}></button>
            </div>
            <form>
              <fieldset>
                <div className="form-floating">
                  <input
                    id="username"
                    className="form-control"
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value)}
                    required
                  />
                  <label htmlFor="username" style={{ fontStyle: "italic", fontFamily: "sans-serif", fontWeight: "bolder" }}>USERNAME:</label>
                </div>
                <br />
                <div className="form-floating">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="password"
                    style={{
                      fontStyle: "italic",
                      fontFamily: "sans-serif",
                      fontWeight: "bolder"
                    }}>PASSWORD:</label>
                </div>
                <br />
                <button
                  type="button"
                  className="btn btn-primary form-control"
                  onClick={handleLogin}
                >Login</button>
                <br /> <br />
                <a style={{ color: "red" }}>Forgot password?</a>
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
        <div className="modal-dialog modal-dialog-centered" style={{ width: "400px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5>SIGN UP</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <fieldset>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text">First Name</span>
                  <input type="text" className="form-control" id='Fname' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text">Last Name</span>
                  <input type="text" className="form-control" id='Lname' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text">Email</span>
                  <input type="email" className="form-control" id='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text">Create Username</span>
                  <input
                    id='Cusername'
                    className="form-control"
                    type="text"
                    required
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value)}
                  />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text">Create Password</span>
                  <input
                    id='Cpass'
                    className="form-control"
                    type="password"
                    required
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                  />
                </div>
                <div className="input-group input-group-sm mb-3">
                  <span className="input-group-text">Re-Enter Password</span>
                  <input
                    id='repass'
                    className="form-control"
                    type="password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required />
                </div>
                <br />
                <button
                  className="btn btn-success form-control"
                  type='submit'
                  onClick={handleSignup}
                >SUBMIT</button>
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
