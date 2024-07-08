import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import LoginCards from '../../Components/LoginCards';
import Carou from '../../Components/Carou';

function MemberHome () {
    return (
        <>
        <NavLogin />
        <div className="background"></div>
        <Carou/>
        <br />
        <br />
        <h1 style={{color: "lightgray"}}>TOP SALE</h1>
        <LoginCards />
        <br />
        <br />
        <h1 style={{color: "lightgray"}}>TRENDING IN 2024</h1>
        <br />
        <br />
        <br />
        <Footer />
        </>
)}

export default MemberHome;