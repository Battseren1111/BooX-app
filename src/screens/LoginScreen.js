import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
  Image,
} from 'react-native';
import {BlackText} from '../common/black-text';
import {BlueText} from '../common/blue-text';
import {CText} from '../common/c-text';
import {GreyText} from '../common/grey-text';
import {IconButton} from '../common/icon-button';
import {OutlinedButton} from '../common/outlined-button';
import {colors, layout, size, text} from '../styles';

export const LoginScreen = ({navigation}) => {
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
              <TextInput style={styles.input} />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <GreyText>Нууц үг</GreyText>
            <View style={[layout.hsb, {flex: 1}]}>
              <IconButton icon="lock-closed-outline" color={colors.primary} />
              <TextInput style={styles.input} secureTextEntry={true} />
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
              onPress={() => navigation.navigate('Tabs')}
              color={colors.primary}
            />
            <OutlinedButton
              title="Бүртгүүлэх"
              onPress={() => navigation.navigate('RegisterScreen')}
              color={colors.card}
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
    justifyContent: 'center'
  },
});
