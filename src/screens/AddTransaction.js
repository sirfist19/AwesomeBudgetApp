import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, TextInput, Button} from "react-native";
import Dropdown from "../components/Dropdown";
import { Entypo } from '@expo/vector-icons'; 


const ice_color = 'lightblue';
const grayish_blue = '#8fabdb';
const dark_ice_color = '#5785d4';

// Node backend stuff
//const fs = require('fs');


const handleAddTransaction = (amount, type, category) => {
  //const filePath = '../data/transactions.json';
  //const rawData = fs.readFileSync(filePath, 'utf-8');
  //const jsonData = JSON.parse(rawData);
  //console.log(jsonData);
};

const AddTransaction = () => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Deposit');
    const [category, setCategory] = useState('');
    const transactionTypes = ["Deposit", "Payment"];

    return (
        <View style={styles.container}>
          <Text style={styles.text}>Amount:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setAmount(text)}
            value={amount}
            keyboardType="numeric"
          />
    
          <Text style={styles.text}>Type:</Text>
          <Dropdown dropdata={transactionTypes} setSelected={setType} />
    
          <Text style={styles.text}>Category:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setCategory(text)}
            value={category}
          />

          <View style={styles.addTransactionBtn}>
            <Button
              title="Add Transaction"
              onPress={() => handleAddTransaction(amount, type, category)}
            />
          </View>
        </View>
      );
    };
    
const styles = StyleSheet.create(
    {   
        container: { 
          flex: 1,
          
        },
        text : {
          fontSize: 24
        },
        input : {
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          padding: 3,
          width: 200,
          alignSelf: 'center',
          
        },
        addTransactionBtn: {
          backgroundColor: ice_color,
          borderColor: grayish_blue,
          borderWidth: 2,
          borderRadius: 5,
          color: 'red',
          width: 200,
          alignSelf: 'center',
          marginTop: 'auto',
          marginBottom: 50
        },
        
    }
);
export default AddTransaction;