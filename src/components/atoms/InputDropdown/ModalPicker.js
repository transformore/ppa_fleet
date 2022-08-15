import { Text, View, TouchableOpacity, Dimensions, ScrollView, VirtualizedList } from 'react-native';
import React from 'react';
import Spacer from '../Spacer';
import styles from './styles';

const modalPicker = ({
  data,
  changeModalVisibility,
  setData,
  renderText,
  isCustom = false,
  virtualizedListProps,
  customKey,
}) => {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  const onPressItem = option => {
    changeModalVisibility(false);
    setData(option);
  };

  if (isCustom) {
    return (
      <TouchableOpacity style={styles.container} onPress={() => changeModalVisibility(false)}>
        <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
          <VirtualizedList
            data={data}
            initialNumToRender={10}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.option}
                  key={customKey ? customKey(item) : item.id}
                  onPress={() => onPressItem(item)}>
                  <Spacer height={10} style={styles.spacing} />
                  <Text style={styles.textPicker}>{renderText(item)}</Text>
                  <Spacer height={10} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => (customKey ? customKey(item) : item.id)}
            getItemCount={() => data.length}
            getItem={(item, index) => item[index]}
            {...virtualizedListProps}
          />
        </View>
      </TouchableOpacity>
    );
  }

  const option = data.map((item, index) => {
    return (
      <TouchableOpacity style={styles.option} key={index} onPress={() => onPressItem(item)}>
        <Spacer height={10} style={styles.spacing} />
        <Text style={styles.textPicker}>{item}</Text>
        <Spacer height={10} />
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity style={styles.container} onPress={() => changeModalVisibility(false)}>
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default modalPicker;
