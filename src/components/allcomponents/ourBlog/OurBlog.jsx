import React, { useState } from 'react';
import './OurBlog.css';

const OurBlogSec = () => {
    const [isOverlayOpen, setOverlayOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {id: 1,imgClass: 'firstblog',title: 'Most Popular Place In This World',description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',date: '11',year: '2020',month: 'September',additionalInfo: 'Here is some additional information about this amazing place, including its history, popular activities, and tips for visiting.'},
        { id: 2, imgClass: 'secblog', title: 'Most Popular Place In This World', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', date: '11', year: '2020', month: 'September', additionalInfo: 'This post delves into hidden gems across the globe, giving insights into off-the-beaten-path destinations.'},
        { id: 3, imgClass: 'thirblog', title: 'Most Popular Place In This World', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.', date: '11', year: '2020', month: 'September', additionalInfo: 'An in-depth look at adventure spots that every thrill-seeker should visit, with tips on how to plan the ultimate trip.'}];

    const openOverlay = (post) => {
        setSelectedPost(post);
        setOverlayOpen(true);
    };

    const closeOverlay = () => {
        setOverlayOpen(false);
        setSelectedPost(null);
    };

    return (
        <div className='blogsection'>
            <div className="container">
                <div className="row justify-content-center pb-4 w-100">
                    <div className="col-md-12 text-center textblog">
                        <span className='ortext'>Our Blog</span>
                        <h2 className='mb-4 h2fortext'>Recent Post</h2>
                    </div>
                </div>
            </div>
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

            {isOverlayOpen && selectedPost && (
                <div className="overlayblog">
                    <div className="overlayblog-content">
                        <h2>{selectedPost.title}</h2>
                        <p>{selectedPost.additionalInfo}</p>
                        <button onClick={closeOverlay} className="close-overlay-btn">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OurBlogSec;
