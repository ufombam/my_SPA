import React from 'react';
import NewsCard from '../news-card/News-card';
//import './Top-news.css';

function Search({handleNewsSearch, filteredNewsObject}) {
    return (
        <div className="top-news-body">
            <form action="#" onSubmit={handleNewsSearch}>
                <input id='inputString'/>
                <button type='submit'/>
            </form>
            <div className='news-list-container'>
                <NewsCard newsObject={filteredNewsObject}/>
            </div>
        </div>
    );
}

export default Search;