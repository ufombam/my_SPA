import React from 'react';
import NewsCard from '../news-card/News-card';
//import './Top-news.css';

function Categories({newsObject, handleTabChange, getCurrentPost}) {
    return (
        <div className="top-news-body">
            <div className='news-header'>
                Sports
            </div>
            <div className='news-list-container'>
                <NewsCard newsObject={newsObject} handleTabChange={handleTabChange} getCurrentPost={getCurrentPost}/>
            </div>
        </div>
    );
}

export default Categories;