import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const BackButton = ({primary, title, small}) => {
  navigation = useNavigation();

  return (
    <View>
      {primary == !null ? (
        <TouchableOpacity
          style={small ? [styles.button, {padding: 5}] : styles.button}
          onPress={() => navigation.goBack()}>
          <Text>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'green'}]}
          onPress={() => navigation.goBack()}>
          <Text>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: 'red',
  },
});
