import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import MemberHome from './Pages/Member/MemberHome';
import MemberAbout from './Pages/Member/MemberAbout';
import MemberContact from './Pages/Member/MemberContact';
import PersonalProfile from './Pages/Member/PersonalProfile';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/memberhome" element={<MemberHome />} />
        <Route path="/memberabout" element={<MemberAbout />} />
        <Route path="/membercontact" element={<MemberContact />} />
        <Route path="/personalprofile" element={<PersonalProfile />} />
      </Routes>
    </Router>
    </>
 
  );
}

export default App;
