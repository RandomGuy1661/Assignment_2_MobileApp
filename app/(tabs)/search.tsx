import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import SearchGrid from '../components/searchGrid'

const Home = () => {

  // Data generated from Google Gemini:
  const searchImages = [
  {
    "id": 1,
    "profileImage": "https://picsum.photos/id/1005/50/50",
    "name": "travel_explorer",
    "account": "travel_explorer",
    "date": "2025-10-25T14:30:00Z",
    "text": "Golden hour hike views! ⛰️ Nothing beats this peaceful moment. Where should I go next?",
    "image": "https://picsum.photos/id/237/600/600",
    "comments": "2 comments",
    "retweets": "150",
    "likes": "1256",
    "stat": "5"
  },
  {
    "id": 2,
    "profileImage": "https://picsum.photos/id/1025/50/50",
    "name": "foodie_delights",
    "account": "foodie_delights",
    "date": "2025-10-25T09:15:00Z",
    "text": "Starting the day with a healthy and vibrant fruit bowl! 🍓🥝🫐 Recipe link in bio.",
    "image": "https://picsum.photos/id/1080/600/600",
    "comments": "1 comment",
    "retweets": "98",
    "likes": "892",
    "stat": "8"
  },
  {
    "id": 3,
    "profileImage": "https://picsum.photos/id/1062/50/50",
    "name": "city_scapes",
    "account": "city_scapes",
    "date": "2025-10-24T20:00:00Z",
    "text": "Night lights of the concrete jungle. Always mesmerized by the energy here. ✨ #citylife",
    "image": "https://picsum.photos/id/1031/600/600",
    "comments": "1 comment",
    "retweets": "190",
    "likes": "2501",
    "stat": "3"
  },
  {
    "id": 4,
    "profileImage": "https://picsum.photos/id/659/50/50",
    "name": "cozy_reads",
    "account": "cozy_reads",
    "date": "2025-10-24T12:00:00Z",
    "text": "Nothing better than a good book and a cup of tea on a rainy day. What are you currently reading?",
    "image": "https://picsum.photos/id/105/600/600",
    "comments": "0 comments",
    "retweets": "45",
    "likes": "487",
    "stat": "6"
  },
  {
    "id": 5,
    "profileImage": "https://picsum.photos/id/102/50/50",
    "name": "daily_tech",
    "account": "daily_tech",
    "date": "2025-10-23T11:00:00Z",
    "text": "Fueling up and tackling the to-do list! 💻☕ Loving the remote work life. #developerlife",
    "image": "https://picsum.photos/id/431/600/600",
    "comments": "2 comments",
    "retweets": "180",
    "likes": "1980",
    "stat": "9"
  },
  {
    "id": 6,
    "profileImage": "https://picsum.photos/id/837/50/50",
    "name": "home_design_inspo",
    "account": "home_design_inspo",
    "date": "2025-10-23T07:30:00Z",
    "text": "Obsessed with this minimalist living room design! Clean lines and warm tones. 🛋️",
    "image": "https://picsum.photos/id/870/600/600",
    "comments": "2 comments",
    "retweets": "134",
    "likes": "3120",
    "stat": "1"
  },
  {
    "id": 7,
    "profileImage": "https://picsum.photos/id/684/50/50",
    "name": "ocean_vibes_only",
    "account": "ocean_vibes_only",
    "date": "2025-10-22T17:45:00Z",
    "text": "Chasing the last waves of the day. Saltwater therapy always wins. 🌊🌅",
    "image": "https://picsum.photos/id/510/600/600",
    "comments": "1 comment",
    "retweets": "77",
    "likes": "1502",
    "stat": "7"
  },
  {
    "id": 8,
    "profileImage": "https://picsum.photos/id/144/50/50",
    "name": "creative_minds",
    "account": "creative_minds",
    "date": "2025-10-22T13:00:00Z",
    "text": "Finished my latest piece! Sometimes the best art is just letting the colors flow. What do you see? 🤔",
    "image": "https://picsum.photos/id/169/600/600",
    "comments": "2 comments",
    "retweets": "112",
    "likes": "945",
    "stat": "4"
  },
  {
    "id": 9,
    "profileImage": "https://picsum.photos/id/1027/50/50",
    "name": "mountain_adventures",
    "account": "mountain_adventures",
    "date": "2025-10-21T08:50:00Z",
    "text": "High in the mountains where the air is crisp and the views are endless. Ready for winter sports! 🎿",
    "image": "https://picsum.photos/id/10/600/600",
    "comments": "0 comments",
    "retweets": "175",
    "likes": "1823",
    "stat": "2"
  },
  {
    "id": 10,
    "profileImage": "https://picsum.photos/id/1074/50/50",
    "name": "pet_parent_life",
    "account": "pet_parent_life",
    "date": "2025-10-21T16:00:00Z",
    "text": "Nap time is a serious business. Don't disturb the fluff. 😻 #catlife",
    "image": "https://picsum.photos/id/1/600/600",
    "comments": "1 comment",
    "retweets": "162",
    "likes": "3504",
    "stat": "10"
  },
  {
    "id": 11,
    "profileImage": "https://picsum.photos/id/1070/50/50",
    "name": "diy_projects_daily",
    "account": "diy_projects_daily",
    "date": "2025-10-20T10:30:00Z",
    "text": "New weekend project underway! Building a custom shelf for the office. Wish me luck! 🔨",
    "image": "https://picsum.photos/id/1043/600/600",
    "comments": "2 comments",
    "retweets": "88",
    "likes": "678",
    "stat": "7"
  },
  {
    "id": 12,
    "profileImage": "https://picsum.photos/id/1072/50/50",
    "name": "fitness_goals",
    "account": "fitness_goals",
    "date": "2025-10-20T06:45:00Z",
    "text": "Morning run complete! Feeling the burn and hitting those PBs. Dedication pays off. 💪🏃‍♀️",
    "image": "https://picsum.photos/id/1066/600/600",
    "comments": "2 comments",
    "retweets": "105",
    "likes": "2100",
    "stat": "9"
  },
  {
    "id": 13,
    "profileImage": "https://picsum.photos/id/201/50/50",
    "name": "coffee_obsessed",
    "account": "coffee_obsessed",
    "date": "2025-10-19T11:00:00Z",
    "text": "Espresso on a chilly morning. Perfection in a cup. ☕️",
    "image": "https://picsum.photos/id/403/600/600",
    "comments": "3 comments",
    "retweets": "120",
    "likes": "1150",
    "stat": "6"
  },
  {
    "id": 14,
    "profileImage": "https://picsum.photos/id/208/50/50",
    "name": "street_photography",
    "account": "street_photography",
    "date": "2025-10-19T15:30:00Z",
    "text": "Caught this moment of quiet contemplation in the chaos of the city.",
    "image": "https://picsum.photos/id/605/600/600",
    "comments": "0 comments",
    "retweets": "55",
    "likes": "780",
    "stat": "3"
  },
  {
    "id": 15,
    "profileImage": "https://picsum.photos/id/220/50/50",
    "name": "succulent_garden",
    "account": "succulent_garden",
    "date": "2025-10-18T09:00:00Z",
    "text": "Tiny plants, big happiness. Loving how the sunlight hits these textures. 🪴",
    "image": "https://picsum.photos/id/152/600/600",
    "comments": "4 comments",
    "retweets": "140",
    "likes": "2850",
    "stat": "1"
  },
  {
    "id": 16,
    "profileImage": "https://picsum.photos/id/338/50/50",
    "name": "music_producer",
    "account": "music_producer",
    "date": "2025-10-18T18:00:00Z",
    "text": "Late night in the studio. New track drops next week! Stay tuned. 🎧",
    "image": "https://picsum.photos/id/47/600/600",
    "comments": "5 comments",
    "retweets": "210",
    "likes": "3010",
    "stat": "8"
  },
  {
    "id": 17,
    "profileImage": "https://picsum.photos/id/350/50/50",
    "name": "vintage_style_blog",
    "account": "vintage_style_blog",
    "date": "2025-10-17T13:45:00Z",
    "text": "Found the perfect retro jacket at a local thrift store. Obsessed! 🧥 #thriftfinds",
    "image": "https://picsum.photos/id/830/600/600",
    "comments": "1 comment",
    "retweets": "90",
    "likes": "1450",
    "stat": "4"
  },
  {
    "id": 18,
    "profileImage": "https://picsum.photos/id/354/50/50",
    "name": "explore_wild",
    "account": "explore_wild",
    "date": "2025-10-17T07:15:00Z",
    "text": "Foggy morning in the forest. Feeling incredibly small and peaceful out here. 🌲",
    "image": "https://picsum.photos/id/900/600/600",
    "comments": "2 comments",
    "retweets": "110",
    "likes": "1675",
    "stat": "9"
  },
  {
    "id": 19,
    "profileImage": "https://picsum.photos/id/357/50/50",
    "name": "baking_queen",
    "account": "baking_queen",
    "date": "2025-10-16T19:30:00Z",
    "text": "Freshly baked sourdough! The smell is better than any candle. 🥖 Recipe is up!",
    "image": "https://picsum.photos/id/550/600/600",
    "comments": "6 comments",
    "retweets": "250",
    "likes": "4100",
    "stat": "10"
  },
  {
    "id": 20,
    "profileImage": "https://picsum.photos/id/373/50/50",
    "name": "abstract_visions",
    "account": "abstract_visions",
    "date": "2025-10-16T14:00:00Z",
    "text": "Playing with digital textures this afternoon. Love the vibrant clash of colors. 🎨",
    "image": "https://picsum.photos/id/95/600/600",
    "comments": "1 comment",
    "retweets": "60",
    "likes": "990",
    "stat": "2"
  }
]

  // State for the search text input
  const [text, onChangeText] = React.useState("");

  // Router instance for navigation
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentStyle}>
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={24} color="grey" onPress={() => router.back()} />
          <TextInput value={text} onChangeText={onChangeText} placeholder='Search' style={styles.textBar}></TextInput>
        </View>
        <View style={styles.gridContainer}>
        {
          searchImages.map((item) => (
          <SearchGrid key={item.id} item={item} />
        ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContentStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    margin: 20,
    paddingTop: 30,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center'

  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    width: '100%',
  },
  textBar: {
    backgroundColor: '#c7c7c7ff',
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    color: 'white',
    marginLeft: 30


  }
})