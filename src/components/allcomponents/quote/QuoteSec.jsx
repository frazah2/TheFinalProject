import React from 'react';
import { Link } from 'react-router-dom';
import './QuoteSec.css';

const QuoteSection = () => {
    return (
        <div className="qoutesecdiv">
            <div className="container conti">
                <div className="row justify-content-center w-100 rowquote">
                    <div className="col-md-12 text-center">
                        <div className="quoteimg">
                            <div className="overlayquote"></div>
                            <h2>We Are Pacific A Travel Agency</h2>
                            <p>We can manage your dream building A small river named Duden flows by their place</p>
                            <Link to="/contact" className='quotebutton'>Ask For A Quote</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteSection;
