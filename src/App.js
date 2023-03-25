import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import TopNews from './components/top-news/Top-news';
import Search from './components/search/Search';
import Categories from './components/categories/Categories';

function App() {
  const [route, setRoute] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [countryNews, setCountryNews] = useState([]);
  const [country, setCountry] = useState('GB');
  const handleTabChange = e => setRoute(e);
  const rawNews = [
    {
        source: {
          id: null,
          name: "Facebook",
          country: "US"
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
          name: "YouTube",
          country: "US"
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
          name: "Facebook",
          country: "GB"
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
          name: "YouTube",
          country: "GB"
        },
        author: null,
        title: "Kansas State vs. Michigan State",
        description: "Kansas State survived a thrilling OT showdown with ...",
        url: "https://www.youtube.com/watch?v=3eC14g8pYM0",
        urlToImage: "https://i.ytimg.com/vi/3eC14g8pYM0/maxresdefault.jpg",
        publishedAt: "2023-03-24T02:53:03Z",
        content: "lorem adfasdfasdh ahdfaksdfha  asdhfasdfjasd asdvasdjhasdfjhasdfjhad  asdfajsdfas jjasdf asdfasdf today"
    }
  ];



  //handles switching of country and filtering of country specific news
  const handleCountryChange = country => {
    setCountry(country);
  };

  //Filter the raw news array depending on the country selected
  const filterNewsByCountry = () => {
    let countrySpecificNews = rawNews.filter(data => data.source.country === country);
    return setCountryNews(countrySpecificNews);
  }

//Search news and filter handler for Search Page
  const handleNewsSearch = (e) => {
    e.preventDefault();
    const { inputString } = e.target.elements;
    //filter news for search page
    let filteredNewsArray = rawNews.filter(x => {
      let srchString = x.content.concat(x.description, x.title, x.source.name);
      if (srchString.toLocaleLowerCase().includes(inputString.value.toLocaleLowerCase()) && x.source.country === country) {
        return x
      }
    })
    return setFilteredNews(filteredNewsArray)
  }


  return (
    <div className="App">
      <div className='nav'>
        <div className='categories'>
          <div className='nav-items' onClick={() => handleTabChange("top-news")}>Top News</div>
          <div className='nav-items' onClick={() => handleTabChange("categories")}>Categories</div>
          <div className='nav-items' onClick={() => handleTabChange("search")}>Search</div>
        </div>
        <div className='countries'>
          <div className='country-items' onClick={() => handleCountryChange("US")}>US</div>
          <div className='country-items' onClick={() => handleCountryChange("GB")}>GB</div>
        </div>
      </div>
      <div className='app-body'>
        {
          route === "categories" ? <Categories newsObject={rawNews}/> : route === "search" ? <Search newsObject={rawNews} handleNewsSearch={handleNewsSearch} filteredNewsObject={filteredNews}/> : <TopNews newsObject={rawNews}/>
        }
      </div>
    </div>
  );
}

export default App;
