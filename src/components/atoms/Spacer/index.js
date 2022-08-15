import { View } from 'react-native';
import React from 'react';

const Spacer = ({ width = '100%', height, backgroundColor, ...propStyle }) => {
  return <View style={[{ width, height, backgroundColor }, propStyle]} />;
};

export default Spacer;
