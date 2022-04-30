import React from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Head} from '../components/head';
import {accUser} from '../demoBook';

const Item = ({title, data}) => (
  <View style={styles.item}>
    <CText style={[text.mdThin, {color: 'black', marginVertical: 10}]}>
      {title}
    </CText>
    <View style={styles.info}>
      <Text style={{marginLeft: 10}}>{data}</Text>
    </View>
  </View>
);

export const AccountScreen = ({route}) => {
  const {goBack} = useNavigation();
  const {title, icon} = route.params;

  return (
    <SafeAreaView style={styles.root}>
      <Head onPress={() => goBack()} title={title} icon={icon} />
      <View>
        <Item title="Нэр" data={accUser.firstname} />
        <Item title="Имэйл" data={accUser.email} />
        <Item title="Утас" data={accUser.phone} />
        <Item title="Нууц үг" data={accUser.password} secureTextEntry={false} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  item: {
    marginHorizontal: 30,
    flexDirection: 'row',
    ...layout.hsb,
  },
  info: {
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'flex-start',
    paddingVertical: 8,
    width: 230,
    backgroundColor: colors.pinkOrange,
  },
});
