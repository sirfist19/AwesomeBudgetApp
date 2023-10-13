import React, {useState} from "react";
import {StyleSheet} from "react-native";
import SelectDropdown from 'react-native-select-dropdown'

const Dropdown = ({dropdata, setSelected}) => {
    return ( 
        <SelectDropdown
            style={styles.dropdown}
            data={dropdata}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setSelected(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
    );
}

const styles = StyleSheet.create(
    {
        dropdown : {
            backgroundColor: 'black'
        }
    }
)
 
export default Dropdown;