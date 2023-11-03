import { Server } from 'socket.io';
import { createServer } from 'node:http';

const setupSocket = (app) => {
  const server = createServer(app);
  return new Server(server);
};

//
const disconnect = () => {
  console.log('SOCKET DISCONNECTED');
};

const handleSocketEvents = (socket, handlers) =>
  Object.keys(handlers).forEach((eventName) =>
    socket.on(eventName, handlers[eventName])
  );

const socketEventHandlers = {
  disconnect,
};

export { handleSocketEvents, setupSocket, socketEventHandlers };
