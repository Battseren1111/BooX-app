import React, {useContext, useState} from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Header} from '../components/header';
import {Avatar} from '../common/avatar';
import {IconButton} from '../common/icon-button';
import {useNavigation} from '@react-navigation/native';
import {authentication} from '../firebase/firebase-config';
import {signOut} from 'firebase/auth';
import {AuthContext} from '../contexts/AuthContext';
import {launchImageLibrary} from 'react-native-image-picker';

export const ProfileScreen = () => {
  const {navigate} = useNavigation();
  const {userLogout} = useContext(AuthContext);

  const Item = ({icon, color, title, route}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigate(route, {title, icon})}>
      <IconButton icon={icon} color={color} />
      <CText style={{marginLeft: size.lg, color: colors.card}}>{title}</CText>
    </TouchableOpacity>
  );

  const [imageUriGallary, setimageUriGallary] = useState(
    require('../images/profileMinii.jpeg'),
  );

  const handleChoosePhoto = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
        skipBackups: true,
        saveToPhotos: true,
      },
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      {
        console.log('AAA', response);
        if (response.assets) {
          const aa = response.assets[0];
          setimageUriGallary(aa);
        } else {
          return;
        }
      }
    });
  };

  const SignOutUser = () => {
    signOut(authentication)
      .then(re => {
        // setIsSignedIn(false);
        userLogout();
        console.log('log out successfully');
      })
      .catch(err => {
        console.log('log out error');
      });
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header profile />
      <View style={styles.img}>
        <Avatar img={imageUriGallary} lg />
        <TouchableOpacity
          onPress={handleChoosePhoto}
          style={{
            padding: 5,
            backgroundColor: colors.inputTextColor,
            marginTop: 5,
            borderRadius: 15,
          }}>
          <CText
            style={{paddingVertical: size.md, ...text.sm, color: colors.card}}>
            Зураг солих
          </CText>
        </TouchableOpacity>
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
            color: colors.card,
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
      <View style={styles.exit}>
        <TouchableOpacity onPress={userLogout}>
          <CText style={{color: 'white'}}>Гарах</CText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {flex: 1},
  exit: {
    marginTop: 150,
    borderRadius: 10,
    height: 40,
    marginHorizontal: 150,
    backgroundColor: colors.primary,
    ...layout.center,
  },
  img: {
    justifyContent: 'center',
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
    marginTop: 15,
    paddingHorizontal: size.lg * 2,
  },
});
