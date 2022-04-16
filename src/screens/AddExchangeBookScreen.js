import React from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Head} from '../components/head';

export const AddExangeBookScreen = ({route}) => {
  const {goBack} = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <Head onPress={() => goBack()} />
      <CText>Add exchange books</CText>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {flex: 1},
});
