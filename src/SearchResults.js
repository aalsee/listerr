// SearchResults.js
import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import './SearchResults.css';
import SlidingWindow from './SlidingWindow';

function Results({ onClick }) {
    return (
        <div className='Results' onClick={onClick}>
            <img src={logo} alt='ResultImage' />
            <div className='Description'>
                <h1>Heading</h1>
                <h3>Description</h3>
                <h1>Price</h1>
                <h4>Rating</h4>
            </div>
        </div>
    );
}

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

function SearchResults() {
    const [isSlidingWindowOpen, setSlidingWindowOpen] = useState(false);

    const handleResultClick = () => {
        setSlidingWindowOpen(true);
    };

    const handleClose = () => {
        setSlidingWindowOpen(false);
    };

    return (
        <div className='SearchResults'>
            <NavBar />
            <div className='SearchBar'>
                <input type='text' placeholder='Search Products...' />
                <button>Search</button>
            </div>
            <div>
                <Results onClick={handleResultClick} />
                <Results onClick={handleResultClick} />
                <Results onClick={handleResultClick} />
                <Results onClick={handleResultClick} />
                <Results onClick={handleResultClick} />
                <Results onClick={handleResultClick} />
            </div>
            <SlidingWindow isOpen={isSlidingWindowOpen} onClose={handleClose}>
                <h1>Heading</h1>
                <img src={logo} alt='product'></img>
                <h2>Product Details</h2>
                <p>Here you can display more detailed information about the product.</p>
                <p>Price</p>
            </SlidingWindow>
        </div>
    );
}

export default SearchResults;
