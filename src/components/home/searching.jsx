
import DatePicker from 'react-datepicker';
import { faMagnifyingGlass, faChevronDown, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


const SearchingPart = () =>{
    
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    return(
        <div className="container">
        <div className="row search-section w-100 fiver">
            <div className="searand bordr">
                <label className="label1to4" htmlFor="">Search Place</label>
                <input type="text" placeholder="Search Place" />
                <div className='Icon'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>

            <div className="searand">
                <label className="label1to4" htmlFor="checkin">Check-in date</label>
                
                <div className='Icon'>
                <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} placeholderText="Check In Date" className="date-input" dateFormat="MM/dd/yyyy" />
            </div>

            <div className="searand">
                <label className="label1to4" htmlFor="checkout">Check-out date</label>
                <div className='Icon'>
                 <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} placeholderText="Check Out Date" className="date-input" dateFormat="MM/dd/yyyy" />
            </div>
            <div className="searand">
                <label className="label1to4" htmlFor="priceLimit">Price Limit</label>
                <div className='Icon'>
                <FontAwesomeIcon icon={faChevronDown}/>
                </div>
                <select id="priceLimit" className="form-control">
                    <option value="100">$100</option>
                    <option value="500">$500</option>
                    <option value="1000">$1,000</option>
                    <option value="5000">$5,000</option>
                    <option value="10000">$10,000</option>
                    <option value="50000">$50,000</option>
                    <option value="100000">$100,000</option>
                    <option value="500000">$500,000</option>
                    <option value="1000000">$1,000,000</option>
                    <option value="2000000">$2,000,000</option>
                </select>
            </div>

            <div className="searand2">SEARCH</div>
        </div>
    </div>
    )
};

export default SearchingPart;