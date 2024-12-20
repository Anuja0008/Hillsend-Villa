import React from 'react';
import './about.css';

function About() {
  return (
    <>
      <div style={{ marginTop: '15rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img 
              alt="about" 
              src={require('../components/images/villa.jpg')} 
              className="img-fluid enlarged-img"  // First image with enlargement
            />
            {/* Add second image */}
            <img 
              alt="additional" 
              src={require('../components/images/logo.jpg')} 
              className="img-fluid second-img"  // Second image with its own class
            />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h3">ABOUT</h2>
            <p className="main-p">
            Discover Hills End Villa – a serene retreat that offers both luxury and practicality. This fully completed villa features 5 spacious bedrooms, including 4 air-conditioned rooms for ultimate comfort and 1 non-AC room, giving you flexible options for your stay.

At the heart of the villa is a modern kitchen, perfect for preparing home-cooked meals, along with a dedicated working area for those who need to stay productive. There’s also plenty of parking space to accommodate your vehicles.

Enjoy the beauty of the villa's lush cinnamon garden, a tranquil space where you can unwind and take in nature’s sights and scents. With 3 well-appointed bathrooms, including 2 attached bathrooms for added convenience, your stay will be both comfortable and private.

Hills End Villa is designed to offer you a peaceful and spacious environment, ideal for relaxation, work, and family time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
