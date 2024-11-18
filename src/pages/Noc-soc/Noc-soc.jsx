import React from 'react'
import "./Noc-soc.css"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import banner from '../WorkforceIdentity/workforce2.jpg';
import Assesment from "../../pages/IdentityGovernance/assesment.png";
import Strategy  from "../../pages/IdentityGovernance/stratagy.png";
import Implementation from "../../pages/IdentityGovernance/implimentation.png";
import Training from "../../pages/IdentityGovernance/training.png";
import partner from "../../pages/IdentityGovernance/partner.jpg";
import Support from "../../pages/IdentityGovernance/customer-service.png";


const Nocsoc = () => {
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
          <h1>NOC&SOC </h1>
          <p>Home <i className="fa-solid fa-greater-than benner-icon"></i> Services <i className="fa-solid fa-greater-than benner-icon"></i> Identify Offering Customer <i className="fa-solid fa-greater-than benner-icon"></i> (CIAM)</p>
        </div>
      </div>
    <div>
      
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
        <i className="fas fa-clock"></i> 24/7 Monitoring and Management
      </h3>
      <p>
        Our NOC delivers continuous oversight of your IT environment, leveraging AI-driven analytics to guarantee optimal performance and swift issue identification. 
        The SOC complements this with vigilant, round-the-clock monitoring for security incidents, utilizing machine learning algorithms to detect potential threats in real-time and facilitate rapid responses.
      </p>
    </div>
    <div className="offering-item">
      <h3>
        <i className="fas fa-shield-alt"></i> Incident Response and Recovery
      </h3>
      <p>
        In the event of a security breach, our SOC team is equipped for immediate action, minimizing damage and enabling quick recovery. Our structured incident response plans incorporate AI tools that enhance threat detection and remediation, ensuring robust protection of your assets and business continuity.
      </p>
    </div>
    <div className="offering-item">
      <h3>
        <i className="fas fa-search"></i> Proactive Threat Detection
      </h3>
      <p>
        By utilizing advanced AI security tools, our SOC identifies and mitigates cybersecurity risks before they escalate. Machine learning models continuously adapt to evolving threat landscapes, fortifying your organization against sophisticated attacks.
      </p>
    </div>
    <div className="offering-item">
      <h3>
        <i className="fas fa-chart-line"></i> Performance Optimization
      </h3>
      <p>
        Beyond security, our NOC team enhances your network’s performance through AI-driven insights that optimize resource allocation and operational efficiency, ensuring your IT systems run smoothly.
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
            <strong>Assessment:</strong><br />
            We initiate our partnership with a thorough evaluation of your current IT landscape to identify areas for improvement, leveraging AI insights for a comprehensive analysis.
          </div>
        </div>
      </div>
     
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Implementation} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Implementation:</strong><br />
            Our experts deploy tailored solutions that address your unique needs, ensuring seamless integration into your existing environment with minimal disruption.
          </div>
        </div>
      </div>

      

      
      <div className="benefit-item">
        <div className="benefit-content">
          <img src={Support} alt="Improved Productivity" className="benefit-image" />
          <div className="benefit-text">
            <strong>Ongoing Support: </strong><br />
            Enjoy continuous monitoring, management, and support as your organization evolves, enhanced by AI capabilities that ensure proactive threat detection and operational efficiency.
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
            <li><strong>Expertise:</strong> Our seasoned professionals possess extensive experience in managing and securing IT infrastructures across various industries, with specialized knowledge in AI and cybersecurity.</li>
            <li><strong>Advanced Technologies </strong> : We leverage the latest AI-driven tools and technologies to maintain optimal performance and robust security for your operations.</li>
            <li><strong>Customized Solutions: </strong> Our services are tailored to your specific requirements, ensuring alignment with your business goals and supporting your long-term success.</li>
            
          </ul>
        </div>
      </div>

      
    <div className="securoak-benefit">
  <p>
  Choose Securoak to empower your organization with a resilient IT infrastructure, comprehensive security posture, and the advanced capabilities of AI to thrive in a rapidly evolving digital landscape.
  </p>
</div>
    </section>

    </div>
    <Footer />
    </>
  )
}

export default Nocsoc;
