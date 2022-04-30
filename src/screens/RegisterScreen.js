import React from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {Picker} from '@react-native-picker/picker';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {OutlinedButton} from '../common/outlined-button';
import {IconButton} from '../common/icon-button';
import {useState} from 'react';
import {authentication} from '../firebase/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const ItemHide = ({title, value, setValue, visible, setVisible}) => (
  <View style={styles.item}>
    <CText
      style={[
        text.md,
        {color: 'white', marginLeft: size.md, marginVertical: 2},
      ]}>
      {title}
    </CText>
    <View style={styles.passwordContainer}>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        style={styles.passwordInput}
        secureTextEntry={visible}
      />
      <IconButton
        icon="eye"
        color={colors.card}
        s
        onPress={() => setVisible(!visible)}
      />
    </View>
  </View>
);

const Item = ({title}) => (
  <View style={styles.item}>
    <CText
      style={[
        text.md,
        {color: 'white', marginLeft: size.md, marginVertical: 2},
      ]}>
      {title}
    </CText>
    <TextInput style={styles.input} />
  </View>
);

const AgeItem = ({title}) => (
  <View style={styles.item}>
    <CText
      style={[
        text.md,
        {color: 'white', marginLeft: size.md, marginVertical: 2},
      ]}>
      {title}
    </CText>
    <TextInput style={styles.input} keyboardType="numeric" MaxLength={3} />
  </View>
);

const EmailItem = ({title, setValue}) => (
  <View style={styles.item}>
    <CText
      style={[
        text.md,
        {color: 'white', marginLeft: size.md, marginVertical: 2},
      ]}>
      {title}
    </CText>
    <TextInput
      style={styles.input}
      keyboardType="email-address"
      onChangeText={text => setValue(text)}
    />
  </View>
);

export const RegisterScreen = ({route}) => {
  const [isInSignedIn, setIsSignIn] = useState(false);
  const {goBack, navigate} = useNavigation();
  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const [name, setName] = useState('');
  const [ageNumber, setAgeNumber] = useState();

  const registerUser = () => {
    console.log(email);
    console.log(pass);
    createUserWithEmailAndPassword(authentication, email, pass)
      .then(re => {
        // Signed in
        console.log(re);
        isInSignedIn(true);
        // ...
      })
      .catch(re => {
        console.log(re);
      });
  };

  return (
    <SafeAreaView style={[styles.root, {backgroundColor: colors.primary}]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.header}>
        <CText style={[text.heading, {color: 'white'}]}>Бүртгүүлэх</CText>
        <CText style={[text.sm, {color: 'white'}]}>
          Шинээр бүртгэл үүсгэхийн тул та дараахын бүрэн бөглөсөн байх
          шаардлагатай
        </CText>
        <Item title="Нэр" value={name} setValue={setName} />
        <EmailItem
          title="Цахим шуудан"
          value={email}
          setValue={setEmail}
          onChangeText={text => setEmail(text)}
        />
        <ItemHide
          title="Шинэ нууц үг"
          value={pass}
          setValue={setPass}
          visible={visible}
          setVisible={setVisible}
          onChangeText={text => setPass(text)}
        />
        <ItemHide
          title="Нууц үг давтах"
          value={pass1}
          setValue={setPass1}
          visible={visible1}
          setVisible={setVisible1}
        />
        <AgeItem title="Нас" value={ageNumber} setValue={setAgeNumber} />
        <OutlinedButton
          title="Бүртгүүлэх"
          bc={'white'}
          color={'white'}
          onPress={() => {
            {
              registerUser();
            }
            navigate('LoginScreen');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    paddingHorizontal: size.lg + 16,
    paddingTop: size.md,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 13,
  },

  item: {
    marginVertical: size.sm,
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },
  passwordInput: {
    width: 260,
    paddingLeft: 5,
  },
});
