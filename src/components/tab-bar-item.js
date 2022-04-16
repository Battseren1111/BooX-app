import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {size} from '../styles';

export function TabBarItem({state, descriptors, navigation}) {
  const {colors} = useTheme();
  return (
    <View style={[styles.tabBar, {backgroundColor: '#FFEEE3'}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const tabColor = isFocused ? colors.primary : colors.text;

        return (
          index !== 5 && (
            <TouchableOpacity
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tab}
              key={index}>
              <Icon
                name={options.icon}
                size={size.iconLg - 5}
                style={{color: tabColor}}
              />
            </TouchableOpacity>
          )
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: size.xl,
    borderTopEndRadius: size.lg + 20,
    borderTopStartRadius: size.lg + 20,
  },
  tab: {
    padding: size.lg,
  },
});
