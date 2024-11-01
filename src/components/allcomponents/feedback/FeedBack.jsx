import './FeedBack.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 


SwiperCore.use([Navigation, Pagination]);

const FeedBackSection = () => {
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

  const handleDotClick = (index) => {
    setActiveDot(index);
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <div className="feedback-section">
      <div className="feedback-overlay"></div>
      <div className="container feedback-container">
        <div className="row justify-content-center pb-4 w-100">
          <div className="col-md-7 text-center heading-section heading-section-white feedback-heading">
            <span>Testimonial</span>
            <h2>Tourist Feedback</h2>
          </div>
        </div>
      </div>
      <div className="container feedback-swiper-container w-100">
         <div className="row w-100 hshdsd">
           <div className="col-md-12">
           <Swiper onSwiper={setSwiperInstance}  slidesPerView={3}  spaceBetween={30}  loop={true}  grabCursor={true} onSlideChange={handleSlideChange} pagination={{ clickable: true }} className="feedback-swiper"><SwiperSlide>
              <div className="feedback-text animate__animated animate__fadeInUp">
                    <p className='mb-3 d-flex'>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                    </p>
                    <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='d-flex align-items-center'>
                      <div className='userimagefeedbak pers1'></div>
                      <div className='pl-3 theposionandname'>
                        <p className='feedbackname'>Roger Scott</p>
                        <span className='feedbackpositions'>Marketing Maneger</span>
                      </div>
                    </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feedback-text animate__animated animate__fadeInUp">
              <p className='mb-3 d-flex'>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                    </p>
                    <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='d-flex align-items-center'>
                      <div className='userimagefeedbak pers2'></div>
                      <div className='pl-3 theposionandname'>
                        <p className='feedbackname'>Roger Scott</p>
                        <span className='feedbackpositions'>Marketing Maneger</span>
                      </div>
                    </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feedback-text animate__animated animate__fadeInUp">
              <p className='mb-3 d-flex'>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                    </p>
                    <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='d-flex align-items-center'>
                      <div className='userimagefeedbak pers3'></div>
                      <div className='pl-3 theposionandname'>
                        <p className='feedbackname'>Roger Scott</p>
                        <span className='feedbackpositions'>Marketing Maneger</span>
                      </div>
                    </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feedback-text animate__animated animate__fadeInUp">
              <p className='mb-3 d-flex'>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                    </p>
                    <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='d-flex align-items-center'>
                      <div className='userimagefeedbak pers1'></div>
                      <div className='pl-3 theposionandname'>
                        <p className='feedbackname'>Roger Scott</p>
                        <span className='feedbackpositions'>Marketing Maneger</span>
                      </div>
                    </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feedback-text animate__animated animate__fadeInUp">
              <p className='mb-3 d-flex'>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                      <div className="starticon"></div>
                    </p>
                    <p className='mb-4 thewirds'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='d-flex align-items-center'>
                      <div className='userimagefeedbak pers2'></div>
                      <div className='pl-3 theposionandname'>
                        <p className='feedbackname'>Roger Scott</p>
                        <span className='feedbackpositions'>Marketing Maneger</span>
                      </div>
                    </div>
              </div>
            </SwiperSlide>
          </Swiper>
           </div>
         </div>
        </div>
      
    </div>
  );
};

export default FeedBackSection;
