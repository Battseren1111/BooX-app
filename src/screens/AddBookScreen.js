import React, {useEffect, useState} from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Head} from '../components/head';
import {launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';

const ChoosePhoto = ({title, handler, imageUriGallary}) => (
  <View style={styles.choosePhoto}>
    <View style={styles.titleAndButton}>
      <CText
        style={[
          text.mdThin,
          {color: 'black', marginLeft: size.md, marginVertical: 2},
        ]}>
        {title}
      </CText>
      <View style={styles.chooseButton}>
        <Button title={'Сонгох'} color="white" onPress={handler} />
      </View>
    </View>

    <Image
      source={imageUriGallary}
      style={{
        marginLeft: 15,
        height: 130,
        width: 100,
        borderWidth: 1,
        borderColor: '#b8b8b8',
        justifyContent: 'center',
      }}></Image>
  </View>
);
const NameInput = ({title}) => (
  <View style={styles.item}>
    <CText
      style={[
        text.mdThin,
        {color: 'black', marginLeft: size.md, marginVertical: 2},
      ]}>
      {title}
    </CText>
    <TextInput style={styles.input} />
  </View>
);

const AuthorInput = ({title}) => (
  <View style={styles.item}>
    <CText
      style={[
        text.mdThin,
        {color: 'black', marginLeft: size.md, marginVertical: 2},
      ]}>
      {title}
    </CText>
    <TextInput style={styles.input} />
  </View>
);

const DateInput = ({title}) => (
  <View style={styles.item}>
    <CText
      style={[
        text.mdThin,
        {color: 'black', marginLeft: size.md, marginVertical: 2},
      ]}>
      {title}
    </CText>
    <TextInput style={styles.input} />
  </View>
);

const BookContent = ({title}) => (
  <View style={styles.item}>
    <CText
      style={[
        text.mdThin,
        {color: 'black', marginLeft: size.md, marginVertical: 2},
      ]}>
      {title}
    </CText>
    <TextInput multiline style={styles.contentInput} />
  </View>
);

const UploadDoc = ({title, fileHandler}) => (
  <View style={styles.item}>
    <CText
      style={[
        text.mdThin,
        {color: 'black', marginLeft: size.md, marginVertical: 2},
      ]}>
      {title}
    </CText>
    <View style={styles.uploadDoc}>
      <CText
        style={
          (styles.uploadText,
          {color: 'black', marginLeft: size.md, marginVertical: 2})
        }>
        PDF,Doc файл сонгоно уу
      </CText>
      <View style={styles.chooseButton}>
        <Button title={'Сонгох'} color="white" onPress={fileHandler} />
      </View>
    </View>
  </View>
);

export const AddBookScreen = ({route}) => {
  const {goBack} = useNavigation();
  const [imageUriGallary, setimageUriGallary] = useState('');

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

  const chooseFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res[0].name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Head title={'Ном нэмэх'} onPress={() => goBack()} icon={'add-circle'} />
      <ScrollView style={styles.mainContainer}>
        <ChoosePhoto
          title="Зурах оруулах"
          handler={handleChoosePhoto}
          imageUriGallary={imageUriGallary}
        />
        <NameInput title="Нэр" />
        <AuthorInput title="Зохиолч" />
        <DateInput title="Хэвлэгдсэн он" />
        <BookContent title="Товч агуулга" />
        <UploadDoc
          title="Номоо оруулах"
          fileHandler={
            chooseFile
            // () =>
            // DocumentPicker.pickMultiple()
            //   .then(res => console.log(res))
            //   .catch(e => console.log(e))
          }
        />
        <View style={styles.btn}>
          <TouchableOpacity style={styles.button}>
            <CText style={styles.text1}>Нэмэх</CText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {flex: 1},
  input: {
    backgroundColor: colors.inputTextColor,
    borderRadius: 20,
    padding: 13,
  },
  chooseButton: {
    marginLeft: size.sm,
    backgroundColor: '#CFCFCF',
    margin: 5,
    borderRadius: 15,
    width: 100,
    padding: 2,
  },
  choosePhoto: {
    flexDirection: 'row',
  },
  titleAndButton: {
    marginLeft: 20,
  },
  item: {
    marginVertical: size.sm,
    paddingHorizontal: size.lg,
  },
  contentInput: {
    backgroundColor: colors.inputTextColor,
    borderRadius: 20,
    padding: 13,
    paddingTop: 13,
    width: '100%',
    height: 150,
    alignSelf: 'flex-end',
  },
  uploadDoc: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.inputTextColor,
    borderRadius: 20,
    padding: 13,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.button,
    padding: 13,
    width: 154,
    height: 42,
    borderRadius: 20,
  },
  btn: {
    marginVertical: 10,
    alignItems: 'center',
  },
  text1: {
    color: 'white',
  },
});
