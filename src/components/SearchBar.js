import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form className="d-flex my-3" onSubmit={handleSearch}>
            <input
                type="text"
                className="form-control me-2"
                placeholder="Search for jokes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    );
};

export default SearchBar;
