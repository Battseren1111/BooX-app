import React from 'react';
import {CText} from '../common/c-text';
import {Head} from '../components/head';
import {colors, layout, size, text} from '../styles';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {Header} from '../components/header';
import {Avatar} from '../common/avatar';
import {IconButton} from '../common/icon-button';
import {useNavigation} from '@react-navigation/native';

export const OrderScreen = ({navigation, route}) => {
  const {goBack} = useNavigation();
  const {bookPriceData} = route.params;
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <IconButton
          style={layout.center}
          icon="arrow-back"
          onPress={() => goBack()}
          color={colors.text}
        />
        <View style={styles.box1}>
          <Image source={require('../images/logo.png')} style={styles.img} />
          <CText style={styles.headerText}>BooX</CText>
        </View>
      </View>
      <CText style={styles.orderTitle}>Төлбөр төлөх</CText>
      <CText style={styles.orderSubTitle}>
        Төлбөр зохих дүн:
        <Text style={{color: 'green', fontSize: 15}}>
          {'  '}
          {bookPriceData.price}
        </Text>
      </CText>
      <CText style={{marginTop: 15, marginLeft: 10}}>Хүргүүлэх хаяг</CText>
      <TextInput
        style={styles.input}
        multiline
        placeholder="БГД 3-р хороо 45 байр. Хуучнаар өндөр 3н байр 8899**** залгаарай"
      />
      <CText style={styles.title2}>Төлбөр төлөх аргаа сонгоно уу?</CText>
      <View style={styles.bankIcons}>
        <View style={styles.iconBox}>
          <TouchableOpacity>
            <Image
              style={styles.iconImage}
              source={require('../images/khanbank.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconImage}
              source={require('../images/Qpay.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconBox}>
          <TouchableOpacity>
            <Image
              style={styles.iconImage}
              source={require('../images/storepay.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconImage}
              source={require('../images/storepay2.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconBox}>
          <TouchableOpacity>
            <Image
              style={styles.iconImage}
              source={require('../images/golomt.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconImage}
              source={require('../images/hipay.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
  },
  box1: {
    marginLeft: '28%',
    flexDirection: 'row',
  },
  img: {
    height: size.lg + 20,
    width: size.lg + 20,
  },
  headerText: {
    marginTop: 8,
    color: colors.primary,
    marginHorizontal: size.sm,
    ...text.lg,
  },
  orderTitle: {
    marginTop: 15,
    fontSize: 25,
  },
  orderSubTitle: {
    fontSize: 15,
    marginTop: 15,
  },
  input: {
    marginTop: 5,
    borderRadius: 15,
    paddingTop: 10,
    padding: 10,
    backgroundColor: colors.inputTextColor,
    height: 100,
  },
  title2: {
    marginTop: 20,
    marginLeft: 10,
  },
  bankIcons: {
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: colors.inputTextColor,
  },
  iconBox: {
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  iconImage: {
    borderWidth: 2,
    borderColor: colors.primary,
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});

export default OrderScreen;
