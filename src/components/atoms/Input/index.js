import React from 'react';
import { TextInput, View } from 'react-native';
import InputLabel from './InputLabel';
import styles from './styles';

const Input = ({ label, editable = true, handleFormValueChange, width, height = 40, formKey, ...rest }) => {
  return (
    <View style={{ width }}>
      {label && <InputLabel label={label} />}
      {handleFormValueChange ? (
        <TextInput
          style={styles.input(editable)}
          editable={editable}
          onChange={event => handleFormValueChange(formKey, event.nativeEvent.text)}
          {...rest}
        />
      ) : (
        <TextInput style={styles.input(editable, height)} editable={editable} {...rest} />
      )}
    </View>
  );
};

export default Input;
