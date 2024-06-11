import React from 'react';
import './PrivacyPolicy.css'; // Import CSS file for styling

const PrivacyPolicy = () => {
  return (
    <div className="PrivacyPolicy-section">
      <div className="PrivacyPolicycontainer">
        <div className="PrivacyPolicy-content">
          <h2>Privacy Policy</h2>
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

export default PrivacyPolicy;
