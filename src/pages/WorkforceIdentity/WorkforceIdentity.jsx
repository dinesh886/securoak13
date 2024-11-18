import React from 'react';
import './WorkforceIdentity.css';

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import key_img from "./points.jpg";
import security from "./productivity.png";
import productivity from "./productivity2.png";
import verified from "./security2.png";

import banner from './workforce2.jpg';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, ListGroup } from 'react-bootstrap'; // Assuming you're using Bootstrap for card and list styling
import { FaShieldAlt, FaRegLightbulb,FaClipboardCheck,FaRocket,FaLock, FaCloudUploadAlt,FaTachometerAlt, FaLayerGroup, FaPlug, FaChartLine } from 'react-icons/fa';
import { useEffect } from 'react';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
const WorkforceIdentity = () => {

    const potentialItems = [
        {  image:img1, title:"Assessment",text: " We start with a comprehensive assessment of your current identity management systems, identifying gaps and opportunities for improvement. Our AI tools analyze existing workflows and highlight areas where security can be enhanced" },
        {  image:img2, title:"Tailored Solutions",text: "Our experts will design a customized WIAM strategy aligned with your unique business requirements and security standards. With AI at the core, we ensure that every aspect of your access management is not just secure but also intelligent, adapting to new threats as they emerge." },
        {  image:img3, title:"Implementation", text: " We facilitate a smooth implementation of our solutions, ensuring minimal disruption to your operations while enhancing security protocols. Our deployment process incorporates automated monitoring to detect and respond to threats in real-time." },
        {  image:img1, title:"Training and Support",text: " Our commitment extends beyond deployment; we provide ongoing training for your teams, empowering them to maximize the benefits of our AI-enhanced WIAM solutions and ensuring sustained success. Continuous support includes AI-driven insights to fine-tune security measures based on evolving threats." },
      
      ];

      useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
        script.type = 'module';
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
    
        
      }, []);
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
          <h1>Workforce Identity and Access Management </h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Servics<i className="fa-solid fa-greater-than benner-icon"></i> Identify Offerings<i className="fa-solid fa-greater-than benner-icon"></i> (WIAM)</p>
        </div>
      </div>


      
      <div className="workforce-identity-section">
        <p className="workforce-identity-description">
          At Securoak, our Workforce Identity and Access Management (WIAM) solutions harness the power of AI to enable organizations to provide employees with secure access to essential resources exactly when needed. Picture it as granting access to a high-security vault—only those with the correct credentials can enter, effectively safeguarding sensitive information while enhancing productivity. By integrating AI-driven insights with robust cybersecurity measures, we streamline access management and fortify security across your workforce.
        </p>
      </div>





      <h4 className="feature-heading">Key Differentiators of (WIAM)</h4>
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
                  <strong>Tailored Access Control:</strong><br />
                  Our solutions leverage advanced algorithms to precisely manage employee access, ensuring that only authorized personnel can enter internal systems and access sensitive data. This approach not only reinforces the security perimeter of your organization but also utilizes AI to adapt access controls in real-time based on user behavior and threat intelligence.
                </div>
              </Col>

              {/* Feature 2 */}
              <Col md={12} className="feature-point">
                <div className="feature-icon">
                  <FaRegLightbulb size={30} />
                </div>
                <div className="feature-text">
                  <strong>Self-Service Capabilities:</strong><br />
                  We empower employees with secure self-service options, enabling them to efficiently request and manage their access without requiring IT intervention. Our AI-enhanced systems analyze patterns to identify and mitigate potential security risks, reducing the burden on IT teams while fostering a culture of autonomy and trust.
                </div>
              </Col>

              {/* Feature 3 */}
              <Col md={12} className="feature-point">
                <div className="feature-icon">
                <FaCloudUploadAlt size={30} />
                </div>
                <div className="feature-text">
                  <strong>Scalability and Security: </strong><br />
                  While Customer Identity and Access Management (CIAM) solutions scale for a vast number of external users, our WIAM offerings prioritize controlled, high-security access for internal teams. Our cybersecurity framework integrates seamlessly with AI capabilities to proactively identify and address vulnerabilities, effectively protecting valuable company data from unauthorized access.
                </div>
              </Col>
               {/* Feature 4 */}
               <Col md={12} className="feature-point">
                <div className="feature-icon">
                <FaShieldAlt size={30} />
                </div>
                <div className="feature-text">
                  <strong>Comprehensive Threat Mitigation: </strong><br />
                  Our WIAM solution integrates robust threat detection mechanisms, utilizing machine learning and AI to monitor suspicious activity and swiftly respond to potential security breaches. By continuously analyzing user behavior, we proactively protect your organization from emerging risks and vulnerabilities, ensuring that sensitive data remains secure across all systems and devices.
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

    <section className="journey-with-securoak">
      <h2 className="text-center journey-title">Journey With Securoak</h2>
      <p className='title-below-para'>Partnering with Securoak for your WIAM journey means embracing a structured approach to identity management that unlocks your organization’s full potential.</p>
       <div className="container">
      <Card className="mb-4 governence-card">
      <Card.Body>
     <ListGroup variant="flush">
      {potentialItems.map((item, index) => (
        <div
          key={index}
          className={`card-main d-flex mb-1
             ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {/* Text Column */}
          <div className="content flex-grow-1 d-flex flex-column align-items-center justify-content-start">
           <h4>{item.title}</h4>
            <ListGroup.Item className="list-content">
              {/* <div className="list-icon">{item.icon}</div> */}
              <span>{item.text}</span>
            </ListGroup.Item>
          </div>

          {/* Image Column */}
          <div className="card-image d-flex flex-column align-items-center justify-content-start">
            <img src={item.image}  className="unlock-img" alt="" />
             
          </div>
        </div>
      ))}
    </ListGroup>
  </Card.Body>
</Card>
</div>
</section>


    {/* <section className="journey-with-securoak">
    <div className='text-center'>
  <h2 className="c journey-title">Journey With Securoak</h2>
  <p className='title-below-para'>Partnering with Securoak for your WIAM journey means embracing a structured approach to identity management that unlocks your organization’s full potential.</p>
</div>
      <Card className="mb-4 journey-card">
        <Card.Body className="d-flex flex-row">
          <div className="content-column">
            <ListGroup variant="flush">
              {potentialItems.map((item, index) => (
                <ListGroup.Item key={index} className="list-item">
                  <div className="list-icon">{item.icon}</div>
                  <span>{item.text}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>

          <div className="image-column">
          <dotlottie-player 
    src="https://lottie.host/b6f681e0-7777-4f16-83f5-b6f2bb35c65a/ExvDWUEra1.json"
    background="transparent"
    speed="1"
    className="potential-lottie"
    loop
    autoplay
  ></dotlottie-player>
          </div>
        </Card.Body>
      </Card>
    </section> */}

     
    {/* Unlocking Your Potential section */}

    <section className="unlocking-potential-section">
  <div className="container">
    <h2 className="section-title">Unlocking Your Potential</h2>
    <p className="section-description">
      By choosing Securoak's WIAM solutions, you unlock a myriad of business benefits:
    </p>
    <div className="benefits-list">
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={verified} alt="Enhanced Security" className="benefit-image" />
          <div className="benefit-text">
            <strong>Enhanced Security:</strong><br />
            Protect sensitive data with robust access controls specifically tailored for your workforce, powered by AI algorithms that reduce the risk of data breaches through predictive analytics.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={security} alt="Increased Efficiency" className="benefit-image" />
          <div className="benefit-text">
            <strong>Increased Efficiency:</strong><br />
            Streamline access management to reduce IT overhead, allowing your teams to focus on core activities that drive business growth. Our AI-driven automation handles routine tasks, freeing your IT resources for strategic initiatives.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={productivity} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Improved Productivity:</strong><br />
            Facilitate seamless access to tools and systems, ensuring your employees remain agile and effective in their roles. With real-time AI insights, your teams can work without interruption, enhancing overall organizational performance.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="why-partner-with-securoak">
  <h2 className="partner-with-securoak-title">Why Partner with Securoak?</h2>
  <p className="section-description">
    Partnering with Securoak grants you access to industry-leading expertise in identity and access management fortified by cutting-edge AI and cybersecurity measures. We deliver solutions that not only enhance security but also drive operational efficiency and business growth.
  </p>
  <p className="section-details">
    With our proven track record and unwavering commitment to innovation, we empower your organization to navigate the complexities of modern security challenges with confidence, ensuring a resilient and productive workforce ready for the demands of today’s digital landscape.
  </p>
</section>





      <Footer />
    </>
  );
};

export default WorkforceIdentity;
