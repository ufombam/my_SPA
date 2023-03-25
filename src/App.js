import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <div className='categories'>
          <div className='nav-items'>Top News</div>
          <div className='nav-items'>Categories</div>
          <div className='nav-items'>Search</div>
        </div>
        <div className='countries'>
          <div className='country-items'>US</div>
          <div className='country-items'>GB</div>
        </div>
      </div>
    </div>
  );
}

export default App;
