import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-section">
      <div className="aboutcontainer">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
            massa.
          </p>
          <p>
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
