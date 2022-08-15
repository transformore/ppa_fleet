import { Text, Modal, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import ModalPicker from './ModalPicker';
import styles from './styles';
import InputLabel from '../Input/InputLabel';

const InputDropdown = ({
  label = 'Jenis Perusahaan',
  data,
  choosenData,
  setChoosenData,
  renderText,
  virtualizedListProps,
  isCustom,
  customKey,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModalVisibility = bool => setIsModalVisible(bool);
  const setData = option => setChoosenData(option);

  return (
    <SafeAreaView>
      <InputLabel label={label} />
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => setIsModalVisible(true)}>
        <Text style={styles.text}>{choosenData}</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker
          renderText={renderText}
          changeModalVisibility={changeModalVisibility}
          setData={setData}
          data={data}
          virtualizedListProps={virtualizedListProps}
          isCustom={isCustom}
          customKey={customKey}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default InputDropdown;
