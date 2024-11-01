import React from 'react';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer'; // Import Intersection Observer
import './AboutSec.css';
import AboutUs from '../allcomponents/aboutUs/AboutUs';
import FeedBackSection from '../allcomponents/feedback/FeedBack';
import QouteSection from '../allcomponents/quote/QuoteSec';
import DestiInfo from '../allcomponents/destinationinfosec/DestinationInfoSec';

const About = () => {
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
                <span>About Us &gt;</span>
              </p>
              <h1 className='mb-0 aboutheadi'>About Us</h1>
            </div>
          </div>
        </div>
      </div>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <section ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''}>
            <DestiInfo />
          </section>
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <section ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''}>
            <AboutUs />
          </section>
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <section ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''}>
            <FeedBackSection />
          </section>
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <section ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''}>
            <QouteSection />
          </section>
        )}
      </InView>
    </div>
  );
};

export default About;
