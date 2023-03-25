import React from 'react';
import NewsCard from '../news-card/News-card';
import './top-news.css';

function TopNews({newsObject, country, handleTabChange}) {
    return (
        <div className="top-news-body">
            <div className='news-header'>
                Top news from {`${country === 'GB' ? "Great Britain" : "United States"}`}:
            </div>
            <div className='news-list-container'>
                <NewsCard newsObject={newsObject} handleTabChange={handleTabChange}/>
            </div>
        </div>
    );
}

export default TopNews;
