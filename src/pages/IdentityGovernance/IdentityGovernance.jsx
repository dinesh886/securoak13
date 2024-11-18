import React from 'react';
import { useEffect } from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import banner from '../WorkforceIdentity/workforce2.jpg';
import "./IdentityGovernance.css"
import Assesment from "./assesment.png";
import Strategy  from "./stratagy.png";
import Implementation from "./implimentation.png";
import Training from "./training.png";
import partner from "./partner.jpg";
import Support from "./customer-service.png";
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import { Card, ListGroup } from 'react-bootstrap'; // Assuming you're using Bootstrap for card and list styling




const IdentityGovernance = () => {


    const potentialItems = [
        {
          image:img1, title:"Streamlined Risk Management",text: " Our advanced AI-driven tools allow you to understand and manage access risks effortlessly. By leveraging sophisticated algorithms, we continuously analyze user behavior patterns and access requests, enabling you to control permissions for sensitive data and protect your organization’s most valuable resources. This proactive approach not only safeguards your data but also ensures compliance with ever-evolving regulatory requirements."
        },
        {
          image:img2, title:"Proactive Policy Enforcement",text: " With automated identification of policy violations, our IG solutions enable you to address risks before they escalate. Our real-time detection capabilities, powered by machine learning, monitor access patterns and user activities around the clock. This allows you to prevent unauthorized access and compliance issues, fortifying your systems and safeguarding sensitive information from potential breaches."
        },
        {
          image:img3, title:"Expert Implementation with Trusted Partners",text: " We collaborate with leading providers such as SailPoint and RSA, combining their industry-leading technology with our deep technical expertise tailored to your identity governance needs. By integrating advanced cybersecurity measures, we enhance security while minimizing operational risks, ensuring that your identity management framework is resilient against modern threats."
        },
        {
          image:img1, title:"Streamlined Risk Management",text: " Our advanced AI-driven tools allow you to understand and manage access risks effortlessly. By leveraging sophisticated algorithms, we continuously analyze user behavior patterns and access requests, enabling you to control permissions for sensitive data and protect your organization’s most valuable resources. This proactive approach not only safeguards your data but also ensures compliance with ever-evolving regulatory requirements."
        },
        {
          image:img2, title:"Proactive Policy Enforcement", text: " With automated identification of policy violations, our IG solutions enable you to address risks before they escalate. Our real-time detection capabilities, powered by machine learning, monitor access patterns and user activities around the clock. This allows you to prevent unauthorized access and compliance issues, fortifying your systems and safeguarding sensitive information from potential breaches."
        },
        {
          image:img3, title:"Expert Implementation with Trusted Partners",text: " We collaborate with leading providers such as SailPoint and RSA, combining their industry-leading technology with our deep technical expertise tailored to your identity governance needs. By integrating advanced cybersecurity measures, we enhance security while minimizing operational risks, ensuring that your identity management framework is resilient against modern threats."
        },
       
       
      ];
      // const potentialItems2 = [
      //   {
      //     text: "Streamlined Risk Management: Our advanced AI-driven tools allow you to understand and manage access risks effortlessly. By leveraging sophisticated algorithms, we continuously analyze user behavior patterns and access requests, enabling you to control permissions for sensitive data and protect your organization’s most valuable resources. This proactive approach not only safeguards your data but also ensures compliance with ever-evolving regulatory requirements."
      //   },
      //   {
      //     text: "Proactive Policy Enforcement: With automated identification of policy violations, our IG solutions enable you to address risks before they escalate. Our real-time detection capabilities, powered by machine learning, monitor access patterns and user activities around the clock. This allows you to prevent unauthorized access and compliance issues, fortifying your systems and safeguarding sensitive information from potential breaches."
      //   },
      //   {
      //     text: "Expert Implementation with Trusted Partners: We collaborate with leading providers such as SailPoint and RSA, combining their industry-leading technology with our deep technical expertise tailored to your identity governance needs. By integrating advanced cybersecurity measures, we enhance security while minimizing operational risks, ensuring that your identity management framework is resilient against modern threats."
      //   },
       
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

        {/* Image and Overlay Section */}
        <div className="identity-image-container">
        <img
          src={banner}
          alt="A depiction of the company's philosophy"
          className="identity-page-image"
        />
        <div className="overlay-text">
          <h1>Identity Governance with Securoak </h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i>ser(WIAM)</p>
        </div>
      </div>

      <div className="identity-governance-container">
        {/* <h1 className="identity-governance-title">Identity Governance with Securoak</h1> */}
        <p className="identity-governance-description">
          Securoak’s Identity Governance (IG) solutions provide a robust framework that seamlessly integrates people, applications, data, and devices within your organization. In today’s fast-evolving digital landscape, where AI and cybersecurity intersect, our solutions offer comprehensive visibility over access permissions and associated risks.
        </p>
        <p className="identity-governance-description">
          Empower your organization to manage security, compliance, and operational efficiency effectively. With Securoak, you gain the tools needed to navigate the complexities of access control, ensuring that your digital assets are protected and aligned with regulatory requirements.
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
            <strong>Assessment:</strong><br />
            We conduct a thorough analysis of your current identity governance framework, employing AI to identify gaps and opportunities for improvement.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Strategy } alt="Increased Efficiency" className="benefit-image" />
          <div className="benefit-text">
            <strong>Strategy Development:</strong><br />
            Collaborating with your team, we design a customized identity governance strategy that aligns with your business objectives and security needs, integrating advanced AI techniques for predictive analytics.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Implementation} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Implementation:</strong><br />
            Our experts guide you through the implementation process, ensuring seamless integration with existing systems while minimizing operational disruption and enhancing security protocols.
          </div>
        </div>
      </div>

      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Training} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Training: </strong><br />
            We provide comprehensive training to your staff, empowering them to leverage our solutions effectively and ensuring they are prepared to respond to evolving cybersecurity challenges.
          </div>
        </div>
      </div>

      
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Support} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Ongoing Support: </strong><br />
            With continuous monitoring and support, we adapt your solutions to the ever-changing security landscape and compliance requirements, ensuring your organization remains resilient against new threats.
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
          With Securoak, you enhance your digital identity management capabilities and position your organization as a trusted leader in the marketplace. Let’s unlock your potential together.
        </p>
      </div>

      <div className="why-partner-content">
        <div className="why-partner-image">
          <img src={partner} alt="Securoak" className="image" />
        </div>

        <div className="why-partner-features">
          <ul className="partner-features-list">
            <li><strong>Proven Expertise :</strong> Benefit from our extensive industry experience and partnerships with top-tier providers, ensuring best-in-class solutions that integrate cutting-edge AI and cybersecurity technologies.</li>
            <li><strong>Customized Solutions:</strong> Enjoy tailored approaches that directly address your specific identity governance needs, supported by AI-driven insights for proactive decision-making.</li>
            <li><strong>Enhanced Security: </strong> Strengthen your security posture while ensuring compliance with regulatory standards, reducing your overall risk profile in the face of evolving cyber threats.</li>
            <li><strong>Operational Efficiency:</strong> Streamline processes through automation, saving time and minimizing errors, thus enabling your teams to focus on innovation and strategic initiatives.</li>
            <li><strong>Long-term Partnership:</strong> We are committed to your success, offering ongoing support as your business evolves and the cybersecurity landscape shifts, ensuring that you remain one step ahead of potential risks.</li>
          </ul>
        </div>
      </div>
    </section>

    <div className="securoak-benefit">
  <p>
    <strong>By choosing Securoak,</strong> you not only invest in a robust identity governance solution but also empower your organization to thrive amidst the complexities of modern security challenges. Build a secure future founded on <span className="highlight">trust</span>, <span className="highlight">efficiency</span>, and <span className="highlight">technological innovation</span>.
  </p>
</div>






      <Footer />
    </>
  );
};

export default IdentityGovernance;
