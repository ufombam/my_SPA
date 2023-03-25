import React from 'react';
import NewsCard from '../news-card/News-card';
//import './Top-news.css';

function Search({handleNewsSearch, filteredNewsObject, input, controlledInput}) {
    return (
        <div className="top-news-body">
            <input id='inputString'/>
            <div onClick={handleNewsSearch}>GO</div>
            <div className='news-list-container'>
                <NewsCard newsObject={filteredNewsObject}/>
            </div>
        </div>
    );
}

export default Search;