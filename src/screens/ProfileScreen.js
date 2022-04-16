import React from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from '../components/header';
import {Avatar} from '../common/avatar';
import {IconButton} from '../common/icon-button';
import {useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const {navigate} = useNavigation();

  const Item = ({icon, color, title, route}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigate(route, {title, icon})}>
      <IconButton icon={icon} color={color} />
      <CText style={{marginLeft: size.lg, color: colors.card}}>{title}</CText>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.root}>
      <Header profile />
      <View style={styles.img}>
        <Avatar img={require('../images/logo.png')} lg />
        <CText
          style={{paddingVertical: size.md, ...text.sm, color: colors.card}}>
          Зураг солих
        </CText>
      </View> 
      <View style={styles.box}>
        <Item
          icon="person"
          color={colors.primary}
          title="Хувийн мэдээлэл"
          route="AccountScreen"
        />
        <Item
          icon="book"
          color={colors.primary}
          title="Миний ном"
          route="MyBooks"
        />
        <Item
          icon="mail"
          color={colors.primary}
          title="Солилцох хүсэлт"
          route="RequestedBooksScreen"
        />
      </View>
      <View style={styles.img}>
        <CText
          style={{
            paddingVertical: size.sm,
            ...text.mdThin,
          }}>
          Ном нэмэх
        </CText>
        <IconButton
          rounded
          icon="add"
          color="white"
          lg
          onPress={() => navigate('AddBookScreen')}
        />
      </View>
      <TouchableOpacity style={[styles.img, {marginTop: size.xl}]}>
        <CText style={{color: colors.primary}}>Гарах</CText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {flex: 1},
  img: {
    width: '100%',
    ...layout.center,
    marginTop: size.md,
  },
  item: {
    marginVertical: size.sm,
    borderRadius: size.md,
    ...layout.hsb,
    justifyContent: 'flex-start',
    backgroundColor: colors.third,
    paddingVertical: size.md,
    paddingHorizontal: size.md,
  },
  box: {
    paddingHorizontal: size.lg * 2,
  },
});
