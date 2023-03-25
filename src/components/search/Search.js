import React from 'react';
import NewsCard from '../news-card/News-card';
import { useState } from 'react';
//import './Top-news.css';

function Search({newsObject, filterNewsByCountry, handleTabChange}) {
    // const [newNewsList, setNewNewsList] = useState(newsObject);

    // const filterNewsArray = () => {
    //     const inputElement = document.getElementsByTagName('input');
    //     const inputString = inputElement[0].value;
    //     const filteredNews = newsObject.filter(x => {
    //         let srchString = x.content.concat(x.description, x.title, x.source.name);
    //         if (srchString.toLocaleLowerCase().includes(inputString.toLocaleLowerCase()) && x.source.country === country) {
    //             console.log(x)
    //             return x
    //         }
    //     })
    //     setNewNewsList(filteredNews);
    // }
    // console.log()
    
    return (
        <div className="top-news-body">
            <input id='inputString'/>
            <div onClick={() => filterNewsByCountry()}>GO</div>
            <div className='news-list-container'>
                <NewsCard newsObject={newsObject} handleTabChange={handleTabChange}/>
            </div>
        </div>
    );
}

export default Search;