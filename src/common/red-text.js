import React from 'react';
import {Text} from 'react-native';

export const RedText = props => {
  return (
    <Text {...props} style={[props.style, {color: '#C42A0C', fontSize: 12}]}>
      {props.children}
    </Text>
  );
};
