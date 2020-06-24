import React from 'react';
import './SearchBar.css'

export const SearchBar = (props) => {

    return (
        <div>
            <div className="searchBar">
                <input className="input" type='text'></input>
                <button className="searchButton">Go to location</button>
            </div>
            <hr />
        </div>
    )
}

export default SearchBar