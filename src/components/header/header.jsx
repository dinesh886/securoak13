import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assests/logo.png";
import "./header.scss";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";


function Header({ aboutPage, identityPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const setActiveItemBasedOnPath = () => {
      if (location.pathname === "/securoak13") {
        setActiveItem("HOME");
      } else if (location.pathname === "/securoak13/about") {
        setActiveItem("ABOUT US");
      } else {
        const servicePaths = [
          "/securoak13/identity-access-management",
          "/securoak13/CloudSolutions",
          "/securoak13/ui-ux-design",
          "/securoak13/devop-secops",
          "/securoak13/api-developement",
        ];
        const foundService = servicePaths.find((path) =>
          location.pathname.startsWith(path)
        );
        if (foundService) {
          setActiveItem("OUR SERVICES");
        }
      }
    };

    setActiveItemBasedOnPath();
  }, [location.pathname]);

  const Data = [
    { Title: "Home", Link: "/securoak13" },
    // { Title: "About Us", Link: "/securoak13/about" },
    {
      Title: "Our Services",
      Link: "#",
      Submenu: [
        {
          Title: (
            <>
            Identity Offerings    
            </>
          ),
          Link: "",
          Submenu: [
            
            { Title: "Digital Identity Transformation", Link: "/securoak13/Digital-Identity-Transformation" },
            { Title: "Customer Identity and Access Management", Link: "/securoak13/identity-access-management" },
            { Title: "Workforce Identity and Access Management", Link: "/securoak13/Workforce-Identity" },
            { Title: "Identity Governance", Link: "/securoak13/Identitygovernance" },
            { Title: "Privilege Access Management", Link: "/securoak13/Privilegedaccessmanagement" },
            // { Title: "Managed Support Services", Link: "/securoak13/Managedsupportservices" }
          ],
        },
        { Title: "Application Integration Services",
           Link: "/securoak13/Applicationintegrationservices" 
          
          },
        { 
          Title: "Infrastructure & Managed Services",
          // Link: "/securoak13/", 
          Submenu: [
            { Title: "IT Consulting", Link: "/securoak13/it-consulting" },
            { Title: "NOC & SOC ", Link: "/securoak13/Noc-soc" },
            { Title: "Network and Telephony Solutions", Link: "/securoak13/Network-Telephony-Solutions"  },
            { Title: "Managed IT Services", Link: "/securoak13/Managed-It-Services" },
            { Title: "IT Procurement", Link: "/securoak13/It-procurement" },
          ],
        },
        { 
          Title: "Staffing and Outsourcing Services", 
          // Link: "/securoak13/",
          
          Submenu: [
            { Title: "Digital Identity Transformation", Link: "/securoak13/Digital-Identity-Transformation" },
            { Title: "Customer Identity and Access Management", Link: "/securoak13/identity-access-management/access-governance" },
          ],
        },
      ],
    },
    { Title: "Events", Link: "/securoak13/upcoming-events" },
    { Title: "Contact Us", Link: "/securoak13/ContactUs" },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className={`header_navebar ${scrolled ? "scrolled" : ""} ${aboutPage ? "header-about" : ""} ${identityPage ? "header-identity" : ""}`}>
      <Container>
        <Navbar.Brand href="/securoak13" className="icon-logo">
          <div className="main_logo">
            <img src={logo} alt="Company Logo" title="Company Logo" loading="lazy" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="header_title">
            {Data.map((value, index) => (
              <div
                key={index}
                className={`nav-item header-nav-item ${activeItem === value.Title ? "active" : ""}`}
                onMouseEnter={() => value.Title === "Our Services" && setShowDropdown(true)}
                onMouseLeave={() => value.Title === "Our Services" && setShowDropdown(false)}
              >
                <a
                  href={value.Link}
                  className={`nav-link ${"/securoak13" + location.pathname === value.Link || "/securoak13" + location.pathname === value.Link + "/" ? "active" : ""}`}
                  onClick={() => setActiveItem(value.Title)}
                >
                  {value.Title}
                </a>

             {value.Submenu && showDropdown && (
  <div className="dropdown-menu" aria-haspopup="true" aria-expanded="true">
    {value.Submenu.map((subItem, subIndex) => (
      <div key={subIndex} className="dropdown-subitem">
        <a
          href={subItem.Link || "#"}
          className={`dropdown-item ${location.pathname === subItem.Link ? "active" : ""}`}
          onClick={() => {
            if (subItem.Link) {
              setActiveItem("OUR SERVICES");
            }
          }}
        >
          {subItem.Title}
        </a>

        {subItem.Submenu && (
          <div className="dropdown-menu-inner">
            {subItem.Submenu.map((innerSubItem, innerSubIndex) => (
              <a 
                href={innerSubItem.Link} 
                key={innerSubIndex} 
                className={`dropdown-item-inner ${location.pathname === innerSubItem.Link ? "active" : ""}`}
                onClick={() => setActiveItem("OUR SERVICES")}
              >
                {innerSubItem.Title}
              </a>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)}

              </div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
