import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import Aboutcontent from '../../Components/Aboutcontent';

function MemberAbout () {
    return (
        <>
        <NavLogin />
        <div className="background"></div>
        <br />
        <Aboutcontent />
        <br />
        <Footer />
        </>
)}

export default MemberAbout;