import '../../home/Home.css'
import ParaglidingIcon from '../../images/paragliding (1).png'
import map from '../../images/map-locator.png'
import guide from '../../images/tour-guide.png'
import destinatio from '../../images/destination.png'

const DestiInfo = () => {
    return(
        <div className="container thedestiinfo">
                    <div className="row d-flex">
                        <div className='col-md-6 col-sm-12 order-md-last pl-md-5 d-flex align-items-center thewords'>

                            <div className="w-100">
                                <span className='spanhead'>Welcome to Pacific</span>
                                <h2 className='mb-4 heading1'>It's time to start your adventure</h2>
                                <p className='headp'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <p className='headp'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <button className='btn btn-primary py-3 px-4 mb-5'>Search Destination</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="row">
                                <div className='col-sm-12 col-md-12 col-lg-6  d-flex align-self-stretch justify-content-center outerplace animate__animated animate__fadeInUp'>
                                    <div className='services1 services-1 color-1 d-block img'>
                                        <div className='icon d-flex align-items-center justify-content-center'>
                                            <img className='parag' src={ParaglidingIcon} alt="" />
                                        </div>
                                        <div className='mediawords'>
                                            <h3 className='heading mb-3'>Activities</h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-6 d-flex align-self-stretch justify-content-center outerplace animate__animated animate__fadeInUp'>
                                    <div className='services1 services-2 color-1 d-block img'>
                                        <div className='icon d-flex align-items-center justify-content-center'>
                                            <img className='parag' src={destinatio} alt="" />
                                        </div>
                                        <div className='mediawords'>
                                            <h3 className='heading mb-3'>Travel Arrangements</h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-6 d-flex align-self-stretch justify-content-center outerplace animate__animated animate__fadeInUp'>
                                    <div className='services1 services-3 color-1 d-block img'>
                                        <div className='icon d-flex align-items-center justify-content-center'>
                                            <img className='parag' src={guide} alt="" />
                                        </div>
                                        <div className='mediawords'>
                                            <h3 className='heading mb-3'>Private Guide</h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-6 d-flex align-self-stretch justify-content-center outerplace animate__animated animate__fadeInUp'>
                                    <div className='services1 services-4 color-1 d-block img'>
                                        <div className='icon d-flex align-items-center justify-content-center'>
                                            <img className='parag' src={map} alt="" />
                                        </div>
                                        <div className='mediawords'>
                                            <h3 className='heading mb-3'>Location Manager</h3>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
};

export default DestiInfo;