import React, { useEffect, useState } from "react";
import "./Hero.css";
import learning1 from "../images/learning1.jpg";
import learning2 from "../images/learning2.jpg";
import learning3 from "../images/learning3.jpg";
import learning4 from "../images/learning4.jpg";
import learning5 from "../images/learning5.jpg";
import learning6 from "../images/learning6.jpg";
import learning7 from "../images/learning7.jpg";
import learning8 from "../images/learning8.jpg";

const Hero = () => {
  const images = [learning1, learning2, learning3, learning4, learning5, learning6, learning7, learning8];
  
    

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Hero Background Images */}
      <div className="hero-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Learning"
            className={index === currentImage ? "active" : ""}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Learn. Grow. Succeed</h1>

        <p>
          Welcome to our Learning Management System.
          Learn new skills and improve your knowledge.
        </p>

        <button>Explore Courses</button>
      </div>
    </section>
  );
};

export default Hero;