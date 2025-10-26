import { Ionicons } from '@expo/vector-icons'
import { Tabs } from "expo-router"
import { StyleSheet } from 'react-native'

const Layout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarStyle:{backgroundColor:"#f0f0f", height: 60},
        tabBarActiveTintColor: "#007bff",
        
        headerShown:false,

    }}>
        <Tabs.Screen
        name="index"
        options={{
            title:"Home",
            tabBarIcon: ({color})=>
                <Ionicons name ="home-outline" size={24} color={color}/>,
            
        
        }}
        />
                <Tabs.Screen
        name="search"
        options={{
            title:"Search",
            tabBarIcon: ({color})=>
                <Ionicons name ="search-outline" size={24} color={color}/>,
            
        
        }}
        />
        <Tabs.Screen
        name="profile"
        options={{
            title:"Profile",
            tabBarIcon: ({color})=>
                <Ionicons name ="person-outline" size={24} color={color}/>,

            
        
        }}
        />



    </Tabs>
  )
}

export default Layout

const styles = StyleSheet.create({})