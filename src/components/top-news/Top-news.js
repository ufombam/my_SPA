import React from 'react';
import NewsCard from '../news-card/News-card';
import './top-news.css';

function TopNews({newsObject, country, handleTabChange, getCurrentPost, postRouter}) {
    return (
        <div className="top-news-body">
            <div className='news-header'>
                Top news from {`${country === 'GB' ? "Great Britain" : "United States"}`}:
            </div>
            <div className='news-list-container'>
                <NewsCard newsObject={newsObject} handleTabChange={handleTabChange} getCurrentPost={getCurrentPost} postRouter={postRouter}/>
            </div>
        </div>
    );
}

export default TopNews;
