import "./Network-Telephony-Solutions.css"
import React from 'react'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import banner from '../../components/assests/Outsourcing/networkservice.jpg';
import Assesment from "../../pages/IdentityGovernance/assesment.png";
import Strategy  from "../../pages/IdentityGovernance/stratagy.png";
import Implementation from "../../pages/IdentityGovernance/implimentation.png";
import Training from "../../pages/IdentityGovernance/training.png";
import partner from "../../pages/IdentityGovernance/partner.jpg";
import Support from "../../pages/IdentityGovernance/customer-service.png";



const NetworkTelephonySolutions = () => {
  return (
    <>
     <Header identityPage={true} />
           {/* Image and Overlay Section */}
           <div className="identity-image-container">
        <img
          src={banner}
          alt="A depiction of the company's philosophy"
          className="identity-page-image"
        />
        <div className="overlay-text">
          <h1>Network & Telephony Solutions </h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Services <i className="fa-solid fa-greater-than benner-icon"></i> Infrastructure & Managed Services <i className="fa-solid fa-greater-than benner-icon"></i>Network & Telephony Solutions</p>
        </div>
      </div>





      
      <div className="noc-description">
  <p>
    Securoak’s Network Operations Center (NOC) and Security Operations Center (SOC) provide a comprehensive solution for managing IT infrastructure while enhancing security through advanced AI technologies. 
    Our dedicated teams ensure your network operates seamlessly while proactively defending against cyber threats.
  </p>
</div>

<div className="key-offerings-section">
  <h2 className="key-offerings-title">Key Offerings</h2>
  <div className="key-offerings-list">
    <div className="offering-item">
      <h3>
      <i className="fas fa-network-wired"></i>Network Design & Implementation: 
      </h3>
      <p>
      We provide customized network architecture solutions that ensure seamless communication and collaboration, fortified with advanced cybersecurity measures. From initial assessments to final deployment, our team expertly manages every aspect of network design and implementation.
      </p>
    </div>
    <div className="offering-item">
      <h3>
      <i className="fas fa-users"></i> Unified Communications (UC) Solutions: 
      </h3>
      <p>
      Transform teamwork with our integrated UC solutions that combine voice, video, messaging, and collaboration tools into a single platform. Our solutions streamline communication, boost productivity, and incorporate security features to protect sensitive data, facilitating informed decision-making across your organization.
      </p>
    </div>
    <div className="offering-item">
      <h3>
      <i className="fas fa-phone-volume"></i>Cloud VoIP Systems: 
      </h3>
      <p>
      Our cloud-based Voice over Internet Protocol (VoIP) systems deliver high-quality voice communication while reducing costs. With built-in security features, enjoy flexible functionalities such as call forwarding, voicemail-to-email, and conference calling, all accessible from any device.
      </p>
    </div>
    <div className="offering-item">
      <h3>
      <i className="fas fa-wifi"></i>Wireless (Wi-Fi) Networking Solutions: 
      </h3>
      <p>
      Ensure reliable, high-speed connectivity with our secure wireless networking solutions. We design and implement Wi-Fi networks that meet the growing demand for mobile access, incorporating advanced encryption and authentication protocols to maintain strong security against potential threats.
      </p>
    </div>
    <div className="offering-item">
      <h3 className='last-carditem'>
        <i className="fas fa-file-alt"></i> Compliance and Reporting
      </h3>
      <p>
        We support your compliance efforts with industry regulations by providing detailed reporting on security incidents, network performance, and risk.
      </p>
    </div>
  </div>
</div>


<section className="unlocking-potential-section">
  <div className="container">
    <h2 className="section-title">Your Journey with Securoak</h2>
    <p className="section-description">
      By choosing Securoak's WIAM solutions, you unlock a myriad of business benefits:
    </p>
    <div className="benefits-list">
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Assesment} alt="Enhanced Security" className="benefit-image" />
          <div className="benefit-text">
            <strong>Consultation:</strong><br />
            We begin with a thorough assessment of your current infrastructure and communication needs, focusing on integrating security into our customized solutions.
          </div>
        </div>
      </div>
     
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Implementation} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Design and Deployment:</strong><br />
            Our experts design and implement secure network and telephony systems, ensuring optimal performance, scalability, and resilience against cyber threats.
          </div>
        </div>
      </div>

      

      
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Support} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Ongoing Support: </strong><br />
            Benefit from continuous monitoring and support, ensuring your systems remain secure and operational as your organization evolves.
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
        With Securoak’s network and telephony services, you ensure seamless communication and connectivity across your organization, all while maintaining stringent cybersecurity standards that protect your business.
        </p>
      </div>

      <div className="why-partner-content">
        <div className="why-partner-image why-partner-image2">
          <img src={partner} alt="Securoak" className="image" />
        </div>

        <div className="why-partner-features">
          <ul className="partner-features-list partner-features-list2">
            <li><strong>Expertise:</strong> Our team brings extensive experience in network design, implementation, and telephony solutions, with a strong focus on cybersecurity.</li>
            <li><strong>Innovative Solutions:  </strong> : We leverage the latest technologies and security best practices to deliver robust, future-proof networking services.</li>
            <li><strong>Customized Approach:  </strong> Our services are tailored to align with your unique business requirements, ensuring maximum impact while safeguarding your sensitive information.</li>
            
          </ul>
        </div>
      </div>

      
    <div className="securoak-benefit">
  <p>
  Choose Securoak to empower your organization with a resilient IT infrastructure, comprehensive security posture, and the advanced capabilities of AI to thrive in a rapidly evolving digital landscape.
  </p>
</div>
    </section>

    <Footer/>
    </>
  )
}

export default NetworkTelephonySolutions;
