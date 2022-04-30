import React from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Head} from '../components/head';
import {HeadLil} from '../components/headLil';
import BackButton from '../components/BackButton';
import {IconButton} from '../common/icon-button';
import {myBookData} from '../demoBook';

export const MyBooks = ({route}) => {
  const {goBack} = useNavigation();
  const {title, icon} = route.params;

  renderItem = item => {
    return (
      <View style={styles.book}>
        <Image style={styles.image} source={item.img} />
        <View style={styles.titleAuthor}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
        <View style={styles.iconV}>
          <IconButton style={{marginLeft: 25}} icon="trash" />
        </View>
      </View>
    );
  };
  renderIteme = item => {
    return (
      <View style={styles.book}>
        <Image style={styles.image} source={item.img} />
        <View style={styles.titleAuthor}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
        <View style={styles.iconV}>
          <IconButton style={styles.icon} icon="download" />
          <IconButton style={styles.icon} icon="trash" />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <Head onPress={() => goBack()} title={title} icon={icon} />
        <View>{myBookData.map(el => renderItem(el))}</View>
        <HeadLil title={'Солилцсон ном'} icon={'logo-electron'} />
        <View>{myBookData.map(re => renderIteme(re))}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  book: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 27,
    marginTop: 16,
    backgroundColor: colors.pinkOrange,
  },
  image: {
    borderRadius: 5,
    height: 70,
    width: 50,
  },
  titleAuthor: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  title: {
    width: 180,
    fontSize: size.lg,
  },
  author: {
    marginTop: 5,
    color: colors.card,
  },
  iconV: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
