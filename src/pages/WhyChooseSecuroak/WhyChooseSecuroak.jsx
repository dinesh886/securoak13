import React from 'react';
import './WhyChooseSecuroak.css';
import securoakImage from './whychoose.jpg';

const WhyChooseSecuroak = () => {
  return (
    <section className="why-securoak-section">
      <div className="why-securoak-top">
        <h2 className="why-securoak-title">Why Choose Securoak</h2>
        <p className="why-securoak-description">
          With Securoak, you enhance your digital identity management capabilities and position your organization as a trusted leader in the marketplace. Let’s unlock your potential together.
        </p>
      </div>

      <div className="why-securoak-content">
        <div className="why-securoak-image">
          <img src={securoakImage} alt="Securoak" className="image" />
        </div>

        <div className="why-securoak-features">
          <ul className="features-list">
            <li><strong>Expertise and Experience:</strong> Our team comprises industry leaders in CIAM, bringing deep knowledge and proven strategies to your organization.</li>
            <li><strong>Comprehensive Solutions:</strong> We offer a complete suite of CIAM services tailored to your specific needs, enhancing your overall digital strategy.</li>
            <li><strong>Commitment to Security:</strong> Trust that your customer data is safeguarded by cutting-edge security protocols, fortified with AI-driven cybersecurity measures.</li>
            <li><strong>Long-Term Partnership:</strong> We prioritize building enduring relationships, ensuring we grow and adapt alongside your business as it evolves.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSecuroak;
