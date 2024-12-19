import axios from 'axios';

const BASE_URL = 'https://official-joke-api.appspot.com';

export const fetchRandomJoke = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/random_joke`);
        return response.data;
    } catch (error) {
        console.error('Error fetching random joke:', error);
        throw error;
    }
};

export const fetchJokesByType = async (type) => {
    try {
        const response = await axios.get(`${BASE_URL}/jokes/${type}/ten`);
        return response.data;
    } catch (error) {
        console.error('Error fetching jokes by type:', error);
        throw error;
    }
};

export const searchJokes = async (query) => {
    try {
        const allTypes = ['general', 'programming'];
        const promises = allTypes.map((type) => axios.get(`${BASE_URL}/jokes/${type}/ten`));
        const results = await Promise.all(promises);
        const allJokes = results.flatMap((res) => res.data);
        return allJokes.filter((joke) =>
            joke.setup.toLowerCase().includes(query.toLowerCase()) ||
            joke.punchline.toLowerCase().includes(query.toLowerCase())
        );
    } catch (error) {
        console.error('Error searching jokes:', error);
        throw error;
    }
};
