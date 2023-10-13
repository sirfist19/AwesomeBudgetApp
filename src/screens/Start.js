import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import { Entypo } from '@expo/vector-icons'; 

const ice_color = 'lightblue';
const grayish_blue = '#8fabdb';
const dark_ice_color = '#5785d4';

const Start = () => {
    return (  
        <SafeAreaView style={styles.outerContainer}>
            {/* This is really like a homescreen thingy 
                Like when the app starts 
            */}
            <View style={styles.container}>
                <Entypo name="rainbow" size={100} color="yellow" />
                <Text style={styles.pretitle}>Welcome to </Text>
                <Text style={styles.title}>Awesome Budget App!</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {   
        outerContainer: {
            flex: 1,
        }, 
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        pretitle: {
            fontSize: 20,
            color: grayish_blue,
            fontWeight: 'bold'
        },
        title: {
            fontSize: 30,
            color: dark_ice_color,
            fontWeight: 'bold'
        },
    }
);
export default Start;