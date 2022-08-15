import React from 'react';
import { HomeIcon, UserCircleIcon } from '../../../assets/icons';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

const IconBottomTabBar = ({ label, isFocused }) => {
  switch (label) {
    case 'Dashboard':
      return (
        <HomeIcon
          height={defaultValue.icon.large}
          width={defaultValue.icon.large}
          style={{ color: isFocused ? colors.text.blue : colors.text.gray }}
        />
      );
    case 'Akun':
      return (
        <UserCircleIcon
          height={defaultValue.icon.large}
          width={defaultValue.icon.large}
          style={{ color: isFocused ? colors.text.blue : colors.text.gray }}
        />
      );
    default:
      return (
        <HomeIcon
          height={defaultValue.icon.large}
          width={defaultValue.icon.large}
          style={{ color: isFocused ? colors.text.blue : colors.text.gray }}
        />
      );
  }
};

export default IconBottomTabBar;
