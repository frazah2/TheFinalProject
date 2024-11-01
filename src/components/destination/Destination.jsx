import React from 'react';
import Destinations from '../allcomponents/destinations/Destinations';
import QouteSection from '../allcomponents/quote/QuoteSec';
import { Link } from 'react-router-dom';
import './Destination.css';
import { InView } from 'react-intersection-observer';

const Destination = () => {
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
                <span>Tour List &gt;</span>
              </p>
              <h1 className='mb-0 aboutheadi'>Tours List</h1>
            </div>
          </div>
        </div>
      </div>

      <Destinations />

      <section id="destinations2">
        <div className="container">
          <div className="row w-100">
            {[7, 8, 9].map((num, index) => (
              <InView key={index} triggerOnce>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={`col-md-4 mb-4 p-0 ${
                      inView ? 'animate__animated animate__fadeInUp' : ''
                    }`}
                  >
                    <div className="destination-card">
                      <div className={`thedestiimg${num}`}>
                        <span className='personprice'>$550/person</span>
                      </div>
                      <div className='p-4 carddescrip'>
                        <span>{num + 1} Days Tour</span>
                        <h3>
                          <a href="">Banaue Rice Terraces</a>
                        </h3>
                        <div className="location-icon">
                          <p>Banaue, Ifugao, Philippines</p>
                        </div>
                        <ul>
                          <li><div className="iconn fir"></div>2</li>
                          <li><div className="iconn seco"></div>3</li>
                          <li><div className="iconn fouree"></div>Near Mountain</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </InView>
            ))}
          </div>
        </div>
      </section>

      <ul className='thenumbers text-center thepaddingbot'>
        <li><a href="">&lt;</a></li>
        <li className='activlihotelsnumber'>1</li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
        <li><a href="">&gt;</a></li>
      </ul>

      <QouteSection />
    </div>
  );
};

export default Destination;
