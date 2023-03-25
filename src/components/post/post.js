import React from 'react';
import './post.css';


function Post() {
    return (
        <div className="post-container" >
            <div className='post-header'>
                Title
            </div>
            <div className='post-image'>
                <img alt='news-img' src='' />
            </div>
            <div className='post-description'>
                <h2>
                    CONTENT
                </h2>
            </div>
            <div className='post-footer'>
                Back to list
            </div>
        </div>
    );
}

export default Post;