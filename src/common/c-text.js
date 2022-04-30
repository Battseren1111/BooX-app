import React from 'react';
import {Text} from 'react-native';
import {colors} from '../styles';

export const CText = props => {
  return <Text style={[{color: colors.text}, props.style]} {...props} />;
};
