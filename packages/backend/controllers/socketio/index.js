import { Server } from 'socket.io';
import * as http from 'http';

const setupSocket = (app) => {
  const server = http.createServer(app);
  return new Server(server);
};

//
const handleSocketDisconnect = () => {
  console.log('SOCKET DISCONNECTED');
};

const handlers = {
  connect: (app) => {
    const server = http.createServer(app);
  },
};

export { handleSocketDisconnect, setupSocket };
