import Toast from 'react-native-toast-message';
import { store } from '../redux/store';
import axios from 'axios';

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error.response;
  },
);

const serviceHandler = async ({ callback, errorMessage, successMessage, token }) => {
  try {
    axios.interceptors.request.use(config => {
      config.baseURL = store.getState().api.apiInstance;
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    });

    const response = await callback(axios);

    if (response.status >= 300) {
      throw new Error(errorMessage || response.data?.message);
    }

    if (successMessage || response.data?.message) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: successMessage || response.data?.message,
        visibilityTime: 3000,
      });
    }

    return {
      success: true,
      data: response.data || null,
    };
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.message || 'Something went wrong',
      visibilityTime: 3000,
    });

    return {
      success: false,
      data: null,
    };
  }
};

export default serviceHandler;
