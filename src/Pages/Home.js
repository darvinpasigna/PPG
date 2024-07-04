import '../App.css';
import Carou from '../Components/Carou';
import Card from '../Components/Card';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';

function Home () {
    return (
        <>
        <NavBar />
        <div className="background"></div>
        <Carou/>
        <br />
        <br />
        <h1 style={{color: "lightgray"}}>Rare Cards</h1>
        <Card/>
        <br />
        <br />
        <h1 style={{color: "lightgray"}}>TRENDING IN 2024</h1>
        <br />
        <Footer />
        </>
)}

export default Home;