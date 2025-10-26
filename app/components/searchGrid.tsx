import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface SearchGridInterface {
    id: number;
    profileImage: string; // URL
    name: string; 
    account: string; 
    date: string;
    text: string; 
    image: string;
    comments: string;
    retweets: string; 
    likes: string; 
    stat: string;
    }

const SearchGrid = ({item}: { item: SearchGridInterface}) => {
    
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image }} style={styles.image} />
    </View>
  )
}

export default SearchGrid

const styles = StyleSheet.create({
    container: {
    width: '33.33%',
    padding: 1
    },
    image: {
        flex: 1,
        aspectRatio: 1
    }
})