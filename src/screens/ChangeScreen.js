import React from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Header} from '../components/header';
import {IconButton} from '../common/icon-button';
import {useNavigation} from '@react-navigation/native';

export const ChangeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <Header
        rightButtonPress={() => navigate('AddExangeBookScreen')}
        leftButtonPress={() => navigate('SearchScreen')}
      />
      <CText style={[styles.title, {color: colors.card}]}>Солилцоо</CText>
      <View style={[styles.line, {backgroundColor: colors.card}]} />
      <CText style={[styles.subtitle, {color: colors.card}]}>Ангилал</CText>
      <IconButton icon="book" onPress={() => navigate('BookScreen')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  title: {
    marginBottom: size.md,
    paddingHorizontal: size.lg + size.md,
    ...text.lgThin,
  },
  subtitle: {
    marginVertical: size.md,
    paddingHorizontal: size.lg + size.md,
    ...text.mdThin,
  },
  line: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
  },
});
