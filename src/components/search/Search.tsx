import React from 'react';
import NewsCard from '../news-card/News-card';
import './search.css';
import { IComponentProps } from '../../ComponentsInterface';
//import './Top-news.css';

const Search: React.FC<IComponentProps> = ({
    newsObject,
    getCurrentPost,
    postRouter,
    filterNewsByCountry,
    country
}
): JSX.Element => {
    return (
        <div className="top-news-body">
            <div className='news-header'>
                Search Top news from {`${country === 'GB' ? "Great Britain" : "United States"}`}:
            </div>
            <input id='inputString' placeholder='search term'/>
            <div onClick={() => filterNewsByCountry()}>GO</div>
            <div className='news-list-container'>
                <NewsCard newsObject={newsObject} getCurrentPost={getCurrentPost} postRouter={postRouter}/>
            </div>
        </div>
    );
}

export default Search;