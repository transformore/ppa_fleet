import { io } from 'socket.io-client';

const URL_TRANSPORTATION = 'https://socket-fleet.herokuapp.com/transportations';

const socket = {
  transportations: io(URL_TRANSPORTATION, {
    autoConnect: false,
    transports: ['websocket'],
    reconnection: true,
  }),
};

export default socket;
