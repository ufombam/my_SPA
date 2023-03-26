import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TopNews from './components/top-news/Top-news';
import Search from './components/search/Search';
import Categories from './components/categories/Categories';
import Post from './components/post/post';


function App() {
  const [route, setRoute] = useState("top-news");
  const [value, setValue] = useState('one');
  const [alignment, setAlignment] = useState('GB');
  const [countryNews, setCountryNews] = useState([]);
  const [country, setCountry] = useState('GB');
  const [currentPost, setCurrentPost] = useState({});
  const [postRef, setPostRef] = useState('');
  
  //get current route and reset postRef
  const handleTabChange = e => {setRoute(e); setPostRef('')};

  const rawNews = [
    {
        source: {
          id: null,
          name: "Facebook",
          country: "US"
        },
        author: null,
        category: "sports",
        title: "United State vs. Michigan State",
        description: "Kansas State survived a thrilling OT showdown with ...",
        url: "https://www.youtube.com/watch?v=3eC14g8pYM0",
        urlToImage: "https://i.ytimg.com/vi/3eC14g8pYM0/maxresdefault.jpg",
        publishedAt: "2023-03-24T02:53:03Z",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum uisquam eius sed odit fugiat iusto fuga praesentium option eaque rerum! Provident similique accusantium nemo autem. Veritatis aecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit"
    },
    {
        source: {
          id: null,
          name: "YouTube",
          country: "US"
        },
        author: null,
        category: "sports",
        title: "Newyork State vs. Michigan State",
        description: "Kansas State survived a thrilling OT showdown with ...",
        url: "https://www.youtube.com/watch?v=3eC14g8pYM0",
        urlToImage: "https://i.ytimg.com/vi/3eC14g8pYM0/maxresdefault.jpg",
        publishedAt: "2023-03-24T02:53:03Z",
        content:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum uisquam eius sed odit fugiat iusto fuga praesentium option eaque rerum! Provident similique accusantium nemo autem. Veritatis aecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit"
    },
    {
        source: {
          id: null,
          name: "Youtube",
          country: "GB"
        },
        author: null,
        category: "economy",
        title: "Kansas State vs. Michigan State",
        description: "Kansas State survived a thrilling OT showdown with ...",
        url: "https://www.youtube.com/watch?v=3eC14g8pYM0",
        urlToImage: "https://i.ytimg.com/vi/3eC14g8pYM0/maxresdefault.jpg",
        publishedAt: "2023-03-24T02:53:03Z",
        content:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum uisquam eius sed odit fugiat iusto fuga praesentium option eaque rerum! Provident similique accusantium nemo autem. Veritatis aecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit"
    },
    {
        source: {
          id: null,
          name: "YouTube",
          country: "GB"
        },
        author: null,
        category: "education",
        title: "Kansas State vs. Michigan State",
        description: "Kansas State survived a thrilling OT showdown with ...",
        url: "https://www.youtube.com/watch?v=3eC14g8pYM0",
        urlToImage: "https://i.ytimg.com/vi/3eC14g8pYM0/maxresdefault.jpg",
        publishedAt: "2023-03-24T02:53:03Z",
        content:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum uisquam eius sed odit fugiat iusto fuga praesentium option eaque rerum! Provident similique accusantium nemo autem. Veritatis aecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit"
    }
  ];

  //rerender on whenever state of country changes
  useEffect(() => {
    filterNewsByCountry();
  }, [country])

  //set referer
  const postRouter = (post) => {
    setPostRef(post)
  }

  //get the data of current news clicked upon
  const getCurrentPost = (postObject) => setCurrentPost(postObject);
  
  //handles switching of country and filtering of country specific news (categories and top stories)
  const handleCountryChange = country => {
    setCountry(country);
    filterNewsByCountry();
  };

  //Filter the raw news array depending on the country selected
  const filterNewsByCountry = () => {
    let countrySpecificNews = rawNews.filter(data => {
      //condition for search page
      if (route === "search") {
        const inputElement = document.getElementsByTagName('input');
        const inputString = inputElement[0].value;
        let srchString = data.content.concat(data.description, data.title, data.source.name);
        if (srchString.toLocaleLowerCase().includes(inputString.toLocaleLowerCase()) && data.source.country === country) {
            return data
        }
      } else {return data.source.country === country} //condition for other pages
    });
    return setCountryNews(countrySpecificNews);
  }

  //MATERIAL UI FUNCTIONS//
  const handleChange_a = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className="App">
      <div className='nav'>
        <div className='categories'>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Top News" onClick={() => {
            handleTabChange("top-news");
            filterNewsByCountry();
            }}/>
            <Tab value="two" label="Categories" onClick={() => {
            handleTabChange("categories");
            filterNewsByCountry();
            }}/>
            <Tab value="three" label="Search" onClick={() => {
            handleTabChange("search");
            filterNewsByCountry();
            }}/>
          </Tabs>
        </Box>
        </div>
        <div className='countries'>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange_a}
            aria-label="Platform"
          >
            <ToggleButton value="US" onClick={() => handleCountryChange("US")}>US</ToggleButton>
            <ToggleButton value="GB" onClick={() => handleCountryChange("GB")}>GB</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='app-body'>
        {
          postRef === "view" ? <Post currentPost={currentPost} route={route} handleTabChange={handleTabChange}/> :
          route === "categories" ? 
          <Categories getCurrentPost={getCurrentPost} newsObject={countryNews} handleTabChange={handleTabChange} postRouter={postRouter}/> :
          route === "search" ?
          <Search getCurrentPost={getCurrentPost} newsObject={countryNews}  filterNewsByCountry={filterNewsByCountry} country={country} handleTabChange={handleTabChange} postRouter={postRouter}/> :
          <TopNews getCurrentPost={getCurrentPost} newsObject={countryNews} country={country} handleTabChange={handleTabChange} postRouter={postRouter}/>
        }
      </div>
    </div>
  );
}

export default App;
