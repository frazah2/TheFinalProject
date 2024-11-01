import React, { useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleAnimation from './circlefading';
import 'animate.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { InView } from 'react-intersection-observer'; // Import Intersection Observer
import SeeDestination from '../allcomponents/seeDestina/SeeDestination';
import "react-datepicker/dist/react-datepicker.css";
import Destinations from '../allcomponents/destinations/Destinations';
import AboutUs from '../allcomponents/aboutUs/AboutUs';
import FeedBackSection from '../allcomponents/feedback/FeedBack';
import OurBlogSec from '../allcomponents/ourBlog/OurBlog';
import QouteSection from '../allcomponents/quote/QuoteSec';
import DestiInfo from '../allcomponents/destinationinfosec/DestinationInfoSec';
import SearchingPart from './searching';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Home = () => {
    const [activeOption, setActiveOption] = useState('tours');
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <div className="hero">
                <div className='container'>
                    <div className="row no-gutters slider-text js-fullheight align-items-center col-md-12">
                        <div className='right col-md-7 col-sm-12 paddingsm animate__animated animate__fadeInUp'>
                            <span>Welcome to Pacific</span>
                            <h1 className='mb-4'>Discover Your Favorite Place with Us</h1>
                            <p>Travel to the any corner of the world, without going around in circles</p>
                        </div>
                        <div className='left col-md-5 col-sm-12'>
                            <CircleAnimation />
                            <button onClick={openModal} className='icon-video d-flex align-items-center justify-content-center mb-4'>
                                <FontAwesomeIcon icon={faPlay} className='theiconplay' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='overlayfirst'></div>
            </div>

            <Modal isOpen={isOpen} onRequestClose={closeModal} className="video-modal" overlayClassName="video-modal-overlay">
                <button onClick={closeModal} className="close-modal-button">x</button>
                <iframe src="https://player.vimeo.com/video/45830194?autoplay=1" width="1000px" height="700px" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="Vimeo Video"></iframe>
            </Modal>

            <div className="search-desti">
                <div className="container">
                    <div className="row options">
                        <div className="thebutons">
                            <button className={`option tur ${activeOption === 'tours' ? 'active-tours' : 'inactive'}`} onClick={() => setActiveOption('tours')}>Search Tour</button>
                            <button className={`option hot ${activeOption === 'hotels' ? 'active-hotels' : 'inactive'}`} onClick={() => setActiveOption('hotels')}>Hotel</button>
                        </div>
                    </div>
                </div>

                <SearchingPart />

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
                            <SeeDestination />
                        </section>
                    )}
                </InView>

                <InView triggerOnce>
                    {({ inView, ref }) => (
                        <section ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : ''}>
                            <Destinations />
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
                            <OurBlogSec />
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
        </div>
    );
};

export default Home;
