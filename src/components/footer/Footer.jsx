import './Footer.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row mb-5">
                    <div className='col-md pt-5'>
                        <div className='pt-md-5 mb-4 ml-md-5 isider'>
                            <h2>About</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul className='animate__animated animate__fadeInUp'>
                                <li className='socualsli'>
                                    <a className='socuals' href="">
                                        <div className="socio1"></div>
                                    </a>
                                </li>
                                <li className='socualsli'>
                                    <a className='socuals' href="">
                                    <div className="socio2"></div>
                                    </a>
                                </li>
                                <li className='socualsli'>
                                     <a className='socuals' href="">
                                     <div className="socio3"></div>
                                     </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md pt-5 border-left thebordering'>
                        <div className='pt-md-5 mb-4 ml-md-5 isider'>
                            <h2>Information</h2>
                            <ul>
                                <li><a href="">Online Enquiry</a></li>
                                <li><a href="">General Enquiries</a></li>
                                <li><a href="">Booking Conditions</a></li>
                                <li><a href="">Privacy and Policy</a></li>
                                <li><a href="">Refund Policy</a></li>
                                <li><a href="">Call Us</a></li>
                            </ul>
                           
                        </div>
                    </div>
                    <div className='col-md pt-5 border-left thebordering'>
                        <div className='pt-md-5 mb-4 ml-md-5 isider'>
                        <h2>Experience</h2>
                            <ul>
                                <li><a href="">Adventure</a></li>
                                <li><a href="">Hotel and Restaurant</a></li>
                                <li><a href="">Hotel and Restaurant</a></li>
                                <li><a href="">Nature</a></li>
                                <li><a href="">Camping</a></li>
                                <li><a href="">Party</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md pt-5 border-left thebordering'>
                        <div className='pt-md-5 mb-4 ml-md-5 isider thefooterlocati'>
                            <h2>Have a Questions?</h2>
                            <ul>
                                <li>
                                    <div className='thewordsfootloca'>203 Fake St. Mountain View, San Francisco, California, USA</div>
                                    <div className="theiconforlast"></div>
                                </li>
                                <li>
                                    <a href=""><span><p>+2 392 3929 210</p></span>
                                        <div className="theiconforlast2"></div>
                                    </a>
                                </li>
                                <li>
                                    <a href=""><span><p>info@yourdomain.com</p></span>
                                        <div className="theiconforlast3"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='col-md-12 text-center lastword'>
                        <p>Copyright ©2024 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by <span className='colo'>Colorlib</span></p>
                    </div>
        </div>
    )
};

export default Footer;