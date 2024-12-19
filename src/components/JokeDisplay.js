import React from 'react';

const JokeDisplay = ({ joke }) => {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{joke.setup}</h5>
                <p className="card-text">{joke.punchline}</p>
            </div>
        </div>
    );
};

export default JokeDisplay;