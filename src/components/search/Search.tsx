import React, { useState } from 'react';
import NewsCard from '../news-card/News-card';
import './search.css';
import { IComponentProps, ICountryNews } from '../../ComponentsInterface';
//import './Top-news.css';

const Search: React.FC<IComponentProps> = ({
    newsObject,
    getCurrentPost,
    postRouter,
    country
}
): JSX.Element => {
    const [searchedNews, setSearchedNews] = useState <ICountryNews[]>([
        {
          source: {
            id: '',
            name: '',
        },
        author:'',
        title: '',
        description: '',
        url: '',
        urlToImage: '',
        publishedAt: '',
        category: '',
        content: ''
        }
    ]);

    //Function to filter news search input
    const newsFilter = (): void => {
        const inputElement = document.getElementsByTagName('input') as HTMLCollectionOf<HTMLInputElement>;
        const inputString: string = inputElement[0].value;
        let filteredNews: ICountryNews[] = newsObject.filter(data => {
        let searchString: string = data.content.concat(data.description, data.title, data.source.name);
        return searchString.toLocaleLowerCase().includes(inputString.toLocaleLowerCase())
        })
        setSearchedNews(filteredNews)
    }
    return ( 
        <div className="top-news-body">
            <div className='news-header'>
                Search Top news from {`${country === 'GB' ? "Great Britain" : country === 'US' ? "United States" : "US & UK"}`}:
            </div>
            <input id='inputString' placeholder='search term'/>
            <div onClick={() => newsFilter()}>GO</div>
            {searchedNews.length <= 2 ? <div className='top-news-body'></div> :
            <div className='news-list-container'>
                <NewsCard newsObject={searchedNews} getCurrentPost={getCurrentPost} postRouter={postRouter}/>
            </div>}
        </div>
    );
}

export default Search;