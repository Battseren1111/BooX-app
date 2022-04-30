import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {colors, layout, size, text} from '../styles';
import {CText} from './c-text';

export const FilledButton = ({onPress, lg, title, bc, color}) => {
  const styles = StyleSheet.create({
    style: {
      backgroundColor: bc ? bc : colors.primary,
      paddingVertical: size.md,
      paddingHorizontal: lg ? size.xl : size.iconLg,
      ...layout.center,
      borderRadius: size.md,
      marginVertical: size.sm,
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.style}>
      <CText style={[text.mdThin, {color: 'white'}]}>{title}</CText>
    </TouchableOpacity>
  );
};
