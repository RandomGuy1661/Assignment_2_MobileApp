import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ProfileGrid from '../components/profileGrid'


const images = [
  {
    "id": 1,
    "storyImage": "https://picsum.photos/id/1005/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/237/600/600",
  },
  {
    "id": 2,
    "storyImage": "https://picsum.photos/id/1025/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/1080/600/600",
  },
  {
    "id": 3,
    "storyImage": "https://picsum.photos/id/1062/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/1031/600/600",
  },
  {
    "id": 4,
    "storyImage": "https://picsum.photos/id/659/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/105/600/600",
  },
  {
    "id": 5,
    "storyImage": "https://picsum.photos/id/102/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/431/600/600",
  },
  {
    "id": 6,
    "storyImage": "https://picsum.photos/id/837/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/870/600/600",
  },
  {
    "id": 7,
    "storyImage": "https://picsum.photos/id/684/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/510/600/600",
  },
  {
    "id": 8,
    "storyImage": "https://picsum.photos/id/144/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/169/600/600",
  },
  {
    "id": 9,
    "storyImage": "https://picsum.photos/id/1027/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/10/600/600",
  },
  {
    "id": 10,
    "storyImage": "https://picsum.photos/id/1074/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/1/600/600",
  },
  {
    "id": 11,
    "storyImage": "https://picsum.photos/id/1070/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/1043/600/600",
  },
  {
    "id": 12,
    "storyImage": "https://picsum.photos/id/1072/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/1066/600/600",
  },
  {
    "id": 13,
    "storyImage": "https://picsum.photos/id/201/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/403/600/600",
  },
  {
    "id": 14,
    "storyImage": "https://picsum.photos/id/208/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/605/600/600",
  },
  {
    "id": 15,
    "storyImage": "https://picsum.photos/id/220/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/152/600/600",
  },
  {
    "id": 16,
    "storyImage": "https://picsum.photos/id/338/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/47/600/600",
  },
  {
    "id": 17,
    "storyImage": "https://picsum.photos/id/350/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/830/600/600",
  },
  {
    "id": 18,
    "storyImage": "https://picsum.photos/id/354/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/900/600/600",
  },
  {
    "id": 19,
    "storyImage": "https://picsum.photos/id/357/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/550/600/600",
  },
  {
    "id": 20,
    "storyImage": "https://picsum.photos/id/373/50/50",
    "storyName": "lorem",
    "image": "https://picsum.photos/id/95/600/600",
  }
]



const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={24} color="grey" onPress={() => router.back()} />
          <Text style={styles.nameText}>exampleperson</Text>
          <Ionicons/>
        </View>
        <View style={styles.profileInfo}>
          <Image source={{uri:"https://randomuser.me/api/portraits/men/12.jpg"}} style={styles.profileImage}/> 
          <Text style={styles.infoText}>X{ '\n' }Posts</Text>
          <Text style={styles.infoText}>X{ '\n' }Followers</Text>
          <Text style={styles.infoText}>X{ '\n' }Following</Text>
        </View>
        <View>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo facere error
            voluptatibus eum aut. Veritatis illum vitae obcaecati veniam hic eos,
            eius fugit maiores atque facere aliquid eum quasi error! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Fuga culpa in incidunt provident dolorum
            quae omnis iusto distinctio ratione molestiae numquam ullam, molestias
            quaerat reiciendis earum, explicabo, dicta tempora quibusdam.
          </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
          images.map((story) => (
            <View key={story.id} style={styles.story}>
              <Image source={{uri: story.storyImage}} style={styles.storyImage}/>
                <Text style={styles.storyText} numberOfLines={1}>{story.storyName}</Text>
            </View>
          ))}
        </ScrollView>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[ styles.buttonStyles, styles.followButton]}><Text style={styles.followButtonText}>Follow</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles}><Text>Message</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles}><Text>Contact</Text></TouchableOpacity>
        </View>

        <View style={styles.gridContainer}>
        {
          images.map((item) => (
          <ProfileGrid key={item.id} item={item} />
        ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    padding: 20
  },
  header: {
    flexDirection: 'row',
    margin: 20,
    paddingTop: 60,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nameText: {
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  profileInfo: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  profileImage:{
      width: 100,
      height: 100,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "#d6249f",
      marginRight: 10,
  },
  buttonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonStyles:{
    alignItems: 'center',
    backgroundColor: '#e7e2e2ff',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    width: 120
  },
  followButton: {
    backgroundColor: "#007bff",
  },
  followButtonText:{
    color: "#fff"
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    width: '100%',
  },
  infoText:{
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  story:{
      alignItems: 'center',
      marginTop: 15,
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


  
})