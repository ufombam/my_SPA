import React from 'react';
import NewsCard from '../news-card/News-card';
import { IComponentProps } from '../../UserInterface';
//import './Top-news.css';
const Categories: React.FC<IComponentProps> = ({
        newsObject,
        getCurrentPost,
        postRouter
    }): JSX.Element => {
    return (
        <>
            <div className="top-news-body">
                <div className='news-header'>
                    Sports
                </div>
                <div className='news-list-container'>
                    <NewsCard newsObject={newsObject} getCurrentPost={getCurrentPost} postRouter={postRouter}/>
                </div>
            </div>
        </>
    );
}

export default Categories;