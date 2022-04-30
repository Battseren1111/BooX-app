import React, {useState} from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header} from '../components/header';
import {IconButton} from '../common/icon-button';
import {useNavigation} from '@react-navigation/native';
import {bookData, changeCategories, categories} from '../demoBook';
import {UserBookComp} from '../userBook';
import {exchangeBookData} from '../demoChangeBook';

export const ChangeScreen = () => {
  const [data, setdata] = useState('');
  const {navigate} = useNavigation();
  const [selectedCategory, setSelectedCategory] = React.useState(1);
  const numColumns = 2;
  console.log(data);

  const renderItem = item => {
    let color = item.id === selectedCategory ? colors.primary : 'transparent';
    let textColor = item.id === selectedCategory ? colors.primary : colors.card;

    return (
      <TouchableOpacity
        key={item.id}
        title={item.name}
        style={{
          padding: 4,
          paddingHorizontal: 5,
          borderRadius: 10,
          backgroundColor: colors.text1bc,
          color: colors.text1,
          marginLeft: 10,
          height: 25,
          margin: 3,
        }}
        onPress={() => (setSelectedCategory(item.id), setdata(item))}>
        <CText
          style={{
            color: textColor,
          }}>
          {item.name}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header
        rightButtonPress={() => navigate('AddExangeBookScreen')}
        leftButtonPress={() => navigate('SearchScreen')}
      />
      <CText style={[styles.title, {color: colors.card}]}>Солилцоо</CText>
      <ScrollView>
        <View style={[styles.line, {backgroundColor: colors.card}]} />
        <CText style={[styles.subtitle, {color: colors.card}]}>Ангилал</CText>
        <View style={styles.box}>
          {changeCategories.map(el => renderItem(el))}
        </View>
        <View style={{marginTop: 1}}>
          <FlatList
            numColumns={numColumns}
            contentContainerStyle={{
              justifyContent: 'space-around',
            }}
            data={exchangeBookData}
            keyExtractor={item => item.id}
            renderItem={({item}) => <UserBookComp data={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  title: {
    marginBottom: size.md,
    paddingHorizontal: size.lg + size.md,
    ...text.xlThin,
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
  box: {
    marginHorizontal: 15,
    ...layout.hsb,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
});
