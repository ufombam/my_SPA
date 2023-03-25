import React from 'react';
import NewsCard from '../news-card/News-card';
import './top-news.css';

function TopNews({newsObject}) {
    return (
        <div className="top-news-body">
            <div className='news-header'>
                Top news from Great Britain:
            </div>
            <div className='news-list-container'>
                <NewsCard newsObject={newsObject}/>
            </div>
        </div>
    );
}

export default TopNews;
