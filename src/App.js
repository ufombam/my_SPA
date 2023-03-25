import React from 'react';
import { useState } from 'react';
import './App.css';
import TopNews from './components/top-news/Top-news';
import Search from './components/search/Search';
import Categories from './components/categories/Categories';

function App() {
  const [route, setRoute] = useState("");
  const handleTabChange = e => setRoute(e)

  return (
    <div className="App">
      <div className='nav'>
        <div className='categories'>
          <div className='nav-items' onClick={() => handleTabChange("top-news")}>Top News</div>
          <div className='nav-items' onClick={() => handleTabChange("categories")}>Categories</div>
          <div className='nav-items' onClick={() => handleTabChange("search")}>Search</div>
        </div>
        <div className='countries'>
          <div className='country-items'>US</div>
          <div className='country-items'>GB</div>
        </div>
      </div>
      <div className='app-body'>
        {
          route === "categories" ? <Categories /> : route === "search" ? <Search /> : <TopNews />
        }
      </div>
    </div>
  );
}

export default App;
