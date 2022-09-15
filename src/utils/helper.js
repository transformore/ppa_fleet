import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Toast from 'react-native-toast-message';
import socket from '../../socket';
import { loadingActions } from '../redux/loadingSlice';
import { store } from '../redux/store';

const helper = {};

helper.hasLocationPermission = async () => {
  const hasPermission = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

  if (hasPermission) {
    return true;
  }

  const status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

  if (status === RESULTS.GRANTED) {
    return true;
  }

  if (status === RESULTS.DENIED) {
    Toast.show({
      type: 'error',
      text1: 'Location permission denied',
    });
  } else if (status === RESULTS.NEVER_ASK_AGAIN) {
    Toast.show({
      type: 'error',
      text1: 'Location permission revoked',
    });
  }

  return false;
};

helper.isSocketConnected = () => {
  socket.transportations.connect();

  store.dispatch(
    loadingActions.setLoading({
      isLoading: true,
      text: 'connecting to socket',
    }),
  );

  socket.transportations.on('connect', () => {
    store.dispatch(
      loadingActions.setLoading({
        isLoading: socket.transportations.connected,
        text: '',
      }),
    );
  });
};

export default helper;
