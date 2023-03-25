import React from 'react';
import './news-card.css';


function Post() {
    return (
        <div className="news-card" >
            <div className='card-header'>
            </div>
            <div className='card-image'>
                <img alt='news-img' src='' />
            </div>
            <div className='card-description'>
            </div>
            <div className='card-footer'>
                more
            </div>
        </div>
    );
}

export default Post;