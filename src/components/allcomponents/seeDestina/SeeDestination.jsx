import './SeeDestination.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import place1 from '../../images/place-1.jpg.webp';
import place2 from '../../images/place-2.jpg.webp';
import place3 from '../../images/place-3.jpg.webp';
import place4 from '../../images/place-5.jpg.webp';
import place5 from '../../images/place-4.jpg.webp';
import { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import 'animate.css';

SwiperCore.use([Navigation, Pagination]);

const SeeDestination = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeDot, setActiveDot] = useState('next');

    const handleSlideChange = (swiper) => {
        const isAtEnd = swiper.isEnd;
        const isAtBeginning = swiper.isBeginning;

        if (isAtEnd) {
            setActiveDot('prev');
        } else if (isAtBeginning) {
            setActiveDot('next');
        } else {
            setActiveDot('next');
        }
    };

    const handleDotClick = (dot) => {
        setActiveDot(dot);
        const slideIndex = dot === 'prev' ? 0 : 1;
        if (swiperInstance) {
            swiperInstance.slideTo(slideIndex);
        }
    };

    return (
        <section id="see-destination-section">
            <div className="container">
                <div className="row w-100">
                    <div className="see-destination-header w-100">
                        <span className="spanhead">Pacific Provide Places</span>
                        <h2 className="heading1">Select Your Destination</h2>
                    </div>
                </div>
            </div>

            <div className="container2 animate__animated animate__fadeInUp">
                <Swiper  onSwiper={setSwiperInstance} loop={true}  grabCursor={true} onSlideChange={handleSlideChange} className="see-destination-swiper" breakpoints={{320: { slidesPerView: 1, spaceBetween: 10 },640: { slidesPerView: 2, spaceBetween: 20 },768: { slidesPerView: 3, spaceBetween: 30 }}}>
                    <SwiperSlide>
                        <img src={place1} alt="Destination 1" />
                        <div className='destination-text'>
                            <h3>Phillippines</h3>
                            <span>8 Tours</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={place2} alt="Destination 2" />
                        <div className='destination-text'>
                            <h3>Canada</h3>
                            <span>2 Tours</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={place3} alt="Destination 3" />
                        <div className='destination-text'>
                            <h3>Thailand</h3>
                            <span>5 Tours</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={place5} alt="Destination 4" />
                        <div className='destination-text'>
                            <h3>Australia</h3>
                            <span>5 Tours</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={place4} alt="Destination 5" />
                        <div className='destination-text'>
                            <h3>Greece</h3>
                            <span>7 Tours</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="see-destination-navigation">
                <div className={`see-dot ${activeDot === 'prev' ? 'active' : ''}`} onClick={() => handleDotClick('prev')}></div> 
                <div className={`see-dot ${activeDot === 'next' ? 'active' : ''}`} onClick={() => handleDotClick('next')}></div>
            </div>
        </section>
    );
};

export default SeeDestination;
