import React, { useState } from 'react';
import '../App.css';
import favatar1 from '../Images/F_avatar1.jpg';
import favatar2 from '../Images/F_avatar2.jpg';
import favatar3 from '../Images/F_avatar3.jpg';
import mavatar1 from '../Images/M_avatar1.jpeg';
import mavatar2 from '../Images/M_avatar2.jpg';
import mavatar3 from '../Images/M_avatar3.png';

function PersonalInfo() {
    const boyAvatar = [mavatar1, mavatar2, mavatar3];
    const girlAvatar = [favatar1, favatar2, favatar3];
    const [gender, setGender] = useState('');

    function RandomAvatar() {
        const randomMAvatar = Math.floor(Math.random() * boyAvatar.length);
        const randomFAvatar = Math.floor(Math.random() * girlAvatar.length);
        if (gender === "Male") {
            return boyAvatar[randomMAvatar];
        } else if (gender === "Female") {
            return girlAvatar[randomFAvatar];
        } else {
            return '';
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={RandomAvatar()} alt="profilepic" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="personaldetail col-4">
                    <form>
                        <fieldset>
                            <h5 style={{color: "white"}}>Name: </h5>
                            <h5 style={{color: "white"}}>Email: </h5>
                            <label style={{color: "white", marginRight: "10px"}}>Gender:</label> 
                            <select onChange={(e) => setGender(e.target.value)} value={gender}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <br /> <br />
                            <input className="form-control" type="date" />
                            <br />
                            <label style={{color: "white"}}>Address:</label>
                            <input className="form-control" type="text" placeholder="Barangay" />
                            <br />
                            <input className="form-control" type="text" placeholder="City" />
                            <br />
                            <input className="form-control" type="text" placeholder="Province" />
                            <br />
                            <label style={{color: "white", marginRight: "10px"}}>ZIP CODE:</label>
                            <input type="number" placeholder="1234" />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;
