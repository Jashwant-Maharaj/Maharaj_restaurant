import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onChangeTerm, onTermSubmitted }) => {
    return (
        <View style={styles.BackgroundStyle}>
            <Feather name="search" color='black' style={styles.IconStyle} />
            <TextInput
                value = {term}
                onChangeText = {newTerm => onChangeTerm(newTerm)}
                onEndEditing = {() => onTermSubmitted()}
                style = {styles.InputStyle}
                placeholder='Search'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    BackgroundStyle: {
        backgroundColor: '#cccccc',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 15
    },
    InputStyle: {
        fontSize: 18,
        flex: 1
    },
    IconStyle: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 15
    }
});

export default SearchBar;