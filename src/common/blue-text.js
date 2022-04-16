import React from 'react';
import {Text} from 'react-native';
import {colors} from '../styles';

export const BlueText = props => {
  return (
    <Text
      {...props}
      style={[
        {
          color: colors.primary,
          fontSize: props.lg ? 20 : props.md ? 18 : 15,
          fontWeight: props.l ? 'normal' : 'bold',
        },
        props.style,
      ]}
    />
  );
};
