import React from 'react';
import {CText} from '../common/c-text';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {size, text} from '../styles';
import {useTheme, useNavigation} from '@react-navigation/native';
import {Header} from '../components/header';
import {bookData, categories} from '../demoBook';
import {BookComp} from '../bookComponent';
import {Greetings} from '../greetings';

export const HomeScreen = () => {
  const {colors} = useTheme();
  const {navigate} = useNavigation();
  const numColumns = 2;

  const [selectedCategory, setSelectedCategory] = React.useState(1);

  const renderItem = ({item}) => {
    let color = item.id === selectedCategory ? colors.primary : 'transparent';
    let textColor = item.id === selectedCategory ? 'black' : colors.card;
    return (
      <TouchableOpacity
        style={{
          marginLeft: 10,
          height: 25,
          borderBottomWidth: 2,
          margin: 5,
          borderColor: color,
        }}
        onPress={() => setSelectedCategory(item.id)}>
        <CText
          style={{
            color: textColor,
          }}>
          {item.name}
        </CText>
      </TouchableOpacity>
    );
  };
  console.log(selectedCategory);
  // const renderBookItem = ({item}) => {
  //   return (
  //     <TouchableOpacity
  //       style={{
  //         margin: 10,
  //         height: 100,
  //         width: 100,
  //         borderWidth: 2,
  //         borderColor: 'black',
  //       }}>
  //       <Image style={styles.bookImage} />
  //     </TouchableOpacity>
  //   );
  // };

  // ---------------- Genre iig ni hevleh

  // const printBookCat = (genreID) => {
  //   console.log(categories.find(el => el.id === genreID).name);
  //   // return categories.find(el => el.id === genreID)
  // }
  // let genreIds = bookData[5].genre;
  // genreIds.map(el=> printBookCat(el));

  // ----------------

  return (
    <SafeAreaView style={[styles.root]}>
      <StatusBar barStyle="dark-content" />
      <Header theme leftButtonPress={() => navigate('SearchScreen')} />
      <ScrollView>
        <Greetings />
        <View style={[styles.line, {backgroundColor: colors.card}]} />
        <View style={{marginTop: 5}}>
          <FlatList
            nestedScrollEnabled
            style={{
              marginLeft: 10,
            }}
            data={categories}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{marginTop: 0}}>
          <FlatList
            nestedScrollEnabled
            numColumns={numColumns}
            contentContainerStyle={{
              justifyContent: 'space-around',
            }}
            data={bookData}
            keyExtractor={item => item.id}
            renderItem={({item}) => <BookComp data={item} />}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
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
