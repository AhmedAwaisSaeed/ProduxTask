import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Layout, Colors, Fonts} from '../theme';
const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: Layout.SV_12,
    backgroundColor: Colors.Primary.LIGHT_GREEN,
    marginHorizontal: Layout.SV_10,
    borderRadius: Layout.SV_10,
    marginVertical: Layout.SV_10,
  },
  textStyle: {
    fontFamily: Fonts.bold,
    color: Colors.Primary.WHITE,
    textAlign: 'center',
    fontSize: Layout.FSV_12,
  },
});
