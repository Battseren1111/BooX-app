import {View, StyleSheet, Image, Switch} from 'react-native';
import React from 'react';
import {CText} from '../common/c-text';
import {colors, layout} from '../styles';
import {size, text} from '../styles';
import {IconButton} from '../common/icon-button';

export const Header = ({theme, profile, leftButtonPress, rightButtonPress}) => (
  <View style={[styles.header, {backgroundColor: colors.background}]}>
    {profile ? (
      <IconButton
        // icon="arrow-back"
        style={styles.searchButton}
      />
    ) : (
      <IconButton
        icon="search-outline"
        style={styles.searchButton}
        onPress={leftButtonPress}
      />
    )}
    <View style={styles.logo}>
      <Image style={styles.img} source={require('../images/logo.png')} />
      <CText style={{color: colors.primary, ...text.lg}}>BooX</CText>
    </View>
    <View style={styles.themeChanger}>
      {profile ? null : theme ? (
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={'#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
        />
      ) : (
        <IconButton
          icon="add-circle-outline"
          style={styles.add}
          onPress={rightButtonPress}
        />
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: size.xl,
    ...layout.hsb,
    paddingHorizontal: size.lg,
  },
  logo: {
    ...layout.hsb,
    ...layout.center,
    flex: 2,
  },
  themeChanger: {
    flex: 1,
    alignItems: 'flex-end',
  },
  searchButton: {
    flex: 1,
  },
  img: {
    height: size.xl - 15,
    width: size.xl - 15,
    marginHorizontal: size.sm,
  },
});
