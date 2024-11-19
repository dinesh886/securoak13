import React from 'react'
import "../Partnership/partner.scss";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsCheck } from "react-icons/bs";

import { FaArrowRightLong } from "react-icons/fa6";

import cloude from "../../assests/cloud/cloud.jpg";
import partner from '../../assests/Partnership/saviynt-logo.svg'
import partner2 from '../../assests/Partnership/octa.jpg'
import partner3 from '../../assests/Partnership/xm-cyber.jpg'
import partner4 from '../../assests/Partnership/drata.jpg'
import partners from '../../assests/Partnership/partnership2.jpg'
import partner5 from '../../assests/Partnership/oktalogo.jpg'
import partner6 from '../../assests/Partnership/IBM.png'

const Partner = () => {
  return (
    <section className="cloud_full">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="cloud_cnt">
              {/* <h2 className="title">Cloud Solutions</h2> */}
              <p className="desc">Partnerships</p>
              <p className='partner-title'><b>Industry Leading IDAM Solutions: </b></p>
              <p className="sub_desc">
            
              Establishing a Comprehensive Defense Strategy: Empowering and protecting premier organizations with an integrated platform.
              Simplify access policy management, clearly define group memberships, and seamlessly enforce security protocols.

              </p>

              <div className="total_list">
                <div className="list">
                  <div className="para partner-one">
                   
                    <img src={partner} alt="" srcset="" />
                  </div>
                  <div className="para partner-two">
                    
                      <img src={partner5} alt="" srcset="" />
                  </div>
                  <div className="para partner-two">
                    
                    <img src={partner6} alt="" srcset="" />
                </div>
                </div>
                <p className='partner-title'><b>Security and Compliance Solutions: </b></p>
                <p className="sub_desc">
                 Fortify Your Digital Perimeter: Streamline and expedite your compliance efforts with industry-leading solutions.
                 Reduce costs and time with rapid remediation and automated attack path management, ensuring your organization remains secure and compliant.

              </p>
                <div className="list">
                  <div className="para partner-three">
                  
                    <img src={partner4} alt="" srcset="" />
                  </div>
                  <div className="para partner-four">
                   
                      <img src={partner3} alt="" srcset="" />
                  </div>
                </div>
              </div>

           
            </div>
          </Col>
          <Col md={6}>
            <div className="image">
              <img src={partners} alt="Cloud solutions overview" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Partner
