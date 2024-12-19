import React, { useState, useEffect } from 'react';
import { fetchJokesByType, searchJokes } from '../services/api';
import JokeDisplay from '../components/JokeDisplay';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [jokes, setJokes] = useState([]);
    const [selectedType, setSelectedType] = useState('general');

    const loadJokes = async (type = 'general') => {
        try {
            const fetchedJokes = await fetchJokesByType(type);
            setJokes(fetchedJokes);
        } catch (error) {
            console.error('Error loading jokes:', error);
        }
    };

    const handleSearch = async (searchTerm) => {
        try {
            const results = await searchJokes(searchTerm);
            setJokes(results);
        } catch (error) {
            console.error('Error searching jokes:', error);
        }
    };

    useEffect(() => {
        loadJokes(selectedType);
    }, [selectedType]);

    return (
        <div className="container">
            <SearchBar onSearch={handleSearch} />

            <div className="d-flex justify-content-center my-3">
                <button
                    className={`btn btn-outline-primary mx-2 ${selectedType === 'general' && 'active'}`}
                    onClick={() => setSelectedType('general')}
                >
                    General Jokes
                </button>
                <button
                    className={`btn btn-outline-secondary mx-2 ${selectedType === 'programming' && 'active'}`}
                    onClick={() => setSelectedType('programming')}
                >
                    Programming Jokes
                </button>
            </div>

            {jokes.length > 0 ? (
                jokes.map((joke, index) => <JokeDisplay key={index} joke={joke} />)
            ) : (
                <p className="text-center">No jokes available. Try searching or changing the category.</p>
            )}
        </div>
    );
};

export default Home;
