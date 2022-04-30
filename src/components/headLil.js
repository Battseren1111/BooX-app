import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {IconButton} from '../common/icon-button';

export const HeadLil = ({onPress, title, icon}) => (
  <View style={styles.head}>
    <View style={styles.header}>
      <IconButton icon={icon} onPress={onPress} color={colors.primary} />
      <CText style={[text.lgThin, {marginLeft: size.md, color: colors.card}]}>
        {title}
      </CText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  head: {
    width: '95%',
    paddingVertical: size.lg,
    paddingHorizontal: size.lg,
  },
  header: {
    ...layout.hsb,
    ...layout.center,
  },
});
