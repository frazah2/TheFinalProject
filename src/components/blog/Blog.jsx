import React, { useState } from 'react';
import QouteSection from '../allcomponents/quote/QuoteSec';
import OurBlogSec from '../allcomponents/ourBlog/OurBlog';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const [isOverlayOpen, setOverlayOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {id: 1,imgClass: 'fourtblog',title: 'Most Popular Place In This World',description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',date: '11',year: '2020',month: 'September',additionalInfo: 'This world-famous place is known for its beautiful landscapes, vibrant culture, and much more...'},
        { id: 2, imgClass: 'fifstblog', title: 'Most Popular Place In This World', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', date: '11', year: '2020', month: 'September', additionalInfo: 'This world-famous place is known for its beautiful landscapes, vibrant culture, and much more...'},
        { id: 3, imgClass: 'sixtblog', title: 'Most Popular Place In This World', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', date: '11', year: '2020', month: 'September', additionalInfo: 'This world-famous place is known for its beautiful landscapes, vibrant culture, and much more...'},
    ];

    const openOverlay = (post) => {
        setSelectedPost(post);
        setOverlayOpen(true);
    };

    const closeOverlay = () => {
        setOverlayOpen(false);
        setSelectedPost(null);
    };

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
                                <span>Blog &gt;</span>
                            </p>
                            <h1 className='mb-0 aboutheadi'>Blog</h1>
                        </div>
                    </div>
                </div>
            </div>
            <OurBlogSec />

            {/* Blog Posts Section */}
            <div className='blogsection1'>
                <div className="container">
                    <div className="row d-flex w-100">
                        {blogPosts.map((post) => (
                            <div key={post.id} className='col-md-4 cardblog animate__animated animate__fadeInUp'>
                                <div className='blog-entry justify-content-end'>
                                    <div className={`blogimg ${post.imgClass}`}></div>
                                    <div className='d-flex align-items-center mb-4 topp'>
                                        <div className='dayblog'>
                                            <span className='dayblogtext'>{post.date}</span>
                                        </div>
                                        <div className='blogyear'>
                                            <span className='yearblog'>{post.year}</span>
                                            <span className='monthblog'>{post.month}</span>
                                        </div>
                                    </div>
                                    <div className="infoblog">
                                        <h3 className='blogh3'>{post.title}</h3>
                                        <p>{post.description}</p>
                                        <div className='readmorebut' onClick={() => openOverlay(post)}>Read more</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOverlayOpen && selectedPost && (
                <div className="overlayblog">
                    <div className="overlayblog-content">
                        <h2>{selectedPost.title}</h2>
                        <p>{selectedPost.additionalInfo}</p>
                        <button onClick={closeOverlay} className="close-overlay-btn">Close</button>
                    </div>
                </div>
            )}

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

export default Blog;
