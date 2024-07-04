import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import Card from '../../Components/Card';
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
        <Card/>
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