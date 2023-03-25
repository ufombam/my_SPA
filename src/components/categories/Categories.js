import React from 'react';
import NewsCard from '../news-card/News-card';
//import './Top-news.css';

function Categories() {
    return (
        <div className="categories-body">
            <div className='news-header'>
                Sports
            </div>
            <div className=''>
                <NewsCard />
            </div>
        </div>
    );
}

export default Categories;