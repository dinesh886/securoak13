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
      alert("You must agree to be emailed.");
      return;
    }

    setIsSubmitting(true); 
    console.log("Form Data:", formValues);

    setIsSubmitting(false); 
    alert("Form submitted successfully!");
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
  <option value="Albania">Albania</option>
  <option value="Algeria">Algeria</option>
  <option value="Andorra">Andorra</option>
  <option value="Angola">Angola</option>
  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
  <option value="Argentina">Argentina</option>
  <option value="Armenia">Armenia</option>
  <option value="Australia">Australia</option>
  <option value="Austria">Austria</option>
  <option value="Azerbaijan">Azerbaijan</option>
  <option value="Bahamas">Bahamas</option>
  <option value="Bahrain">Bahrain</option>
  <option value="Bangladesh">Bangladesh</option>
  <option value="Barbados">Barbados</option>
  <option value="Belarus">Belarus</option>
  <option value="Belgium">Belgium</option>
  <option value="Belize">Belize</option>
  <option value="Benin">Benin</option>
  <option value="Bhutan">Bhutan</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
  <option value="Botswana">Botswana</option>
  <option value="Brazil">Brazil</option>
  <option value="Brunei">Brunei</option>
  <option value="Bulgaria">Bulgaria</option>
  <option value="Burkina Faso">Burkina Faso</option>
  <option value="Burundi">Burundi</option>
  <option value="Cabo Verde">Cabo Verde</option>
  <option value="Cambodia">Cambodia</option>
  <option value="Cameroon">Cameroon</option>
  <option value="Canada">Canada</option>
  <option value="Central African Republic">Central African Republic</option>
  <option value="Chad">Chad</option>
  <option value="Chile">Chile</option>
  <option value="China">China</option>
  <option value="Colombia">Colombia</option>
  <option value="Comoros">Comoros</option>
  <option value="Congo">Congo</option>
  <option value="Costa Rica">Costa Rica</option>
  <option value="Croatia">Croatia</option>
  <option value="Cuba">Cuba</option>
  <option value="Cyprus">Cyprus</option>
  <option value="Czech Republic">Czech Republic</option>
  <option value="Denmark">Denmark</option>
  <option value="Djibouti">Djibouti</option>
  <option value="Dominica">Dominica</option>
  <option value="Dominican Republic">Dominican Republic</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Egypt">Egypt</option>
  <option value="El Salvador">El Salvador</option>
  <option value="Equatorial Guinea">Equatorial Guinea</option>
  <option value="Eritrea">Eritrea</option>
  <option value="Estonia">Estonia</option>
  <option value="Eswatini">Eswatini</option>
  <option value="Ethiopia">Ethiopia</option>
  <option value="Fiji">Fiji</option>
  <option value="Finland">Finland</option>
  <option value="France">France</option>
  <option value="Gabon">Gabon</option>
  <option value="Gambia">Gambia</option>
  <option value="Georgia">Georgia</option>
  <option value="Germany">Germany</option>
  <option value="Ghana">Ghana</option>
  <option value="Greece">Greece</option>
  <option value="Grenada">Grenada</option>
  <option value="Guatemala">Guatemala</option>
  <option value="Guinea">Guinea</option>
  <option value="Guinea-Bissau">Guinea-Bissau</option>
  <option value="Guyana">Guyana</option>
  <option value="Haiti">Haiti</option>
  <option value="Honduras">Honduras</option>
  <option value="Hungary">Hungary</option>
  <option value="Iceland">Iceland</option>
  <option value="India">India</option>
  <option value="Indonesia">Indonesia</option>
  <option value="Iran">Iran</option>
  <option value="Iraq">Iraq</option>
  <option value="Ireland">Ireland</option>
  <option value="Israel">Israel</option>
  <option value="Italy">Italy</option>
  <option value="Jamaica">Jamaica</option>
  <option value="Japan">Japan</option>
  <option value="Jordan">Jordan</option>
  <option value="Kazakhstan">Kazakhstan</option>
  <option value="Kenya">Kenya</option>
  <option value="Kiribati">Kiribati</option>
  <option value="Kuwait">Kuwait</option>
  <option value="Kyrgyzstan">Kyrgyzstan</option>
  <option value="Laos">Laos</option>
  <option value="Latvia">Latvia</option>
  <option value="Lebanon">Lebanon</option>
  <option value="Lesotho">Lesotho</option>
  <option value="Liberia">Liberia</option>
  <option value="Libya">Libya</option>
  <option value="Liechtenstein">Liechtenstein</option>
  <option value="Lithuania">Lithuania</option>
  <option value="Luxembourg">Luxembourg</option>
  <option value="Madagascar">Madagascar</option>
  <option value="Malawi">Malawi</option>
  <option value="Malaysia">Malaysia</option>
  <option value="Maldives">Maldives</option>
  <option value="Mali">Mali</option>
  <option value="Malta">Malta</option>
  <option value="Marshall Islands">Marshall Islands</option>
  <option value="Mauritania">Mauritania</option>
  <option value="Mauritius">Mauritius</option>
  <option value="Mexico">Mexico</option>
  <option value="Micronesia">Micronesia</option>
  <option value="Moldova">Moldova</option>
  <option value="Monaco">Monaco</option>
  <option value="Mongolia">Mongolia</option>
  <option value="Montenegro">Montenegro</option>
  <option value="Morocco">Morocco</option>
  <option value="Mozambique">Mozambique</option>
  <option value="Myanmar">Myanmar</option>
  <option value="Namibia">Namibia</option>
  <option value="Nauru">Nauru</option>
  <option value="Nepal">Nepal</option>
  <option value="Netherlands">Netherlands</option>
  <option value="New Zealand">New Zealand</option>
  <option value="Nicaragua">Nicaragua</option>
  <option value="Niger">Niger</option>
  <option value="Nigeria">Nigeria</option>
  <option value="North Macedonia">North Macedonia</option>
  <option value="Norway">Norway</option>
  <option value="Oman">Oman</option>
  <option value="Pakistan">Pakistan</option>
  <option value="Palau">Palau</option>
  <option value="Panama">Panama</option>
  <option value="Papua New Guinea">Papua New Guinea</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Philippines">Philippines</option>
  <option value="Poland">Poland</option>
  <option value="Portugal">Portugal</option>
  <option value="Qatar">Qatar</option>
  <option value="Romania">Romania</option>
  <option value="Russia">Russia</option>
  <option value="Rwanda">Rwanda</option>
  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
  <option value="Saint Lucia">Saint Lucia</option>
  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
  <option value="Samoa">Samoa</option>
  <option value="San Marino">San Marino</option>
  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
  <option value="Saudi Arabia">Saudi Arabia</option>
  <option value="Senegal">Senegal</option>
  <option value="Serbia">Serbia</option>
  <option value="Seychelles">Seychelles</option>
  <option value="Sierra Leone">Sierra Leone</option>
  <option value="Singapore">Singapore</option>
  <option value="Slovakia">Slovakia</option>
  <option value="Slovenia">Slovenia</option>
  <option value="Solomon Islands">Solomon Islands</option>
  <option value="Somalia">Somalia</option>
  <option value="South Africa">South Africa</option>
  <option value="South Korea">South Korea</option>
  <option value="South Sudan">South Sudan</option>
  <option value="Spain">Spain</option>
  <option value="Sri Lanka">Sri Lanka</option>
  <option value="Sudan">Sudan</option>
  <option value="Suriname">Suriname</option>
  <option value="Sweden">Sweden</option>
  <option value="Switzerland">Switzerland</option>
  <option value="Syria">Syria</option>
  <option value="Taiwan">Taiwan</option>
  <option value="Tajikistan">Tajikistan</option>
  <option value="Tanzania">Tanzania</option>
  <option value="Thailand">Thailand</option>
  <option value="Timor-Leste">Timor-Leste</option>
  <option value="Togo">Togo</option>
  <option value="Tonga">Tonga</option>
  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
  <option value="Tunisia">Tunisia</option>
  <option value="Turkey">Turkey</option>
  <option value="Turkmenistan">Turkmenistan</option>
  <option value="Tuvalu">Tuvalu</option>
  <option value="Uganda">Uganda</option>
  <option value="Ukraine">Ukraine</option>
  <option value="United Arab Emirates">United Arab Emirates</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="United States">United States</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Uzbekistan">Uzbekistan</option>
  <option value="Vanuatu">Vanuatu</option>
  <option value="Vatican City">Vatican City</option>
  <option value="Venezuela">Venezuela</option>
  <option value="Vietnam">Vietnam</option>
  <option value="Yemen">Yemen</option>
  <option value="Zambia">Zambia</option>
  <option value="Zimbabwe">Zimbabwe</option>
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
