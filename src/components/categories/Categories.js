import React from 'react';
import NewsCard from '../news-card/News-card';
//import './Top-news.css';

function Categories({newsObject}) {
    return (
        <div className="top-news-body">
            <div className='news-header'>
                Sports
            </div>
            <div className='news-list-container'>
                <NewsCard newsObject={newsObject}/>
            </div>
        </div>
    );
}

export default Categories;