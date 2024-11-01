import React from 'react';
import QouteSection from '../allcomponents/quote/QuoteSec';
import { Link } from 'react-router-dom';
import './Contact.css'
import { useState } from 'react';
import { useEffect } from 'react';


const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Message sent:', formData);
    // Reset the form if needed
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="aboutcompo">
      <div className='aboutsecio'>
        <div className="overlayabout"></div>
        <div className="container">
          <div className="row w-100 rowforabout">
            <div className='col-md-9 pb-5 text-center'>
              <p className='breadcrumbs'>
                <span>
                  <Link to="/">Home &gt;</Link>
                </span>
                <span>Contact us &gt;
                </span>
              </p>
              <h1 className='mb-0 aboutheadi'>Contact us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='contactinfo'>
        <div className="container d-flex justify-content-center">
          <div className="row row d-flex justify-content-center contact-info w-100">
            <div className='col-md-3 d-flex pb-2'>
              <div className='align-self-stretch box p-4 text-center contactcardinfo'>
                <div className='iconcontact d-flex align-items-center justify-content-center'>
                  <div className="imgiconcontact1"></div>
                </div>
                <h3>Address</h3>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div className='col-md-3 d-flex pb-2'>
              <div className='align-self-stretch box p-4 text-center contactcardinfo'>
                <div className='iconcontact d-flex align-items-center justify-content-center'>
                  <div className="imgiconcontact2"></div>
                </div>
                <h3>Contact Number</h3>
                <p><a href="">+ 1235 2355 98</a></p>
              </div>
            </div>
            <div className='col-md-3 d-flex pb-2'>
              <div className='align-self-stretch box p-4 text-center contactcardinfo'>
                <div className='iconcontact d-flex align-items-center justify-content-center'>
                  <div className="imgiconcontact3"></div>
                </div>
                <h3>Email Address</h3>
                <p><a href="">info@yoursite.com</a></p>
              </div>
            </div>
            <div className='col-md-3 d-flex pb-2'>
              <div className='align-self-stretch box p-4 text-center contactcardinfo'>
                <div className='iconcontact d-flex align-items-center justify-content-center'>
                  <div className="imgiconcontact4"></div>
                </div>
                <h3>Website</h3>
                <p><a href="">yoursite.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='contact-section2 botumepad'>
        <div className="container containii">
          <div className="row w-100 block-9">
            <div className='col-md-6 order-md-last d-flex thepad thepadnot'>
              <div className="forum-message-container p-5 w-100">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject"></label>
                    <input type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                  <div className="form-group mesgrup">
                    <label htmlFor="message"></label>
                    <textarea id="message" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required ></textarea>
                  </div>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>

            <div className='col-md-6 d-flex thepadnot'>
            <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509204!2d144.95373521531894!3d-37.81627997975145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0dfd91%3A0x3c4e5b0e3b327f09!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1667867533458!5m2!1sen!2sus" width="100%" height="560px" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      <QouteSection />
    </div>
  );
};

export default Contact;
