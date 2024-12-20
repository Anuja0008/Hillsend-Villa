import React from "react";
import video from "../components/images/srilanka.mp4";

function Header() {
  const handleBookNowClick = () => {
    window.open("https://www.booking.com", "_blank"); // Opens Booking.com in a new tab
  };

  const handleEmailClick = () => {
    window.open("mailto:info@hillsendvilla.com", "_self"); // Opens the default email client
  };

  return (
    <header>
      {/* Video Background */}
      <video src={video} loop autoPlay muted playsInline className="video-bg"></video>
      
      {/* Color-changing text */}
      <h1 className="color-changing-text">Welcome to Hillsend Villa</h1>
      
      {/* Button container */}
      <div className="button-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {/* Book Now Button */}
        <button
          className="btn"
          style={{ cursor: "pointer" }}
          onClick={handleBookNowClick} // Correct handler for Book Now button
        >
          Book Now
        </button>

        {/* Email Button */}
        <button
          className="btn"
          style={{ cursor: "pointer" }}
          onClick={handleEmailClick} // Correct handler for Email button
        >
          Email
        </button>
      </div>

      {/* Background overlay */}
      <div className="headerbg"></div>

      {/* Styles */}
      <style jsx>{`
        /* Video Background */
        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        /* Color-changing effect on the text */
        .color-changing-text {
          font-size: 3rem;
          font-family: Arial, sans-serif;
          animation: colorChange 5s infinite alternate;
        }

        /* Keyframes for the color-changing animation */
        @keyframes colorChange {
          0% {
            color: #FFAC1C; /* Orange color */
          }
          25% {
            color: #FF5733; /* Red color */
          }
          50% {
            color: #33FF57; /* Green color */
          }
          75% {
            color: #3380FF; /* Blue color */
          }
          100% {
            color: #F0E68C; /* Khaki color */
          }
        }

        /* Button container styling */
        .button-container {
          margin-top: 20px;
        }

        .btn {
          background-color:rgb(63, 152, 7);
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn:hover {
          background-color: #FF5733;
        }

        /* Header background overlay */
        .headerbg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: -1;
        }
      `}</style>
    </header>
  );
}

export default Header;
