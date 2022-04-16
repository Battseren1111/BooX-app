import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {colors, layout} from '../styles';

export const Avatar = ({img, lg, m}, props) => {
  const styles = StyleSheet.create({
    ...props.style,
    avatar: {},
    img: {
      borderRadius: lg ? 72 : 64,
      borderWidth: lg ? 2 : 0,
      borderColor: colors.primary,
      width: lg ? 100 : m ? 80 : 64,
      height: lg ? 100 : m ? 80 : 64,
      resizeMode: 'cover',
    },
  });

  return (
    <View style={styles.avatar}>
      <Image source={img} style={styles.img} />
    </View>
  );
};
