import React from 'react';
import { InView } from 'react-intersection-observer'; 
import './Destinations.css';
import 'animate.css';

const Destinations = () => {
    return (
        <section id="destinations">
            <div className="container">
                <div className="row w-100">
                    <div className="heading-section">
                        <span>Destination</span>
                        <h3>Tour Destination</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row w-100">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <InView key={num} triggerOnce>
                            {({ inView, ref }) => (
                                <div
                                    ref={ref}
                                    className={`col-md-4 mb-4 p-0 ${inView ? 'animate__animated animate__fadeInUp' : ''}`}
                                >
                                    <div className="destination-card">
                                        <div className={`thedestiimg${num}`}>
                                            <span className='personprice'>$550/person</span>
                                        </div>
                                        <div className='p-4 carddescrip'>
                                            <span>{`${6 + num} Days Tour`}</span>
                                            <h3>
                                                <a href="">Banaue Rice Terraces</a>
                                            </h3>
                                            <div className="location-icon">
                                                <p>Banaue, Ifugao, Philippines</p>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="iconn fir"></div>2
                                                </li>
                                                <li>
                                                    <div className="iconn seco"></div>3
                                                </li>
                                                <li>
                                                    <div className="iconn thir"></div>Near Mountain
                                                </li>
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
    );
};

export default Destinations;
