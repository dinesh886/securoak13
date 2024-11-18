import React, { useState } from 'react';
import "./Staffing-services.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import banner from '../WorkforceIdentity/workforce2.jpg';
import Assesment from "../../pages/IdentityGovernance/assesment.png";
import Strategy  from "../../pages/IdentityGovernance/stratagy.png";
import Implementation from "../../pages/IdentityGovernance/implimentation.png";
import Training from "../../pages/IdentityGovernance/training.png";
import partner from "../../pages/IdentityGovernance/partner.jpg";
import Support from "../../pages/IdentityGovernance/customer-service.png";
const Staffingservices = () => {
  // State to manage the current offering
  const [currentOffering, setCurrentOffering] = useState(0);

  // Offering titles and descriptions
  const offerings = [
    {
      title: "Tailored Recruitment Solutions",
      description: "We provide customized staffing solutions tailored to your specific needs. Whether you require temporary staff, full-time hires, or specialized expertise, we source candidates who align with your organizational culture and project objectives.",
      image: banner
    },
    {
      title: "Access to a Diverse Talent Pool",
      description: "Our extensive network encompasses a broad range of skills and industries. By leveraging our resources, we ensure you have access to the best talent available, enabling you to build a dynamic and capable workforce.",
      image: banner
    },
    {
      title: "Streamlined Hiring Process",
      description: "Our efficient recruitment process minimizes time-to-hire while upholding the highest quality standards. We manage everything from initial screenings and interviews to background checks and onboarding, allowing you to focus on your core business operations.",
      image: banner
    },
    {
      title: "Flexible Staffing Models",
      description: "We offer a variety of staffing models, including contract staffing, direct-hire placements, and project-based staffing. This flexibility allows you to scale your workforce according to changing business demands.",
      image: banner
    },
    {
      title: "Expert Consultation and Support",
      description: "Our experienced consultants work closely with you to understand your unique needs and provide strategic guidance throughout the hiring process. We are dedicated to delivering exceptional service at every stage.",
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
          <h1>Staffing Services</h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Services <i className="fa-solid fa-greater-than benner-icon"></i> Staffing and Outsourcing Services <i className="fa-solid fa-greater-than benner-icon"></i> Staffing Services</p>
        </div>
      </div>

      {/* Staffing and Outsourcing Description */}
      <section className="staffing-outsourcing">
        <div className="container">
          <div className="service-description">
            <p>Securoak's Staffing and Outsourcing Services empower organizations to streamline operations and focus on core competencies. Our tailored staffing solutions connect you with skilled professionals, while our outsourcing services manage non-core functions, enhancing efficiency and reducing costs. Together, we drive innovation and optimize resources for sustainable growth and success. With our support, you can focus on your business's strategic goals, while we take care of the operational aspects, ensuring your business remains agile and competitive in a fast-paced market.</p>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="staffing-services">
        <div className="staffing-services-container">
          <div className="section-title">
            <h2 className='Staffing-Services'>Staffing Services</h2>
            <p className='staffing-content'>At Securoak, we understand that an organization's success hinges on its talent. Our Staffing Services are expertly crafted to connect you with skilled professionals who seamlessly integrate into your team, enhancing productivity from day one.</p>
          </div>

          <div className="offerings">
          <img 
                  src={offerings[currentOffering].image} 
                  alt={offerings[currentOffering].title} 
                  className="offering-image"
                />
            
            <div className="offering">
                <h5>Key Offerings</h5>
              <h3>{offerings[currentOffering].title}</h3>
              <p>{offerings[currentOffering].description}</p>
            </div>
          </div>

          <div className="navigation">
            {/* Make sure the buttons trigger state change properly */}
            <button className="prev-btn" onClick={() => changeOffering('prev')}>Prev</button>
            <button className="next-btn" onClick={() => changeOffering('next')}>Next</button>
          </div>

        
        </div>

        <div className="cta">
            <h3>Unlock Your Potential with Securoak</h3>
            <p>Partnering with Securoak unlocks your organization's full potential. Our dedicated approach to talent acquisition enables you to build high-performing teams that drive innovation and success. Allow us to navigate the complexities of staffing so you can concentrate on what you do best.</p>
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
            <strong>Consultation:</strong><br />
            We start with a comprehensive consultation to understand your staffing needs and company culture.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Strategy } alt="Increased Efficiency" className="benefit-image" />
          <div className="benefit-text">
            <strong>Talent Sourcing:</strong><br />
            Our team utilizes our network and resources to identify suitable candidates.
          </div>
        </div>
      </div>
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Implementation} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Screening and Selection: </strong><br />
            We conduct thorough screenings and interviews to ensure the best fit for your organization.
          </div>
        </div>
      </div>

      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Training} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Onboarding:  </strong><br />
            We assist in the onboarding process to ensure a seamless transition for new hires.
          </div>
        </div>
      </div>

      
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Support} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Ongoing Support: </strong><br />
            We provide continuous support and follow-up to ensure satisfaction and optimal performance.
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
          Choosing Securoak means gaining a strategic partner committed to your success. With our deep industry knowledge, unwavering commitment to quality, and personalized service, you can trust that you have the right talent to meet your business objectives. Together, we can build a brighter future for your organization, all while embedding the necessary AI and cybersecurity capabilities to navigate today’s evolving landscape.
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

export default Staffingservices;
