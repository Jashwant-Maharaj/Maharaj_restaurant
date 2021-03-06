import { useState, useEffect } from 'react';
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        console.log("hi")
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    location: 'California',
                    term: searchTerm
                }
            }
            );
            setResults(response.data.businesses);
        }
        catch (err) {
            setErrorMessage('Something went Wrong...');
        }
    }

    useEffect(() => {
        searchAPI('pasta');
    }, []
    );
    
    return[searchAPI, results, errorMessage]
}