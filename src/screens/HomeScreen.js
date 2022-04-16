import React from 'react';
import {CText} from '../common/c-text';
import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {size, text} from '../styles';
import {useTheme, useNavigation} from '@react-navigation/native';
import {Header} from '../components/header';

export const HomeScreen = () => {
  const {colors} = useTheme();
  const {navigate} = useNavigation();
  const Greetings = () => (
    <View style={styles.greetings}>
      <CText style={{color: colors.card}}>Сайн уу Батаа !</CText>
      <CText style={text.mdThin}>Өнөөдөр ямар ном унших гэж байна ?</CText>
    </View>
  );
  
  return (
    <SafeAreaView style={[styles.root]}>
      <StatusBar barStyle="dark-content" />
      <Header theme leftButtonPress={() => navigate('SearchScreen')} />
      <Greetings />
      <View style={[styles.line, {backgroundColor: colors.card}]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  greetings: {
    marginVertical: size.lg,
    paddingHorizontal: size.lg + size.md,
  },
  line: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
  },
});
