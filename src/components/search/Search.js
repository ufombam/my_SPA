import React from 'react';
import NewsCard from '../news-card/News-card';
//import './Top-news.css';

function Search({newsObject, filterNewsByCountry, handleTabChange, getCurrentPost}) {
    return (
        <div className="top-news-body">
            <input id='inputString'/>
            <div onClick={() => filterNewsByCountry()}>GO</div>
            <div className='news-list-container'>
                <NewsCard newsObject={newsObject} handleTabChange={handleTabChange} getCurrentPost={getCurrentPost}/>
            </div>
        </div>
    );
}

export default Search;