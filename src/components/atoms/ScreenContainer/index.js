import React from 'react';
import { ScrollView, View } from 'react-native';
import defaultValue from '../../../utils/defaultValue';
import HeaderBar from '../HeaderBar';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

function isScrollable(
  boolean,
  {
    horizontal,
    paddingHorizontal,
    children,
    onScroll,
    refreshControl,
    extendStyle,
  },
) {
  switch (boolean) {
    case true:
      return (
        <ScrollView
          onScroll={onScroll}
          showsVerticalScrollIndicator={false}
          refreshControl={refreshControl}
          horizontal={horizontal}
          contentContainerStyle={[
            styles.scrollabeContainer({ paddingHorizontal }),
            extendStyle,
          ]}>
          {children}
        </ScrollView>
      );
    case false:
      return (
        <View
          style={[
            styles.nonScrollableContainer({ paddingHorizontal }),
            extendStyle,
          ]}>
          {children}
        </View>
      );
    default:
      break;
  }
}

const ScreenContainer = ({
  children,
  paddingHorizontal = defaultValue.spacing.extraLarge,
  scrollable = true,
  onScroll,
  headerBarTitle,
  refreshControl,
  extendStyle,
  horizontal,
  cleanUp,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {headerBarTitle && (
        <View style={styles.headerBarContainer}>
          <HeaderBar title={headerBarTitle} onPress={cleanUp} />
        </View>
      )}
      {isScrollable(scrollable, {
        paddingHorizontal,
        children,
        onScroll,
        refreshControl,
        extendStyle,
        horizontal,
      })}
    </SafeAreaView>
  );
};

export default ScreenContainer;
