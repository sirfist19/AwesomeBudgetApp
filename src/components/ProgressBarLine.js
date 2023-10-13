import React from "react";
import {View, Text, StyleSheet} from "react-native";
import * as Progress from 'react-native-progress';

const ProgressBarLine = ({totalLength, totalProgress, progressText, remainingText, Color}) => {
    const percentProgress = totalProgress/totalLength;

    return (
        <View style={styles.container}>
          <Progress.Bar
            progress={percentProgress}
            width={340}
            color={Color}
          />
          <Text style={styles.label}>{`${progressText}${totalProgress}`}</Text>
          <Text style={styles.label}>{`${remainingText}${totalLength - totalProgress}`}</Text>
          <Text style={styles.percentage}> Percentage left to spend: {100*(1-percentProgress)}%</Text>
        </View>
      );
};

const styles = StyleSheet.create({
    container : {

    },
    label: {

    },
    percentage : {

    }

});

export default ProgressBarLine;