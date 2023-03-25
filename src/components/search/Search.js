import React from 'react';
import NewsCard from '../news-card/News-card';
//import './Top-news.css';

function Search({handleNewsSearch, filteredNewsObject, input}) {
    return (
        <div className="top-news-body">
            <input id='inputString' value={input} onInput={e => setInput(e.target.value)}/>
            <div onClick={handleNewsSearch}>GO</div>
            <div className='news-list-container'>
                <NewsCard newsObject={filteredNewsObject}/>
            </div>
        </div>
    );
}

export default Search;