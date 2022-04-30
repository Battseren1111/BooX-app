import React from 'react';
import {CText} from './common/c-text';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {size, text, colors} from './styles';

export const Greetings = () => (
  <View style={styles.greetings}>
    <CText style={{color: colors.card}}>Сайн уу Батаа !</CText>
    <CText style={text.mdThin}>Өнөөдөр ямар ном унших гэж байна ?</CText>
  </View>
);

const styles = StyleSheet.create({
  greetings: {
    marginVertical: size.lg,
    paddingHorizontal: size.lg + size.md,
  },
});
