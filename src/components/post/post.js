import React from 'react';
import './post.css';


function Post({currentPost}) {
    return (
        <div className="post-container" >
            <div className='post-header'>
                {currentPost.title}
            </div>
            <div className='post-image'>
                <img alt='news-img' src={`${currentPost.image}`} />
            </div>
            <div className='post-description'>
                <h2>
                    {currentPost.title}
                </h2>
            </div>
            <div className='post-footer'>
                Back to list
            </div>
        </div>
    );
}

export default Post;