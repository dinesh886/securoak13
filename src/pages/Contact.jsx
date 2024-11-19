import React, { useState } from "react";
import "./Contact.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import baanner from '../components/assests/conbanner.jpg';
import ReCAPTCHA from "react-google-recaptcha"; 

const ContactUs = () => {

  const [selectedLocation, setSelectedLocation] = useState(0);
  const [zoomedUrl, setZoomedUrl] = useState("");

  const locations = [
   
    {
      name: "Australia, Sydney",
      address: "Level 49, 8 Parramatta Square,\n 10 Darcy Street, \n Parramatta, NSW 2150, Australia",
       email:"contact@securoak.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.84704696913!2d151.00177922507143!3d-33.81626001633842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f9223834d19db3%3A0x50b50ddc5274ef27!2sDAIMLINC%20PTY%20LTD!5e0!3m2!1sen!2sin!4v1731925613350!5m2!1sen!2sin",
  
      },
      {
        name: "India, Chennai",
        address: `Securoak Consulting LLP
    Office No: 334, Regus Shyamal Gardens,
    136, Arcot Road, 3rd Floor,
    Shyamala Towers, Saligramam,
    Chennai, Tamil Nadu - 600093`,
    email:"contact@securoak.com",
        mapUrl:
         "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.804254434122!2d80.1960446741216!3d13.048128313197774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1731925719340!5m2!1sen!2sin",
      
        },
  ];
  const handleLocationChange = (index) => {
    setSelectedLocation(index);
  };

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    country: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [isSubscribed, setIsSubscribed] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSubscribed) {
      console.log("You must agree to be emailed.");
      return;
    }

    setIsSubmitting(true); 
    console.log("Form Data:", formValues);

    setIsSubmitting(false); 
    console.log("Form submitted successfully!");
  };

  return (
    <>
      <div className="contact-header" id="contact">
        <Header identityPage={true} />
      </div>

      <div className="identity-image-container">
        <img
          src={baanner}
          alt="A depiction of the company's philosophy"
          className="identity-page-image"
        />
        <div className="overlay-text">
          <h1>Contact us for Securoak Services & Explore Securoak Solutions</h1>
          <p>
            Home <i className="fa-solid fa-greater-than banner-icon"></i> Contact Us
          </p>
        </div>
      </div>

      <div className="contact-container">
        <form className="contact-left" onSubmit={handleSubmit}>
          <div className="contact-left-title">
            <h2>Get in touch</h2>
            <hr />
          </div>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              className="contact-inputs mandatory"
              required
              value={formValues.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Surname*"
              className="contact-inputs mandatory"
              required
              value={formValues.lastName}
              onChange={handleInputChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            className="contact-inputs mandatory"
            required
            value={formValues.email}
            onChange={handleInputChange}
          />
<select
  name="country"
  className="contact-inputs"
  required
  value={formValues.country}
  onChange={handleInputChange}
>
  <option value="" disabled>Select Country*</option>
  <option value="Afghanistan">Afghanistan</option>
 
</select>


          <label>
            <input
              type="checkbox"
              required
              className="mandatory checkbox"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
            />
            I agree to be emailed *
          </label>

          <button type="submit" disabled={!isSubscribed || isSubmitting}>
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </button>

          <p className="note">
            Please note, some email providers will automatically direct emails from Securoak into your spam/junk folder.
          </p>
        </form>

        <div className="contact-right">
  <div className="contact-right-title">
    <h2>Stay Informed with Securoak</h2>
    <p className="rightpara">
      Join our newsletter, <strong>The Security Ledger</strong>, to get the latest on cybersecurity trends, practical tips for protecting your data, and expert advice on creating secure digital experiences. Be the first to know about industry insights and strategies to keep your business secure and compliant.
    </p>
  </div>
</div>

      </div>
      <div className="map-container">
      {/* <h2 className="our-location">Our Locations</h2> */}

      {/* Buttons */}
      <div className="location-buttons">
        {locations.map((location, index) => (
          <button
            key={index}
            className={`location-btn ${
              selectedLocation === index ? "active" : ""
            }`}
            onClick={() => handleLocationChange(index)}
          >
            {location.name}
          </button>
        ))}
      </div>

      {/* Two-Column Layout */}
      <div className="location-content">
        {/* Left: Map */}
        <div className="map-column">
          <iframe
            src={locations[selectedLocation].mapUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

       {/* Right: Address */}
<div className="address-column">
  <h3 className="location-title">{locations[selectedLocation].name}</h3>
  <div className="location-details">
    {/* <i className="fas fa-map-marker-alt location-icon"></i> */}
    <p
      className="location-address"
      dangerouslySetInnerHTML={{
        __html: locations[selectedLocation].address.replace(/\n/g, "<br />"),
      }}
    ></p>
    <div className="email-container">
      <i className="fa-regular fa-envelope email-icon"></i>
      <h4 className="location-email">{locations[selectedLocation].email}</h4>
    </div>
  </div>
  
</div>

      </div>
    </div>

      <Footer />
    </>
  );
}

export default ContactUs;
