// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import SearchResults from './SearchResults';

function NavBar() {
  return (
    <div className="navBar">
      <img src={logo} alt='Logo' />
      <div className='Tabs'>
        <h1>About</h1>
        <h1>Stores</h1>
        <h1>Blog</h1>
        <h1>Support</h1>
        <h1>Contact</h1>
      </div>
      <div className='Buttons'>
        <button>Start Selling</button>
        <button>Marketplace</button>
      </div>
    </div>
  );
}

function Template() {
  return (
    <div className='Template'>
      <h2>Category</h2>
      <div className='SmallGrid'>
        <div className='Cell'>
          <img src={logo} alt='abc' />
          <p>Name</p>
        </div>
        <div className='Cell'>
          <img src={logo} alt='abc' />
          <p>Name</p>
        </div>
        <div className='Cell'>
          <img src={logo} alt='abc' />
          <p>Name</p>
        </div>
        <div className='Cell'>
          <img src={logo} alt='abc' />
          <p>Name</p>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div className="App">
      <NavBar />
      <div className='SearchBar'>
        <input type='text' placeholder='Search Products...' />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <h1 className='Heading'>Top Categories</h1>
      <div className='Categories'>
        <Template /><Template /><Template /><Template /><Template /><Template /><Template /><Template />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
