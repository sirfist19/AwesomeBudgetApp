import { StatusBar } from 'expo-status-bar';

import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// Screen imports
import Home from './src/screens/Home';
import Start from './src/screens/Start';
import AddTransaction from './src/screens/AddTransaction';
import Profile from './src/screens/Profile';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Icons
// All icons are from https://icons.expo.fyi/Index 
import { Feather, FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export default function App() {
  useEffect(
    () => {console.log("App is running")}
  , []);
  const tabBarActiveColor = 'tomato';
  const tabBarInactiveColor = 'grey';
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name={'Home'} 
            component={Home}
            options={{
              tabBarIcon: () => (<FontAwesome name="home" size={24} color="black" />)
            }}
           />
          <Tab.Screen 
            name={'Add'} 
            component={AddTransaction}
            options={{
              tabBarIcon: () => (<AntDesign name="pluscircle" size={24} color="black" />)
            }}
           />
           <Tab.Screen 
            name={'Profile'} 
            component={Profile}
            options={{
              tabBarIcon: () => (<Ionicons name="person-circle" size={24} color="black" />)
            }}
           />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const ice_color = 'lightblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
