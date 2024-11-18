import React, { useState } from "react";
import "./Managed-It-Services.css";
import Header from "../../components/header/header";
import banner from './itpro.jpg';
import Footer from "../../components/footer/footer";
import Assesment from "../../pages/IdentityGovernance/assesment.png";
import support from "./support.jpg";
import support2 from "./support2.jpg";
import it from "./itsupport2.jpg";
import Implementation from "../../pages/IdentityGovernance/implimentation.png";
import Training from "../../pages/IdentityGovernance/training.png";
import partner from "../../pages/IdentityGovernance/partner.jpg";
import Support from "../../pages/IdentityGovernance/customer-service.png";

const ManagedItServices = () => {
  const services = [
    {
      image: support,
      title: "Service Desk Support",
      description: (
        <ul>
          <li><strong>24/7 Availability:</strong> Continuous IT support with AI-driven tools to resolve issues efficiently.</li>
          <li><strong>Multi-Channel Access:</strong> Contact us via phone, email, or chat for convenient support.</li>
          <li><strong>Incident Management:</strong> AI-enhanced tracking ensures effective resolution.</li>
          <li><strong>Knowledge Base:</strong> Self-service resources empower users to resolve common issues.</li>
        </ul>
      )
    },
    {
      image: support2,
      title: "Remote/Onsite Support",
      description: (
        <ul>
      <li><strong>Remote Assistance:</strong> Rapid diagnosis using AI for predictive insights.</li>
      <li><strong>Onsite Visits:</strong> Hands-on support for complex troubleshooting.</li>
      <li><strong>Proactive Monitoring:</strong> Continuous monitoring prevents potential issues.</li>
      <li><strong>24/7 Availability:</strong> Round-the-clock access to support ensures your team is never without assistance.</li>
     
    </ul>
      )
    },
    {
      image: it,
      title: "Private/Public Cloud Support",
      description: (
        <ul>
          <li><strong>Cloud Strategy:</strong> Customized migration strategies with security focus.</li>
          <li><strong>Deployment & Management:</strong> Seamless integration of cloud solutions.</li>
          <li><strong>Security & Compliance:</strong> Safeguard environments against threats.</li>
        </ul>
      )
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <>
      <Header identityPage={true} />

      <div className="identity-image-container">
        <img src={banner} alt="A depiction of the company's philosophy" className="identity-page-image" />
        <div className="overlay-text">
          <h1>Managed IT Services </h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Services <i className="fa-solid fa-greater-than benner-icon"></i> Infrastructure & Managed Services <i className="fa-solid fa-greater-than benner-icon"></i>Managed IT Services</p>
        </div>
      </div>

      <div className="managedservice-description">
        <p className="managedservice-text">
          Securoak’s Managed IT Services empower organizations to optimize their technology infrastructure, ensuring seamless operations and enhanced productivity.
          Our solutions guarantee that your IT environment remains efficient, secure, and adaptable to your business needs, positioning you for sustained growth in today’s dynamic digital landscape.
        </p>
      </div>

      <section className="managed-it-services">
        <div className="managed-container">
          <h2 className="section-title">Unlock Your Potential with Managed IT Services</h2>
          <p className="section-description">
            Securoak's Managed IT Services enable organizations to harness technology for strategic growth and operational efficiency while integrating advanced AI and cybersecurity measures. Our comprehensive offerings ensure that your systems are robust, secure, and tailored to your unique business requirements.
          </p>

          <div className="services">
            <div className="service-row">
              {/* Left Column: Image */}
              <div className="service-image">
                <img
                  src={services[currentIndex].image}
                  alt={services[currentIndex].title}
                  className="service-icon"
                />
              </div>

              {/* Right Column: Content */}
              <div className="service-content">
                <h3>{services[currentIndex].title}</h3>
                {services[currentIndex].description}
                
                {/* Navigation Buttons Below the Content */}
                <div className="service-navigation">
                  <button className="prev-btn" onClick={handlePrev}>Prev</button>
                  <button className="next-btn" onClick={handleNext}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    <section className="why-partner-section">
      <div className="why-partner-top">
        <h2 className="why-partner-title">Why Partner with Securoak?</h2>
        <p className="why-partner-description">
        With Securoak’s NOC and SOC services, you can rest assured that your IT infrastructure is secure, compliant, and performing at its peak.
        </p>
      </div>

      <div className="why-partner-content">
        <div className="why-partner-image why-partner-image2">
          <img src={partner} alt="Securoak" className="image" />
        </div>

        <div className="why-partner-features">
          <ul className="partner-features-list partner-features-list2">
            <li><strong>Expertise:</strong> Our team consists of industry professionals with extensive knowledge in managed IT services, AI integration, and cybersecurity.</li>
            <li><strong>Customization: </strong> We provide tailored services that align with your specific business needs, incorporating AI-driven insights.</li>
            <li><strong>Efficiency :</strong> Our proactive strategies minimize downtime, enhancing overall productivity and ensuring a secure operational environment.</li>
            <li><strong>Security:</strong> We implement robust cybersecurity measures to protect your data and IT systems against emerging threats</li>
          </ul>
        </div>
      </div>

    
    </section>

      <Footer />
    </>
    
  )
}

export default ManagedItServices
