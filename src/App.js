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
  const [input, setInput] = useState('');
  const handleTabChange = e => setRoute(e);
  const rawNews = [
    {
        source: {
          id: null,
          name: "Facebook",
          country: "US"
        },
        author: null,
        title: "United State vs. Michigan State",
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
        title: "Newyork State vs. Michigan State",
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

  useEffect(() => {
    filterNewsByCountry();
  }, [country])

  //handles switching of country and filtering of country specific news
  const handleCountryChange = country => {
    setCountry(country);
    filterNewsByCountry();
    handleNewsSearch();
  };

  //Filter the raw news array depending on the country selected
  const filterNewsByCountry = () => {
    let countrySpecificNews = rawNews.filter(data => data.source.country === country);
    return setCountryNews(countrySpecificNews);
  }

//Search news and filter handler for Search Page
  const handleNewsSearch = () => {
    const inputElement = document.getElementsByTagName('input');
    const inputString = inputElement[0].value;
    //filter news for search page
    let filteredNewsArray = rawNews.filter(x => {
      let srchString = x.content.concat(x.description, x.title, x.source.name);
      if (srchString.toLocaleLowerCase().includes(inputString.toLocaleLowerCase()) && x.source.country === country) {
        return x
      }
    })
    return setFilteredNews(filteredNewsArray)
  }

  const controlledInput = (e) => setInput(e.target.value);


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
          route === "categories" ? <Categories newsObject={countryNews}/> : route === "search" ? <Search newsObject={countryNews} handleNewsSearch={handleNewsSearch} filteredNewsObject={filteredNews} input={input}/> : <TopNews newsObject={countryNews} country={country}/>
        }
      </div>
    </div>
  );
}

export default App;
