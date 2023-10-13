import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";

const ice_color = 'lightblue';
const grayish_blue = '#8fabdb';
const dark_ice_color = '#5785d4';

const Start = () => {
    return (  
        <SafeAreaView style={styles.outerContainer}>
            {/* Shows your name, account info (username), profile pic
                number of budgets and some other stats

                It would be cool to have a feature with other friends as well
            */}
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {   
        outerContainer: {
            flex: 1,
        }, 
    }
);
export default Start;