import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';
import {text} from './styles';
import {bookData, categories} from '../demoBook';
import {size} from './styles';
import {CText} from './common/c-text';
import {colors} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from './common/avatar';
import {exchangeBookData} from './demoChangeBook';

const WIDTH = Dimensions.get('window').width;
console.log(WIDTH);

export const UserBookComp = ({data}) => {
  navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bookComponent}>
        <View style={styles.user}>
          <Avatar img={require('./images/profile3.webp')} />
          <View>
            <CText style={styles.userName}>{data.firstname}</CText>
          </View>
        </View>
        <TouchableOpacity
          style={{marginTop: 5}}
          onPress={() =>
            navigation.navigate('ChangeBookDetails', {userBookData: data})
          }>
          <Image
            style={{
              height: (WIDTH / 3) * 1.53153,
              width: WIDTH / 3,

              borderRadius: 15,
            }}
            source={data.img}
          />
          <View style={styles.textComponent}>
            <CText style={(text.mdThin, {color: colors.text})}>
              {data.title}
            </CText>
            <CText style={[text.smThin, {color: colors.card}]}>
              {data.author}
            </CText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: (WIDTH - (WIDTH / 3) * 2) / 3,
  },
  bookComponent: {
    width: WIDTH / 3,
  },
  textComponent: {
    marginTop: 5,
    marginLeft: 7,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
  },
  userName: {
    marginLeft: 3,
    fontSize: size.md,
  },
});
