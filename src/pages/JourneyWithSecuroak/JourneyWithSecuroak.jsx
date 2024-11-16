import React, { useEffect } from 'react';
import './JourneyWithSecuroak.css';
// import { FaUsers, FaLock, FaCogs, FaChartLine, FaHandshake } from 'react-icons/fa';
import { Card, ListGroup } from 'react-bootstrap'; // Assuming you're using Bootstrap for card and list styling


const potentialItems = [
  {  text: "Initial Consultation: : We engage with your team to understand your business goals, challenges, and current identity management systems, ensuring our solutions align with your vision." },
  { text: "Needs Assessment: Our consultants conduct a comprehensive evaluation of your existing processes, identifying gaps and opportunities for improvement in your identity management strategy." },
  {  text: "Customized Strategy Development:Based on the assessment, we craft a tailored CIAM strategy that addresses your specific needs while adhering to regulatory standards and industry best practices." },
  {  text: "Training and Support:We provide extensive training for your team on managing the new CIAM system, alongside ongoing support to address any queries or challenges." },
  {  text: "Continuous Monitoring and Optimization: After deployment, we continuously monitor system performance and user engagement, providing regular insights and recommendations to enhance security and user experience further." },
];

const JourneyWithSecuroak = () => {
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
    <section className="journey-with-securoak">
      <h2 className="text-center journey-title">Journey With Securoak</h2>

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
    </section>
  );
};

export default JourneyWithSecuroak;
