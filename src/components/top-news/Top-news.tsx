import React from 'react';
import NewsCard from '../news-card/News-card';
import './top-news.css';
import { IComponentProps } from '../../ComponentsInterface';
//import './Top-news.css';

const TopNews: React.FC<IComponentProps> = ({
        newsObject,
        country,
        getCurrentPost,
        postRouter
    }): JSX.Element => {
    return (
        <div className="top-news-body">
            <div className='news-header'>
                Top news from {`${country === 'GB' ? "Great Britain" : "United States"}`}:
            </div>
            <div className='news-list-container'>
                <NewsCard newsObject={newsObject} getCurrentPost={getCurrentPost} postRouter={postRouter}/>
            </div>
        </div>
    );
}

export default TopNews;
