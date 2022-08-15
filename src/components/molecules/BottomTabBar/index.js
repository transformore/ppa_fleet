import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../utils/colors';
import IconBottomTabBar from './IconBottomTabBar';
import styles from './styles';

const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.bottomTabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
            key={index}>
            <IconBottomTabBar label={label} isFocused={isFocused} />
            <Text
              style={[
                styles.text,
                { color: isFocused ? colors.text.blue : colors.text.gray },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
