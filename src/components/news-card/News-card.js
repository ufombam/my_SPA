import React from 'react';
import './news-card.css';


function NewsCard() {
    const newsObject = [
        {
            source: {
            id: null,
            "name": "YouTube"
            },
            author: null,
            title: "Kansas State vs. Michigan State",
            description: "Kansas State survived a thrilling OT showdown with ...",
            url: "https://www.youtube.com/watch?v=3eC14g8pYM0",
            urlToImage: "https://i.ytimg.com/vi/3eC14g8pYM0/maxresdefault.jpg",
            publishedAt: "2023-03-24T02:53:03Z",
            content: "lorem adfasdfasdh ahdfaksdfha  asdhfasdfjasd asdvasdjhasdfjhasdfjhad  asdfajsdfas jjasdf asdfasdf today"
        },
        {
            source: {
            id: null,
            "name": "YouTube"
            },
            author: null,
            title: "Kansas State vs. Michigan State",
            description: "Kansas State survived a thrilling OT showdown with ...",
            url: "https://www.youtube.com/watch?v=3eC14g8pYM0",
            urlToImage: "https://i.ytimg.com/vi/3eC14g8pYM0/maxresdefault.jpg",
            publishedAt: "2023-03-24T02:53:03Z",
            content: "lorem adfasdfasdh ahdfaksdfha  asdhfasdfjasd asdvasdjhasdfjhasdfjhad  asdfajsdfas jjasdf asdfasdf today"
        },
        {
            source: {
            id: null,
            "name": "YouTube"
            },
            author: null,
            title: "Kansas State vs. Michigan State",
            description: "Kansas State survived a thrilling OT showdown with ...",
            url: "https://www.youtube.com/watch?v=3eC14g8pYM0",
            urlToImage: "https://i.ytimg.com/vi/3eC14g8pYM0/maxresdefault.jpg",
            publishedAt: "2023-03-24T02:53:03Z",
            content: "lorem adfasdfasdh ahdfaksdfha  asdhfasdfjasd asdvasdjhasdfjhasdfjhad  asdfajsdfas jjasdf asdfasdf today"
        },
        {
            source: {
            id: null,
            "name": "YouTube"
            },
            author: null,
            title: "Kansas State vs. Michigan State",
            description: "Kansas State survived a thrilling OT showdown with ...",
            url: "https://www.youtube.com/watch?v=3eC14g8pYM0",
            urlToImage: "https://i.ytimg.com/vi/3eC14g8pYM0/maxresdefault.jpg",
            publishedAt: "2023-03-24T02:53:03Z",
            content: "lorem adfasdfasdh ahdfaksdfha  asdhfasdfjasd asdvasdjhasdfjhasdfjhad  asdfajsdfas jjasdf asdfasdf today"
        }
    ]
    return (
            newsObject.map((x, i) => 
                <div className="news-card" key={i}>
                    <div className='card-header'>
                        {x.title}
                    </div>
                    <div className='card-image'>
                            <img alt='news-img' src={`${x.urlToImage}`} />
                    </div>
                    <div className='card-description'>
                        {x.description}
                    </div>
                    <div className='card-footer'>
                        more
                    </div>
                </div>
            )
        
    );
}

export default NewsCard;
