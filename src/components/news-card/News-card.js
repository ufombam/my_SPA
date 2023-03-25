import React from 'react';
import './news-card.css';


function NewsCard({newsObject, handleTabChange, getCurrentPost}) {

    return (
            newsObject.map((x, i) => 
                <div className="news-card" key={i}>
                    <div className='card-header'>
                        {x.title}
                    </div>
                    <div className='card-image'>
                            <img alt='news-img' src={`${x.urlToImage}`} />
                    </div>
                    <div className='card-description'>
                        {x.description}
                    </div>
                    <div className='card-footer' 
                        onClick={() => {handleTabChange("post"); getCurrentPost({
                            title: x.title,
                            image: x.urlToImage,
                            description: x.description
                        })}}>
                        more
                    </div>
                </div>
            )
        
    );
}

export default NewsCard;
