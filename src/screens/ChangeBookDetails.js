import React, {useState} from 'react';
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
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {OutlinedButton} from '../common/outlined-button';
import {Head} from '../components/head';
import {IconButton} from '../common/icon-button';
import {checkBookData} from '../demoBook';
import CheckBox from '@react-native-community/checkbox';
import {FilledButton} from '../common/filled-button';

const WIDTH = Dimensions.get('window').width;

export const ChangeBookDetails = ({route}) => {
  const {goBack} = useNavigation();
  const {userBookData} = route.params;
  const {navigate} = useNavigation();

  const renderItem = item => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
      <View style={styles.checkBoxV}>
        <View style={styles.lilbox}>
          <CheckBox
            lineWidth={2}
            onCheckColor={colors.primary}
            onTintColor={colors.primary}
            tintColor={colors.card}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
        </View>
        <Text style={{marginLeft: 10, marginTop: 7}}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.mainContainer}>
        <IconButton
          icon="arrow-back"
          onPress={() => goBack()}
          color={colors.text}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bigMainContainer}>
            <View style={styles.mainContainer2}>
              <Image
                style={{
                  height: (WIDTH / 3) * 1.53153,
                  width: WIDTH / 3,
                  borderRadius: 15,
                }}
                source={userBookData.img}
              />
              <Text style={styles.title}>{userBookData.title}</Text>
              <Text style={styles.author}>{userBookData.author}</Text>
            </View>
            <View style={styles.mainContainer1}>
              <Text style={styles.des}>{'Товч агуулга'}</Text>
              <Text style={styles.description}>{userBookData.description}</Text>
            </View>
          </View>
          <View>
            <View style={styles.textView}>
              <Text style={styles.text}>
                Та солих хүсэлтэй номоо сонгоно уу
              </Text>
              <View style={styles.background}>
                {checkBookData.map(eva => renderItem(eva))}
              </View>
            </View>
          </View>
          <View style={styles.buttonV}>
            <FilledButton
              onPress={() =>
                Alert.alert(
                  'Хүсэлт амжилттай илгээгдлээ. Та хариу өгтөл түр хүлээнэ үү',
                )
              }
              lg
              color={colors.primary}
              title="Хүсэлт илгээх"></FilledButton>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {flex: 1},
  mainContainer2: {
    ...layout.center,
    marginTop: 25,
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
    marginTop: 5,
    fontSize: size.lg,
  },
  author: {
    color: colors.card,
    fontSize: size.mdThin,
  },
  des: {
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  description: {
    flex: 1,
    flexWrap: 'wrap',
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
  mainContainer1: {},
  text: {
    color: colors.card,
    marginTop: 15,
  },
  textView: {
    ...layout.center,
  },
  checkBoxV: {
    marginLeft: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  background: {
    marginTop: 7,
    borderRadius: 15,
    width: WIDTH / 1.3,
    backgroundColor: colors.pinkOrange,
  },
  buttonV: {
    paddingVertical: 3,
    ...layout.center,
  },
  lilbox: {},
});
