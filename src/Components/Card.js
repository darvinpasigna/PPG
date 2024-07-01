import React from 'react';
import IMG1 from '../Images/Carousel1.jpg';
import IMG2 from '../Images/Carousel2.jpg';
import IMG3 from '../Images/Carousel3.jpg';
import IMG4 from '../Images/Logo.png';
import '../App.css';

const images = [IMG1, IMG2, IMG3, IMG4];

const Card = () => {
  return (
    
            <div className="card-container">
              {images.map((image, index) => (
                <div key={index} className="card" style={{ width: '18rem' }}>
                  <img src={image} className="card-img-top" alt={`Card ${index + 1}`} />
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
              ))}
          </div>
    
  );
}

export default Card;
