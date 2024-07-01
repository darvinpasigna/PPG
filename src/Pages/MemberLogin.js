import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
// import Member from '../Pages/MemberLogin';

function MemberLogin() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Member" element={<Member />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default MemberLogin;