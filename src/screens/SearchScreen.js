import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/Searchbar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, errorMessage, searchAPI] = useResults();

    return (
        <View>
            <SearchBar
                term={term}
                onChangeTerm={newTerm => setTerm(newTerm)}
                onTermSubmitted={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results.</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;