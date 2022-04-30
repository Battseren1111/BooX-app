import React from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size} from '../styles';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Head} from '../components/head';
import {IconButton} from '../common/icon-button';

const WIDTH = Dimensions.get('window').width;

export const BookScreen = ({route}) => {
  const {goBack} = useNavigation();
  const {bookData} = route.params;
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.mainContainer}>
        <IconButton
          icon="arrow-back"
          onPress={() => goBack()}
          color={colors.text}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageV}>
            <Image
              style={{
                width: WIDTH / 2,
                height: (WIDTH / 2) * 1.5,
                borderRadius: 15,
              }}
              source={bookData.img}
            />
          </View>
          <Text style={styles.title}>{bookData.title}</Text>
          <Text style={styles.author}>{bookData.author}</Text>
          <Text style={styles.price}>
            {'Үнэ: '}
            {bookData.price}
          </Text>
          <Text style={styles.des}>{'Товч агуулга'}</Text>
          <Text style={styles.description}>{bookData.description}</Text>
        </ScrollView>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 8,
          borderRadius: 50,
          backgroundColor: colors.primary,
          position: 'absolute',
          bottom: 30,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Button
          title="Худалдаж авах"
          accessibilityLabel="Press"
          color="white"
          onPress={() =>
            navigation.navigate('OrderScreen', {bookPriceData: bookData})
          }
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {flex: 1},
  imageV: {
    ...layout.center,
  },
  bookImage: {
    width: 100,
    height: 50,
    border: 15,
    justifyContent: 'center',
  },
  price: {
    marginTop: 5,
    width: 135,
    fontSize: 18,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: '#19B500',
  },
  mainContainer: {
    marginHorizontal: 25,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: size.lg,
  },
  author: {
    color: colors.card,
    textAlign: 'center',
    fontSize: size.mdThin,
  },
  des: {
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  description: {
    marginTop: 5,
    textAlign: 'justify',
  },
  bookImage: {
    height: 300,
    width: 180,
  },
  orderButton: {
    zIndex: 100,
    marginTop: 200,
    marginHorizontal: 200,
    height: 50,
    width: 150,
  },
});
