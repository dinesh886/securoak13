import React from 'react'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import banner from '../WorkforceIdentity/workforce2.jpg';
import "./It-Procurement.css"
import security from "../WorkforceIdentity/productivity.png";
import productivity from "../WorkforceIdentity/productivity2.png";
import verified from "../WorkforceIdentity/security2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, ListGroup } from 'react-bootstrap'; // Assuming you're using Bootstrap for card and list styling
import { FaShieldAlt, FaRegLightbulb,FaClipboardCheck,FaRocket,FaLock, FaCloudUploadAlt,FaTachometerAlt, FaLayerGroup, FaPlug, FaChartLine } from 'react-icons/fa';
const ItProcurement = () => {
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
          <h1>IT Procurement </h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Services <i className="fa-solid fa-greater-than benner-icon"></i>  Infrastructure & Managed Services<i className="fa-solid fa-greater-than benner-icon"></i> IT Procurement</p>
        </div>
      </div>


      <div className="procurement">
  {/* <h2 className="procurement-title">Comprehensive IT Procurement Services</h2> */}
  <p className="procurement-text">
    At Securoak, we provide comprehensive IT procurement services meticulously designed to equip your organization with the right hardware and software solutions tailored to your operational needs. Our offerings encompass everything from initial sales to ongoing support, ensuring a seamless and efficient experience throughout your IT procurement journey, all while prioritizing cybersecurity and leveraging artificial intelligence to enhance performance.
  </p>
</div>




<h4 className="feature-heading">Your Journey with Us</h4>
<p className="section-description">
Embarking on your procurement journey with Securoak is both straightforward and collaborative. Here’s how we work together to ensure your success:
    </p>

      <Row className="align-items-center Features">
      {/* Feature Cards on the Left */}
      <Col md={12}>
        <div className="keyfeatures-container container-fluid">
          <div className="features-list">
            <Row className="identify-cards">
              {/* Feature 1 */}
              <Col md={12} className="feature-point">
                <div className="feature-icon">
                  <FaShieldAlt size={30} />
                </div>
                <div className="feature-text">
                  <strong>Needs Assessment: </strong><br />
                  We begin by conducting a thorough analysis of your unique requirements and objectives, allowing us to fully understand your operational landscape.
                </div>
              </Col>

              {/* Feature 2 */}
              <Col md={12} className="feature-point">
                <div className="feature-icon">
                  <FaRegLightbulb size={30} />
                </div>
                <div className="feature-text">
                  <strong>Tailored Solutions: </strong><br />
                  Our experts recommend customized hardware and software options, incorporating AI-driven tools that enhance efficiency and security, ensuring optimal performance and productivity.
                </div>
              </Col>

              {/* Feature 3 */}
              <Col md={12} className="feature-point">
                <div className="feature-icon">
                <FaCloudUploadAlt size={30} />
                </div>
                <div className="feature-text">
                  <strong>Implementation: </strong><br />
                  We oversee the entire procurement process, guaranteeing timely delivery and seamless setup of all solutions, minimizing disruption to your operations while ensuring robust cybersecurity measures are in place.
                </div>
              </Col>
               {/* Feature 4 */}
               <Col md={12} className="feature-point">
                <div className="feature-icon">
                <FaShieldAlt size={30} />
                </div>
                <div className="feature-text">
                  <strong>Ongoing Support:  </strong><br />
                  Our dedicated support team remains available to assist with any challenges, ensuring that your solutions run smoothly and continue to meet your evolving needs in a secure environment.
                </div>
              </Col>

             

             

             
            </Row>
          </div>
        </div>
      </Col>

      {/* Image on the Right */}
      {/* <Col md={6}>
        <div className="about-image">
          <img
            src={key_img}
            alt="About Us"
            title="About Our Company"
            loading="lazy"
          />
        </div>
      </Col> */}
    </Row>








      <section className="unlocking-potential-section">
  <div className="container">
    <h2 className="section-title">Key Offerings</h2>
    <p className="section-description">
    Hardware & Software Sales & Support
    </p>
    <div className="benefits-list">
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={verified} alt="Enhanced Security" className="benefit-image" />
          <div className="benefit-text">
            <strong>End-to-End Procurement: </strong><br />
            We assist in sourcing, purchasing, and deploying the right hardware and software tailored to your organization, streamlining the entire process while embedding AI capabilities for enhanced functionality.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={security} alt="Increased Efficiency" className="benefit-image" />
          <div className="benefit-text">
            <strong>Vendor Partnerships: </strong><br />
            Leverage our strong relationships with leading vendors to access the best products at competitive prices, maximizing value for your investment.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={productivity} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Ongoing Support: </strong><br />
            Our team provides continuous assistance, ensuring that your hardware and software solutions operate smoothly, efficiently, and securely.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="software-voip-solutions">
  <div className="container">
    <h2 className="section-title">Software Licensing & VOIP Solutions</h2>
    
    <div className="software-licensing">
      <h3 className="sub-title">Software Licensing</h3>
      <div className="licensing-cards">
        <div className="licensing-card">
          <div className="card-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h4>Licensing Management</h4>
          <p>
            We navigate complex licensing requirements on your behalf, ensuring compliance while optimizing costs and reducing administrative burdens.
          </p>
        </div>
        <div className="licensing-card">
          <div className="card-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <h4>Tailored Solutions</h4>
          <p>
            Receive expert recommendations for the most suitable software licenses based on your organization’s specific needs and growth plans, including options that leverage AI for better performance.
          </p>
        </div>
        <div className="licensing-card">
          <div className="card-icon">
            <i className="fas fa-sync-alt"></i>
          </div>
          <h4>Renewal Support</h4>
          <p>
            We provide assistance with license renewals to avoid lapses, ensuring uninterrupted service and operational continuity.
          </p>
        </div>
      </div>
    </div>

    <div className="voip-solutions">
      <h3 className="sub-title">On-Premise/Cloud VOIP Solutions</h3>
      <div className="voip-cards">
        <div className="voip-card">
          <div className="card-icon">
            <i className="fas fa-headset"></i>
          </div>
          <h4>Unified Communication Solutions</h4>
          <p>
            Implement flexible VOIP solutions that enhance communication and collaboration within your organization, driving productivity and engagement while ensuring secure data transmission.
          </p>
        </div>
        <div className="voip-card">
          <div className="card-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h4>Scalability</h4>
          <p>
            Our VOIP systems are designed to grow with your business, easily adapting to changing needs without compromising on performance.
          </p>
        </div>
        <div className="voip-card">
          <div className="card-icon">
            <i className="fas fa-tools"></i>
          </div>
          <h4>Support & Maintenance</h4>
          <p>
            Comprehensive support ensures your VOIP systems operate effectively, minimizing downtime and enhancing overall productivity.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="cybersecurity-integration">
  <div className="cybersecurity-container">
    <h2 className="section-title">Cybersecurity Integration</h2>
    
    <div className="cybersecurity-cards">
      <div className="cybersecurity-card">
        <div className="card-icon">
          <i className="fas fa-shield-virus"></i>
        </div>
        <h4>Proactive Threat Management</h4>
        <p>
          Our procurement services include robust cybersecurity solutions that protect your IT assets from potential threats, ensuring your hardware and software are secured from the outset.
        </p>
      </div>
      
      <div className="cybersecurity-card">
        <div className="card-icon">
          <i className="fas fa-robot"></i>
        </div>
        <h4>AI-Powered Security Solutions</h4>
        <p>
          We offer advanced cybersecurity solutions powered by artificial intelligence, which provide real-time threat detection and response capabilities to safeguard your organization against evolving risks.
        </p>
      </div>
      
      <div className="cybersecurity-card">
        <div className="card-icon">
          <i className="fas fa-balance-scale"></i>
        </div>
        <h4>Compliance and Risk Assessment</h4>
        <p>
          We help assess your compliance with industry standards and regulations, ensuring that your IT environment meets the necessary security benchmarks.
        </p>
      </div>
    </div>
  </div>
</section>





    <Footer />
    </>
   
  )
}

export default ItProcurement;
