import React from 'react'
import { useEffect } from 'react';
import './Privileged-Access-Management.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import banner from '../WorkforceIdentity/workforce2.jpg';

import Assesment from "../../components/assests/priviledge/assesment.png";
import Strategy  from "../../components/assests/priviledge/stratagey.png";
import Implementation from "../../components/assests/priviledge/implimentation.png";
import Training from "../../components/assests/priviledge/training.png";
import why from "../../components/assests/priviledge/security2.jpg";
import why2 from "../../components/assests/priviledge/security3.jpg";
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

import Support from "../../components/assests/priviledge/customer-service.png";
import { Card, ListGroup } from 'react-bootstrap'; // Assuming you're using Bootstrap for card and list styling
const PrivilegedAccessManagement = () => {

    const potentialItems = [
        {
          image:img1, title:"Customized Access Control", text: " Utilizing AI-driven insights, we design access control measures tailored to your organization’s specific needs. This ensures that only authorized personnel can access critical systems, significantly reducing the risk of both internal and external threats."
        },
        {
          image:img2, title:"Efficient Credential Management",text: " Our AI-enhanced solutions streamline the management of privileged credentials, reducing administrative overhead while bolstering security. By automating key processes such as password rotation and access provisioning, we free your IT teams to concentrate on strategic initiatives rather than routine tasks."
        },
        {
          image:img3, title:"Proactive Threat Detection", text: " Continuous monitoring of privileged accounts through AI algorithms enables us to identify suspicious activities in real-time. This proactive approach allows for swift responses to potential security threats, enhancing your organization’s ability to mitigate risks before they escalate."
        },
        {
          image:img1, title:"Enhanced Compliance Support",text: " Our PAM solutions simplify compliance with regulatory requirements by implementing robust controls and providing detailed audit trails for privileged access activities. AI analytics facilitate efficient reporting and documentation necessary for meeting industry standards, thereby reducing your compliance burden."
        },
        {
          image:img2, title:"Seamless Integration", text: " Our PAM solutions are designed for effortless integration with your existing systems, providing a cohesive framework for managing privileged access without disruption. This ensures that security enhancements are smoothly implemented, preserving operational efficiency and user experience."
        },
       
       
      ];
      // const potentialItems2 = [
      //   {
      //       text: "Enhanced Compliance Support: Our PAM solutions simplify compliance with regulatory requirements by implementing robust controls and providing detailed audit trails for privileged access activities. AI analytics facilitate efficient reporting and documentation necessary for meeting industry standards, thereby reducing your compliance burden."
      //     },
      //     {
      //       text: "Seamless Integration: Our PAM solutions are designed for effortless integration with your existing systems, providing a cohesive framework for managing privileged access without disruption. This ensures that security enhancements are smoothly implemented, preserving operational efficiency and user experience."
      //     },
      // ];
      
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
          <h1>Privileged Access Management </h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Privileged Access Management</p>
        </div>
      </div>

    </div>


    <div className="pam-section">
  <p className="pam-intro">
  In an era where cyber threats are increasingly sophisticated and prevalent, managing access to critical IT systems, applications, and workloads has never been more vital. Securoak’s Privileged Access Management (PAM) solutions leverage cutting-edge AI technologies to empower organizations in effectively controlling access to sensitive information. We establish clear protocols regarding who can access privileged credentials, when they can do so, and for how long, thereby mitigating the risks associated with unauthorized access and ensuring robust security across your infrastructure
  </p>
  
  
  
  <h4 className="pam-subtitle">Expertise in Navigating Cybersecurity Complexities</h4>
  
  <p className="pam-expertise">
    With extensive experience in delivering PAM solutions, Securoak is uniquely equipped to handle the complexities of credential management, compliance, and data breach prevention. Our expert team collaborates with your organization to develop a <strong>tailored PAM strategy</strong> aligned with your unique security requirements, ensuring the protection of your critical assets against emerging cyber threats.
  </p>
</div>





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
  <h2 className="c journey-title">Unlocking Your Potential</h2>
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

    <section className="unlocking-potential-section  unlocking-potential-section2 ">
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
            <strong>Assessment and Planning:</strong><br />
            We initiate the process with a thorough evaluation of your current PAM landscape, identifying risks and outlining a customized strategy that aligns with your organizational goals. Our assessment leverages AI tools to uncover hidden vulnerabilities and potential areas for improvement.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Strategy } alt="Increased Efficiency" className="benefit-image" />
          <div className="benefit-text">
            <strong>Deployment and Integration: </strong><br />
            Our experts work diligently to deploy leading PAM technologies, ensuring smooth integration with your existing IT infrastructure. We prioritize minimal disruption to your operations while implementing robust security measures, including AI-enhanced analytics to monitor system health.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Training} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Training and Support: </strong><br />
            Comprehensive training is provided for your team, equipping them with the skills and knowledge to manage the PAM solution effectively. Ongoing support ensures that your team is ready to tackle challenges as they arise, maintaining confidence in their security capabilities.
          </div>
        </div>
      </div>

      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Strategy } alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Continuous Improvement: </strong><br />
            Securoak is committed to the ongoing enhancement of your PAM program. With AI-driven insights, we conduct regular assessments and updates to adapt to evolving security threats and organizational changes, ensuring your access management strategy remains effective and relevant.
          </div>
        </div>
      </div>

      
     
    </div>
  </div>

  



</section>
<section className="privilage-partner-with-securoak">
  <div className="container">
    <h2 className="privilage-partner-with-securoak-title">Why Partner with Securoak?</h2>
    
    {/* First Row: Left Image, Right Content */}
    <div className="privilage-row">
      <div className="col img-col">
        <img 
          src={why} 
          alt="Why Partner with Securoak" 
          className="section-image"
        />
      </div>
      <div className="col text-col">
        <div className="text-wrapper">
          <p>
            Choosing <strong>Securoak</strong> for your <strong>Privileged Access Management</strong> needs means partnering with a trusted expert dedicated to fortifying your organization’s security posture in a rapidly changing cyber landscape. Our commitment to tailored solutions, innovative AI technologies, and continuous support empowers you to manage privileged access with confidence. Together, we will safeguard your critical assets, mitigate risks associated with privileged credentials, and enable your organization to thrive securely in a digital-first world.
          </p>
          <p>
          By leveraging our advanced PAM solutions enhanced by AI, you can proactively address the complexities of cybersecurity, enhance compliance, and cultivate a culture of security that extends throughout your organization. This not only drives success but also positions your business to navigate the complexities of modern cyber threats with agility and resilience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




    <Footer />
    </>
  )
}

export default PrivilegedAccessManagement
