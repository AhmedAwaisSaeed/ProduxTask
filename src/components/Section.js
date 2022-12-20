import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Layout, Colors, Fonts} from '../theme';

const Section = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightText}>{title}</Text>
      <Text
        style={[
          styles.boldText,
          {
            color:
              title === 'Distance' ? Colors.Primary.BLUE : Colors.Primary.BLACK,
          },
        ]}>
        {value}
      </Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    height: Layout.SV_70,
    borderWidth: 1,
    borderColor: Colors.Primary.Light_GREY,
    borderRadius: Layout.SV_10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Layout.SV_10,
  },
  boldText: {
    fontFamily: Fonts.bold,
    fontSize: Layout.FSV_15,
    paddingVertical: Layout.SV_5,
  },
  lightText: {
    fontFamily: Fonts.regular,
    fontSize: Layout.FSV_12,
  },
});
