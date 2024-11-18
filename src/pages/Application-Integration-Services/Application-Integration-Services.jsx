import React from 'react'
import "./Application-Integration-Services.css"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import securoakImage from '..//../components/assests/priviledge/security2.jpg';
import banner from "../../components/assests/api/apibanner.jpg";
import api from "../../components/assests/api/api.png";
import api2 from "../../components/assests/api/api2.png";
import devops from "../../components/assests/api/devops.png";
import ux from "../../components/assests/api/uxdeasign.png";
import product from "../../components/assests/api/product4.png";
import { Card, ListGroup } from 'react-bootstrap'; // Assuming you're using Bootstrap for card and list styling
import { useEffect } from 'react';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'


const ApplicationIntegrationServices = () => {


    const potentialItems = [
        {  image:img1, title:"Consultation and Analysis",text: " We begin with a thorough assessment of your current systems and integration needs, identifying opportunities for improvement while addressing existing vulnerabilities and compliance requirements." },
        { image:img2, title:"Custom Solution Design", text: " Our team collaborates closely with you to develop tailored integration strategies that align with your business objectives and security requirements, leveraging AI insights to inform decision-making." },
        { image:img3, title:"Implementation", text: " We execute the integration plan, developing intuitive UI/UX solutions and secure APIs that enhance your applications' capabilities, while ensuring compliance with stringent cybersecurity standards." },
        { image:img1, title:"Ongoing Support", text: " Following deployment, we offer continuous support and service management to ensure optimal performance and user satisfaction. Our AI-enhanced monitoring solutions continuously adapt to evolving threats, quickly addressing any challenges that arise." },
      
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
    <div>
       {/* Image and Overlay Section */}
       <div className="identity-image-container">
        <img
          src={banner}
          alt="A depiction of the company's philosophy"
          className="identity-page-image"
        />
        <div className="overlay-text">
          <h1>Application Integration Services </h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Services <i className="fa-solid fa-greater-than benner-icon"></i> Application Integration Services</p>
        </div>
      </div>

    </div>



    <div className="application-integration">
  <div className="container">
    {/* <h2 className="integration-title">Application Integration Services</h2> */}
    <p className="integration-description">
    In the rapidly evolving digital landscape, achieving seamless connectivity across your technology ecosystem is crucial for operational success. At Securoak, our Application Integration Services harness the power of AI and robust cybersecurity measures to ensure that all applications and data function in harmony. We specialize in creating intuitive user experiences through advanced front-end UI/UX development, combined with cutting-edge integration solutions that streamline workflows, enhance operational efficiency, and safeguard your critical data assets.
    </p>
   
  </div>
</div>


 
    {/* Unlocking Your Potential section */}

    <section className="keys-section">
  <div className="keys-container">
    <h2 className="keys-section-title">Key Features</h2>
    <p className="keys-section-description">
      By choosing Securoak's WIAM solutions, you unlock a myriad of business benefits:
    </p>
    <div className="keys-list">
      <div className="keys-benefit-item">
        <div className="keys-benefit-content">
          <img src={ux} alt="Enhanced Security" className="benefit-image" />
          <div className="keys-benefit-text">
            <strong>Intuitive UI/UX Development: </strong><br />
            Our design philosophy centers on user-centric principles, crafting interfaces that boost user engagement and satisfaction. By incorporating AI-driven analytics, we can personalize user experiences based on behavior and preferences, while ensuring accessibility and inclusivity. Our visually compelling and easy-to-navigate applications create positive interactions that foster long-term user loyalty.
          </div>
        </div>
      </div>
      <div className="keys-benefit-item">
        <div className="keys-benefit-content">
          <img src={api} alt="Increased Efficiency" className="benefit-image" />
          <div className="keys-benefit-text">
            <strong>Seamless Application Integration: </strong><br />
            Our services facilitate the smooth exchange of data and functionality between disparate systems, ensuring effective communication across your applications. This interconnectedness improves workflow efficiency, reduces data silos, and allows for real-time decision-making. We integrate advanced cybersecurity protocols to protect sensitive information during data exchange, minimizing risks associated with data breaches and compliance violations.
          </div>
        </div>
      </div>
      <div className="keys-benefit-item">
        <div className="keys-benefit-content">
          <img src={product} alt="Improved Productivity" className="benefit-image" />
          <div className="keys-benefit-text">
            <strong>API Development: </strong><br />
            We build secure and scalable APIs that empower your applications to integrate seamlessly with other systems, enhancing functionality while ensuring robust security. Our APIs are designed with performance optimization and cybersecurity best practices in mind, allowing your business to innovate and adapt quickly in a fast-paced environment. AI algorithms can be employed for anomaly detection, further strengthening the security posture of your API integrations.
          </div>
        </div>
      </div>

      <div className="keys-benefit-item">
        <div className="keys-benefit-content">
          <img src={devops} alt="Improved Productivity" className="benefit-image" />
          <div className="keys-benefit-text">
            <strong>DevOps Integration:  </strong><br />
            Our approach incorporates DevOps practices to streamline development and operational workflows. By fostering collaboration between development and operations teams, we enhance deployment speed and ensure that your integrated applications are reliable. Continuous security assessments and automated testing processes are integrated into the DevOps cycle, ensuring vulnerabilities are addressed proactively.
          </div>
        </div>
      </div>

      <div className="keys-benefit-item">
        <div className="keys-benefit-content">
          <img src={api2} alt="Improved Productivity" className="keys-benefit-image" />
          <div className="keys-benefit-text">
            <strong>Service Management:  </strong><br />
            We provide comprehensive service management to support your integrated applications, ensuring peak performance. Our proactive monitoring solutions leverage AI to detect anomalies and predict potential issues before they escalate, while our quick response protocols maintain the reliability and security of your technology solutions.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="journey-with-securoak">
      <h2 className="text-center journey-title">Journey With Securoak</h2>
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

    <section className="why-securoak-section " >
      <div className="why-securoak-top">
        <h2 className="why-securoak-title">Why Choose Securoak</h2>
        <p className="why-securoak-description">
          With Securoak, you enhance your digital identity management capabilities and position your organization as a trusted leader in the marketplace. Let’s unlock your potential together.
        </p>
      </div>

      <div className="why-securoak-content">
        <div className="why-securoak-image application-integration">
          <img src={securoakImage} alt="Securoak" className="image" />
        </div>

        <div className="why-securoak-features">
          <ul className="features-list">
            <li><strong>Expert Team:</strong> Our seasoned professionals possess extensive knowledge in application integration, UI/UX design, AI technologies, and cybersecurity measures, ensuring comprehensive support for your integration projects.</li>
            <li><strong>Tailored Solutions: </strong> We deliver customized integration services that address your unique challenges and align with your strategic goals, integrating AI to enhance performance and operational efficiency while embedding security at every layer.</li>
            <li><strong>Proven Track Record: </strong> Our integration solutions have a history of driving operational efficiency, enhancing user experiences, and enabling businesses to achieve their objectives securely. By employing AI and cybersecurity best practices, we ensure that your technology ecosystem remains resilient against evolving threats.</li>
            <li> By choosing Securoak, you are investing in a partnership that prioritizes your organization’s needs, fortifying your technology ecosystem with innovative integration solutions that are secure, efficient, and tailored to your future growth. Together, we can navigate the complexities of modern technology landscapes and achieve lasting success in a secure digital environment.</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default ApplicationIntegrationServices;
