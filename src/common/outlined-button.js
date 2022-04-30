import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {colors, layout, size, text} from '../styles';
import {CText} from './c-text';

export const OutlinedButton = ({onPress, lg, title, bc, color}) => {
  const styles = StyleSheet.create({
    style: {
      borderRadius: 15,
      borderWidth: 2,
      borderColor: bc ? bc : colors.primary,
      paddingVertical: size.md,
      paddingHorizontal: lg ? size.xl : size.iconLg,
      ...layout.center,
      marginVertical: size.sm,
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.style}>
      <CText style={[text.md, {color: color}]}>{title}</CText>
    </TouchableOpacity>
  );
};
