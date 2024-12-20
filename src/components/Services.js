import React from "react";
import Card from "./Card";

import './services.css';


// Import images
import card1 from '../components/images/wifi.png';
import card2 from '../components/images/ac.png';
import card3 from '../components/images/kitchen.png';
import card4 from '../components/images/office.png'; // New image for swimming pool
import card5 from '../components/images/parking.png'; // New image for parking

function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card 
                title="Wifi Access" 
                img={card1} 
                text="Fast and reliable WiFi access throughout the villa, ensuring seamless browsing and streaming." 
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card 
                title="Air Conditioned" 
                img={card2} 
                text="Each of the five rooms is equipped with air conditioning to ensure a cool and comfortable stay, Enjoy a perfect night's rest in a climate-controlled environment"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card 
                title="Kitchen" 
                img={card3} 
                text="Fully equipped kitchen with all the essentials for preparing your meals, making it feel like home" 
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card 
                title="Working Area" 
                img={card4} 
                text="Spacious and quiet working area, perfect for focusing on tasks or getting some work done during your stay" 
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card 
                title="Parking" 
                img={card5} 
                text="Secure and convenient parking spaces available for all guests, making your stay hassle-free." 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
