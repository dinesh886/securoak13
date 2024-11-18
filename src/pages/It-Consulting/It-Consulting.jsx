import React from 'react'
import "./It-Consulting.css"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import journey from '../innerdropdowns/journey.jpg';
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaUsers, FaChartLine, FaCogs, FaHandshake, FaLock } from "react-icons/fa";
import banner from '../WorkforceIdentity/workforce2.jpg';
import partner from "../../components/assests/partner.jpg"

import { FaShieldAlt, FaRegLightbulb,FaClipboardCheck,FaRocket, FaCloudUploadAlt,FaTachometerAlt, FaLayerGroup,  } from 'react-icons/fa';



const ItConsulting = () => {

  const journeySteps = [
    { icon: <FaUsers />, title: "Consultation and Discovery", description: "Assessment:We conduct a thorough analysis of your current IT environment to identify areas for improvement, focusing on security vulnerabilities." },
    { icon: <FaChartLine />, title: "Strategic Planning", description: "Strategy Development: Collaborating with your team, we create a comprehensive IT strategy that drives efficiency and innovation while safeguarding sensitive data." },
    { icon: <FaCogs />, title: "Implementation", description: "Implementation: : Our experts oversee the deployment of AI-driven solutions, ensuring seamless integration with your existing systems and robust cybersecurity measures." },
    { icon: <FaHandshake />, title: "Ongoing Collaboration", description: "Continuous Improvement:  We provide ongoing support and optimization to adapt to your evolving needs, keeping pace with emerging threats and technological advancements." },
   
  ];

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
          <h1>IT Consultin </h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Services <i className="fa-solid fa-greater-than benner-icon"></i> Infrastructure & Managed Services <i className="fa-solid fa-greater-than benner-icon"></i> IT Consulting</p>
        </div>
      </div>

      <section>




      <div class="it-discription">
  <p>
    Securoak provides an extensive range of IT services designed to optimize organizational performance and enhance cybersecurity. Our offerings include IT consulting, NOC/SOC support, network and telephony solutions, managed IT services, and IT procurement. By integrating advanced AI technologies, we streamline operations, bolster security measures, and ensure compliance, empowering businesses to navigate the complexities of today’s digital landscape while mitigating risks effectively. With a focus on delivering tailored solutions, Securoak enables organizations to achieve their strategic objectives and maintain seamless connectivity.
  </p>
</div>


<h4 className="feature-heading">Key Differentiators of (WIAM)</h4>
      <Row className="align-items-center Features features2">
      {/* Feature Cards on the Left */}
      <Col md={12}>
        <div className="keyfeatures-container  keyfeatures-container2 container-fluid">
          <div className="features-list">
            <Row className="identify-cards">
              {/* Feature 1 */}
              <Col md={12} className="feature-point">
                <div className="feature-icon">
                  <FaShieldAlt size={30} />
                </div>
                <div className="feature-text">
                  <strong>Tailored Solutions::</strong><br />
                  We customize our services to align with your specific business goals, ensuring optimal results while enhancing security.
                </div>
              </Col>

              {/* Feature 2 */}
              <Col md={12} className="feature-point">
                <div className="feature-icon">
                  <FaRegLightbulb size={30} />
                </div>
                <div className="feature-text">
                  <strong>Expert Guidance: </strong><br />
                  Our seasoned consultants bring deep industry knowledge, helping you navigate complex technology landscapes, including AI integration and cybersecurity best practices.
                </div>
              </Col>

            </Row>
          </div>
        </div>
      </Col>

    
    </Row>

    <h2 className="text-center mb-4 potential-title">Journey with Us</h2>

<Card className="mb-4 potential-card">
  <Card.Body className="d-flex flex-row">
    <div className="content-column">
      <ListGroup variant="flush">
      {journeySteps.map((item, index) => (
  <ListGroup.Item key={index} className="list-item">
    <span>{item.description}</span>
  </ListGroup.Item>
))}

      </ListGroup>
    </div>
    <div className="image-column">
    <img src={journey } alt="" srcset="" className="big-image"/>
    </div>
  </Card.Body>
</Card>

<section className="why-partner-section">
      <div className="why-partner-top">
        <h2 className="why-partner-title">Why Partner with Securoak?</h2>
        <p className="why-partner-description">
        Transform your IT strategy with Securoak, leveraging AI and cybersecurity to drive sustainable growth for your organization.
        </p>
      </div>

      <div className="why-partner-content">
        <div className="why-partner-image why-partner-image2">
          <img src={partner} alt="Securoak" className="image" />
        </div>

        <div className="why-partner-features">
          <ul className="partner-features-list partner-features-list2">
            <li><strong>Proven Expertise :</strong> Our track record in delivering successful IT consulting projects, combined with our focus on security, speaks for itself.</li>
            <li><strong>Innovative Solutions: </strong> We leverage the latest technologies and best practices in AI and cybersecurity to enhance your IT capabilities</li>
            <li><strong>Long-Term Partnership: </strong> We are committed to your success, providing continuous support and strategic advice to help you thrive in a digital-first, secure environment.</li>
            
          </ul>
        </div>
      </div>
    </section>

    



</section>
<Footer />
    </>
  )
}

export default ItConsulting;
