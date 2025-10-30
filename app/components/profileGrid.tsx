import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface ProfileGridInterface {
    id: number;
    storyImage: string; // URL
    image: string;
    }

const ProfileGrid = ({item}: { item: ProfileGridInterface}) => {
    
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image }} style={styles.image} />
    </View>
  )
}

export default ProfileGrid

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