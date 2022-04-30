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
} from 'react-native';
import {text} from './styles';
import {bookData, categories} from '../demoBook';
import {size} from './styles';
import {CText} from './common/c-text';
import {colors} from './styles';
import {useNavigation} from '@react-navigation/native';

const WIDTH = Dimensions.get('window').width;

export const BookComp = ({data}) => {
  navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.user}></View>
      <View style={styles.bookComponent}>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('BookScreen', {bookData: data})}>
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
    marginLeft: (WIDTH - (WIDTH / 3) * 2) / 3,
  },
  bookComponent: {
    width: WIDTH / 3,
  },
  textComponent: {
    marginTop: 5,
    marginLeft: 7,
  },
});
