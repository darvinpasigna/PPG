import './App.css';
import Carou from './Components/Carou';
import Card from './Components/Card';
import NavLogin from './Components/NavLogin';

function Login () {
    return (
        <>
        <NavLogin/>
        <div className="background"></div>
        <Carou/>
        <Card/>
        <br />
        <br />
        <Card/>
        <br />
        <br />
        <br />
        <br />
        </>
)}

export default Login;