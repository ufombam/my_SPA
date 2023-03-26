import React from 'react';
import NewsCard from '../news-card/News-card';
import './search.css';

function Search({newsObject, filterNewsByCountry, handleTabChange, getCurrentPost, postRouter, country}) {
    return (
        <div className="top-news-body">
            <div className='news-header'>
                Search Top news from {`${country === 'GB' ? "Great Britain" : "United States"}`}:
            </div>
            <input id='inputString' placeholder='search term'/>
            <div onClick={() => filterNewsByCountry()}>GO</div>
            <div className='news-list-container'>
                <NewsCard newsObject={newsObject} handleTabChange={handleTabChange} getCurrentPost={getCurrentPost} postRouter={postRouter}/>
            </div>
        </div>
    );
}

export default Search;