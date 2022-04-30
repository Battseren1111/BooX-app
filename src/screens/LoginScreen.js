import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
  Image,
} from 'react-native';
import {BlueText} from '../common/blue-text';
import {CText} from '../common/c-text';
import {GreyText} from '../common/grey-text';
import {IconButton} from '../common/icon-button';
import {OutlinedButton} from '../common/outlined-button';
import {colors, layout, size, text} from '../styles';
import {authentication} from '../firebase/firebase-config';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {AuthContext} from '../contexts/AuthContext';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const {userLogin, userLogout} = useContext(AuthContext);

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication, email, pass)
      .then(re => {
        console.log('user logged in', re._tokenResponse.idToken);
        userLogin(re._tokenResponse.idToken);
        navigation.navigate('Tabs');
      })
      .catch(re => {
        console.log('error', re);
        alert('Буруу байна, Та бүртгэлээ шалгаад дахин оролдоно уу');
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      // behavior="padding"
    >
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.root}
        source={require('../images/bg.jpg')}
        blurRadius={15}
        resizeMode="stretch">
        <View style={styles.box1}>
          <Image source={require('../images/logo.png')} style={styles.img} />
          <CText
            style={{
              color: colors.primary,
              marginHorizontal: size.sm,
              ...text.lg,
            }}>
            BooX
          </CText>
        </View>
        <View style={styles.box2}>
          <View style={{flex: 1}}>
            <BlueText lg>Тавтай морил</BlueText>
          </View>
          <View style={styles.inputWrapper}>
            <GreyText>Нэвтрэх нэр</GreyText>
            <View style={[layout.hsb, {flex: 1}]}>
              <IconButton icon="person-outline" color={colors.primary} />
              <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <GreyText>Нууц үг</GreyText>
            <View style={[layout.hsb, {flex: 1}]}>
              <IconButton
                icon="lock-closed-outline"
                color={colors.primary}
                // onPress={SignOutUser()}
              />
              <TextInput
                style={styles.input}
                value={pass}
                onChangeText={text => setPass(text)}
                secureTextEntry={true}
              />
              <IconButton icon="eye" color={colors.primary} />
            </View>
          </View>
          <View style={[layout.hsb, {width: '100%'}]}>
            <View style={layout.hsb}>
              <IconButton icon="square-outline" color={colors.primary} />
              <GreyText style={{marginLeft: size.ms}}>Сануулах</GreyText>
            </View>
            <GreyText style={{textDecorationLine: 'underline'}}>
              Нууц үг мартсан
            </GreyText>
          </View>
          <View style={styles.btn}>
            <OutlinedButton
              title="Нэврэх"
              onPress={SignInUser}
              color={colors.primary}
            />
            <OutlinedButton
              title="Бүртгүүлэх"
              onPress={() => navigation.navigate('RegisterScreen')}
              color={colors.primary}
              bc="transparent"
            />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.9,
    backgroundColor: colors.primary,
    ...layout.center,
  },
  box2: {
    flex: 2,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    alignItems: 'center',
    paddingHorizontal: size.lg,
  },
  box1: {
    flex: 1,
    ...layout.hsb,
    ...layout.center,
  },
  img: {
    height: size.lg + 20,
    width: size.lg + 20,
  },
  inputWrapper: {
    flex: 1,
    width: '100%',
    marginVertical: size.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
    paddingLeft: size.md,
    width: '100%',
    ...text.mdThin,
    color: 'white',
  },
  btn: {
    flex: 3,
    width: '80%',
    justifyContent: 'center',
  },
});
