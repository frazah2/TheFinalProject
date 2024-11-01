import './AboutUs.css'
import CircleAnimation from '../../home/circlefading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import Modal from 'react-modal';
import React, { useState } from 'react';

Modal.setAppElement('#root');

const AboutUs = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return(
        <div>
        <div className='topidarea'>
            <div className="overlayaa"></div>
            <div className="container py-md-5">
                <div className="row py-md-5">
                    <div className='col-md d-flex thecircleparent'>
                            <CircleAnimation />
                            <button onClick={openModal} className='icon-video d-flex align-items-center justify-content-center mb-4'>
                                <FontAwesomeIcon icon={faPlay} className='theiconplay' />
                            </button>
            </div>

            <Modal isOpen={isOpen} onRequestClose={closeModal} className="video-modal" overlayClassName="video-modal-overlay">
                <button onClick={closeModal} className="close-modal-button">x</button>
                <iframe src="https://player.vimeo.com/video/45830194?autoplay=1" width="1000px" height="700px" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="Vimeo Video"></iframe>
            </Modal>
                </div>
            </div>
        </div>
        <div className='bottumarea'>
            <div className="container">
                <div className="row d-flex w-100">
                    <div className="col-md-12 aboutinfo">
                        <div className="row">
                            <div className='col-md-6 d-flex align-items-stretch justify-content-center'>
                                <div className='img123 d-flex w-100 align-items-center justify-content-center'></div>
                            </div>
                            <div className='col-md-6 pl-md-5 py-5 wordsrighty  animate__animated animate__fadeInUp'>
                                <div className='row justify-content-start pb-3'>
                                    <div className='col-md-12 head'>
                                        <span>About Us</span>
                                        <h2>Make Your Tour Memorable and Safe With Us</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                        <p className='lolbut'>Book Your Destination</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
};

export default AboutUs;