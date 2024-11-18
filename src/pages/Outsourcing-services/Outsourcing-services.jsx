import React, { useState } from 'react';
import "./Outsourcing-services.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import banner from '../WorkforceIdentity/workforce2.jpg';
import Assesment from "../../pages/IdentityGovernance/assesment.png";
import Strategy  from "../../pages/IdentityGovernance/stratagy.png";
import Implementation from "../../pages/IdentityGovernance/implimentation.png";
import Training from "../../pages/IdentityGovernance/training.png";
import partner from "../../pages/IdentityGovernance/partner.jpg";
import Support from "../../pages/IdentityGovernance/customer-service.png";


const Outsourcingservices = () => {
  // State to manage the current offering
  const [currentOffering, setCurrentOffering] = useState(0);

  // Offering titles and descriptions
  const offerings = [
    {
      title: "Comprehensive Business Process Outsourcing (BPO)",
      description: "We provide tailored BPO solutions that enable you to outsource non-core functions such as customer service, finance, human resources, and IT support. This allows your team to concentrate on strategic initiatives that drive growth while we manage routine tasks securely and efficiently.",
      image: banner
    },
    {
      title: "Flexible IT Outsourcing",
      description: "Our IT outsourcing services encompass a range of functions, including application development, maintenance, and infrastructure management. Leveraging AI and machine learning, we enhance your technology capabilities while proactively managing cybersecurity risks, freeing you from the complexities of in-house resource management.",
      image: banner
    },
    {
      title: "Access to Global Talent",
      description: "With our extensive network, you gain access to a diverse pool of skilled professionals, including cybersecurity experts and AI specialists. We connect you with talent that possesses the necessary expertise to meet your specific project requirements, ensuring your operations are supported by the best in the industry.",
      image: banner
    },
    {
      title: "Cost-Effective Solutions",
      description: "By outsourcing with Securoak, you can significantly reduce operational costs. Our solutions are designed to maximize value while minimizing overhead, enabling you to allocate resources more efficiently, especially towards innovation and security initiatives.",
      image: banner
    },
    {
      title: "Focus on Innovation",
      description: "Outsourcing with us allows your team to focus on innovation and strategic initiatives. With less time spent on routine tasks, your organization can drive creativity and growth, fostering a competitive edge in the market. Our AI-driven insights further enhance decision-making processes, enabling proactive responses to emerging trends.",
      image: banner
    }
  ];

  // Function to handle offering change
  const changeOffering = (direction) => {
    // Update state based on button click direction
    if (direction === 'next') {
      setCurrentOffering((prevOffering) => (prevOffering + 1) % offerings.length); // Loop back to the start
    } else if (direction === 'prev') {
      setCurrentOffering((prevOffering) => (prevOffering - 1 + offerings.length) % offerings.length); // Loop to the end
    }
  };

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
          <h1>Outsourcing services</h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Services <i className="fa-solid fa-greater-than benner-icon"></i> Staffing and Outsourcing Services <i className="fa-solid fa-greater-than benner-icon"></i> Outsourcing services</p>
        </div>
      </div>

      {/* Staffing and Outsourcing Description */}
      <section className="staffing-outsourcing">
        <div className="container">
          <div className="service-description">
            <p>At Securoak, we understand that in today’s fast-paced business environment, focusing on core competencies while optimizing operational efficiency is crucial. Our Outsourcing Services are designed to help you streamline processes, reduce costs, and enhance productivity, allowing your organization to thrive in a digitally driven world. As cybersecurity threats evolve, integrating robust security measures into our outsourcing solutions ensures that your business remains resilient and protected.</p>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="staffing-services">
        <div className="staffing-services-container">
          <div className="section-title">
            <h2 className='Staffing-Services'>Outsourcing services</h2>
            {/* <p className='staffing-content'>At Securoak, we understand that an organization's success hinges on its talent. Our Staffing Services are expertly crafted to connect you with skilled professionals who seamlessly integrate into your team, enhancing productivity from day one.</p> */}
          </div>

          <div className="offerings">
          <img 
                  src={offerings[currentOffering].image} 
                  alt={offerings[currentOffering].title} 
                  className="offering-image"
                />
            
            <div className="offering offering2">
                <h5>Key Offerings</h5>
              <h3>{offerings[currentOffering].title}</h3>
              <p>{offerings[currentOffering].description}</p>
            </div>
          </div>

          <div className="navigation navigation2">
            {/* Make sure the buttons trigger state change properly */}
            <button className="prev-btn" onClick={() => changeOffering('prev')}>Prev</button>
            <button className="next-btn" onClick={() => changeOffering('next')}>Next</button>
          </div>

        
        </div>

        <div className="cta">
            <h3>Unlock Your Potential with Securoak</h3>
            <p>Partnering with Securoak for outsourcing services empowers your organization to unlock its full potential. Our dedicated approach ensures that you can streamline operations, improve service delivery, and achieve your business objectives efficiently, all while maintaining a strong security posture.</p>
          </div>
      </section>



      <section className="unlocking-potential-section">
  <div className="container">
    <h2 className="section-title">Your Journey with Us</h2>
    <p className="section-description">
      By choosing Securoak's WIAM solutions, you unlock a myriad of business benefits:
    </p>
    <div className="benefits-list">
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Assesment} alt="Enhanced Security" className="benefit-image" />
          <div className="benefit-text">
            <strong>Initial Consultation: </strong><br />
            We begin with a thorough consultation to understand your business needs and identify opportunities for outsourcing, with a keen focus on security and compliance.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Strategy } alt="Increased Efficiency" className="benefit-image" />
          <div className="benefit-text">
            <strong>Custom Solution Design: </strong><br />
            Our team collaborates with you to design a tailored outsourcing strategy that aligns with your goals, incorporating AI and cybersecurity measures at every step.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Implementation} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Implementation: </strong><br />
            We manage the transition and implementation process, ensuring minimal disruption to your operations while integrating necessary security protocols.
          </div>
        </div>
      </div>


      
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Support} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Ongoing Support: </strong><br />
            Our dedicated support team oversees operations, continuously optimizing performance and addressing any challenges, particularly those related to cybersecurity threats.
          </div>
        </div>
      </div>

      
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Training} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Performance Review:   </strong><br />
            We conduct regular reviews to assess the effectiveness of our outsourcing solutions, utilizing AI analytics to make necessary adjustments and enhance security measures.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="why-partner-with-us">
      <div className="staff-container">
        {/* Left Side Content */}
        <div className="content-left">
          <h2>Why Partner with Us?</h2>
          <p>
          Choosing Securoak as your outsourcing partner means gaining a strategic ally focused on your success. Our commitment to quality, innovation, and personalized service ensures that you have the support needed to thrive in a competitive landscape. With our emphasis on cybersecurity and AI-driven insights, we work together to achieve operational excellence and drive sustainable growth for your organization.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="content-right">
          <img src={banner} alt="Why Partner with Us" />
        </div>
      </div>
    </section>



      <Footer />
    </>
  );
}

export default Outsourcingservices;
