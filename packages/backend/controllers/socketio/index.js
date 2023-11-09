import { Server } from 'socket.io';
import { createServer } from 'node:http';

export const setupSocket = (app) => {
  const server = createServer(app);
  return new Server(server);
};

const handlePing = (socket) => {
  socket.emit('ping', { message: 'pong' });
};

const handleDisconnect = () => {
  console.log('SOCKET DISCONNECTED');
};

const handleTestSocketEvent = (socket) => {
  socket.emit('testSocketEvent', { foo: 'bar' });
};

const setupDefaultEvents = (socket) => {
  socket.on('ping', () => handlePing(socket));
  socket.on('disconnect', () => handleDisconnect(socket));
  socket.on('testSocketEvent', () => handleTestSocketEvent(socket));
};

export const setupSocketEventHandlers = (socket) => {
  setupDefaultEvents(socket);
};
