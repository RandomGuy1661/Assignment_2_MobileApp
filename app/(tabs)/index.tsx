import { StyleSheet, Text, Image, View, Platform, StatusBar, ScrollView, FlatList } from 'react-native'
import React from 'react'

const stories = [
{
  id: "1",
  name: "Emma Johnson",
  image: "https://randomuser.me/api/portraits/women/81.jpg",
},
{
  id: "2",
  name: "Liam Chen",
  image: "https://randomuser.me/api/portraits/men/72.jpg",
},
{
  id: "3",
  name: "Sofia Patel",
  image: "https://randomuser.me/api/portraits/women/63.jpg",
},
{
  id: "4",
  name: "Noah Williams",
  image: "https://randomuser.me/api/portraits/men/54.jpg",
},
{
  id: "5",
  name: "Isabella Müller",
  image: "https://randomuser.me/api/portraits/women/45.jpg",
},
{
  id: "6",
  name: "Oliver Kim",
  image: "https://randomuser.me/api/portraits/men/36.jpg",
},
{
  id: "7",
  name: "Ava Rodriguez",
  image: "https://randomuser.me/api/portraits/women/27.jpg",
},
{
  id: "8",
  name: "Ethan Novak",
  image: "https://randomuser.me/api/portraits/men/18.jpg",
},
{
  id: "9",
  name: "Mia Svensson",
  image: "https://randomuser.me/api/portraits/women/9.jpg",
},
{
  id: "10",
  name: "Lucas Ferreira",
  image: "https://randomuser.me/api/portraits/men/91.jpg",
},
];
 
// Posts
 
const posts = [
  {
    id: "1",
    username: "alex_wanderer",
    profileImage: "https://randomuser.me/api/portraits/men/12.jpg",
    postImage:
      "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 342,
    caption: "Golden hour magic at the château ✨ #travelgram",
    comments: 28,
    retweet: 15,
    message: 23,
  },
  {
    id: "2",
    username: "luna_photography",
    profileImage: "https://randomuser.me/api/portraits/women/79.jpg",
    postImage:
      "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 187,
    caption: "Winter whispers in monochrome ❄️ #bnw",
    comments: 41,
    retweet: 9,
    message: 12,
  },
  {
    id: "3",
    username: "mike_travels",
    profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
    postImage:
      "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 521,
    caption: "Chasing peaks and inner peace 🏞️ #exploremore",
    comments: 67,
    retweet: 38,
    message: 45,
  },
  {
    id: "4",
    username: "sophie_art",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    postImage:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 289,
    caption: "Street art tells stories the city forgot 🎭 #urbanart",
    comments: 53,
    retweet: 22,
    message: 31,
  },
  {
    id: "5",
    username: "david_runs",
    profileImage: "https://randomuser.me/api/portraits/men/33.jpg",
    postImage:
      "https://images.pexels.com/photos/235605/pexels-photo-235605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 156,
    caption: "5 AM runs > sleeping in 🏃‍♂️ #discipline",
    comments: 19,
    retweet: 5,
    message: 8,
  },
  {
    id: "6",
    username: "emma_cooks",
    profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
    postImage:
      "https://images.pexels.com/photos/1098597/pexels-photo-1098597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 612,
    caption: "From scratch, with love 🍴 #homecooking",
    comments: 89,
    retweet: 41,
    message: 67,
  },
  {
    id: "7",
    username: "nina_yoga",
    profileImage: "https://randomuser.me/api/portraits/women/27.jpg",
    postImage:
      "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 743,
    caption: "Inhale courage, exhale doubt 🕉️ #mindfulness",
    comments: 102,
    retweet: 57,
    message: 84,
  },
  {
    id: "8",
    username: "chris_bikes",
    profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
    postImage:
      "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 298,
    caption: "Two wheels, endless roads 🚵‍♂️ #bikelife",
    comments: 35,
    retweet: 18,
    message: 24,
  },
  {
    id: "9",
    username: "julia_reads",
    profileImage: "https://randomuser.me/api/portraits/women/15.jpg",
    postImage:
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 411,
    caption: "Lost in pages, found in stories 📚 #booklover",
    comments: 72,
    retweet: 29,
    message: 39,
  },
  {
    id: "10",
    username: "ryan_surf",
    profileImage: "https://randomuser.me/api/portraits/men/94.jpg",
    postImage:
      "https://images.pexels.com/photos/3584578/pexels-photo-3584578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 587,
    caption: "Salt in my hair, ocean in my soul 🏄‍♂️ #wavechaser",
    comments: 94,
    retweet: 52,
    message: 71,
  },
];
 
const Mainpage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
            source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
            }}
            style={styles.logo}     
            />
            <Text style={styles.headerText}>Insta Clone</Text>
        </View>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.storyContainer}>
            {
                stories.map((story) => (
                  <View key={story.id} style={styles.story}>
                    <Image
                    source={{uri: story.image}}
                    style={styles.storyImage}
                    />
                    <Text style={styles.storyText} numberOfLines={1}>{story.name}</Text>

                  </View>
                ))
            }
        </ScrollView>
        {/** Posts Section **/}
        <FlatList
         data={posts}
         keyExtractor={(post)=> post.id}
         renderItem={
          ({item})=>(
            <View style={styles.postContainer}>
              {/* User Info */}
              <View style={styles.userInfo}>
                <Image
                  source={{uri: item.profileImage}}
                  style={styles.profileImage}
                />
                <Text style={styles.username}>{item.username}</Text>
              </View>
              {/* Post Image*/}
              <Image source={{uri:item.postImage}} style={styles.postImage}/>
              {/*Likes and Captions */}
              <View style={styles.postDetails}>
                <Text style={styles.likes}>{item.likes} Likes</Text>
                <Text style={styles.caption}>
                  <Text style={styles.bold}> {item.username} {item.caption}</Text>
                </Text>
              </View>
            </View>
          )
         }
        />
    </View>
  )
}

export default Mainpage;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop: Platform.OS !== 'ios' ? StatusBar.currentHeight : 0,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    logo:{
        width: 50,
        height: 50,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: "#d6249f",
        resizeMode: "cover",
        marginRight: 20,
    },
    headerText:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    storyContainer:{
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    story:{
      alignItems: 'center',
      marginRight: 15,
      width: 90,
    },

    storyImage:{
      width: 50,
      height: 50,
      borderRadius: 35,
      borderWidth: 2,
      borderColor: "#d6249f",
      resizeMode: "cover",
      
    },

    storyText:{
      marginTop: 5,
      fontSize: 12,
      textAlign: 'center',
      color: '#333',
      width: 85,
      overflow: 'hidden',
      paddingBottom: 10,

    },

    postContainer:{
      marginBottom: 20,
      borderBottomWidth:1,
      borderBottomColor: '#ddd',
      paddingBottom: 10,
    },

    profileImage:{
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,

    },

    userInfo:{
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      marginBottom: 10
    },

    username:{
      fontWeight: "bold",
      fontSize: 16,
    },

    postImage:{
      width:"100%",
      height:300,
      borderRadius:10,
      resizeMode:"cover",
      

    },

    postDetails:{
      padding:10,
    },

    likes:{
      fontWeight:"bold",
    },

    caption:{
      marginTop:5,
    },

    bold:{
      fontWeight: "bold",
    }
})