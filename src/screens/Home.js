import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import ProgressBarLine from "../components/ProgressBarLine";

const Home = () => {
    const curBalance = 762;
    const budgetMonth = 'October';
    const budgetYear = 2023;
    const curBudgetMax = 1500;
    const amtSpent = curBudgetMax * .75;
    return ( 
        <SafeAreaView style={styles.outerContainer}>
            {/* The title and logo in the top bar of the app 
            <View style={styles.subtitle}>
                <Text>Budgeter</Text> 
                <Entypo name="rainbow" size={50} color="black" />
            </View>
            */}

            {/* Will hold the current balance and be connected to 
                the user's data
             */}
            <View>
                <Text>Current Balance</Text>
                <Text>${curBalance}</Text>
            </View>

            {/* Budgeting info */}
            <View style={styles.budgetContainer}>
                <Text style={styles.heading}>This month's main budget</Text>
                <Text style={styles.budgetDate}> {budgetMonth} {budgetYear} </Text>
                <Text style={styles.amtSpent}> ${amtSpent} out of ${curBudgetMax} spent</Text>
                
                <ProgressBarLine 
                    totalLength={curBudgetMax} 
                    totalProgress={amtSpent} 
                    progressText={"Spent: $"} 
                    remainingText={"To Spend: $"}
                    Color={'red'}/>
            </View>
        </SafeAreaView>
    );
}

const ice_color = 'lightblue';
const grayish_blue = '#8fabdb';
const dark_ice_color = '#5785d4';

const styles = StyleSheet.create(
    {   
        outerContainer: {
            flex: 1,
        }, 
        budgetContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        heading : {
            fontSize: 30
        },
        budgetDate: {

        },
        amtSpent: {

        },
        percentage: {

        }
    }
);
export default Home;