import '../App.css';
import Logo from '../Images/Logo.png';

function Aboutcontent () {
    return(
        <>
       <div id='aboutcont' className='container'>
       <div className='row'>
            <div><img src={Logo} alt="logo" />
            <div className='container' id='shortIntro'>
                <h4>Contact Us</h4>
            <p>
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the information below.
            </p>
            <br />
            <h5>Phone</h5>
                <ul>
                    <li>
                        <p>Customer Support: (123) 456-7890</p>
                    </li>
                    <li>
                        <p>Sales Inquiries: (123) 456-7891</p>
                    </li>
                </ul>
            <h5>Email</h5>
                <ul>
                    <li>
                        <p>General Inquiries: info@example.com</p>
                    </li>
                    <li>
                        <p>Support: support@example.com</p>
                    </li>
                    <li>
                        <p>Sales: sales@example.com</p>
                    </li>
                </ul>
            <h5>Address</h5>
            <p>123 Example Street City, State, ZIP Code Country</p>
            <div>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15443.737144555504!2d121.0725933286987!3d14.602819257811472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b81d8a03f6c5%3A0x2c718a49bf834007!2sEastwood%20Mall!5e0!3m2!1sen!2sph!4v1719747549722!5m2!1sen!2sph" 
                width="400" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <h5>Social Media</h5>
            <ul>
                    <li>
                        <p>Facebook: facebook.com/yourpage</p>
                    </li>
                    <li>
                        <p>Twitter: twitter.com/yourpage</p>
                    </li>
                    <li>
                        <p>Instagram: instagram.com/yourpage</p>
                    </li>
                    <li>
                        <p>LinkedIn: linkedin.com/company/yourpage</p>
                    </li>
                </ul>

            </div>
                
            </div>

            <div id='aboutcontright' className='container'>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button className='btn btn-primary'>REGISTER NOW</button>
            </div>
        </div>
       </div>
        </>
    )}
export default Aboutcontent;