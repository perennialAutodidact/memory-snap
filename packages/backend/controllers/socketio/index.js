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
  console.warn('SOCKET DISCONNECTED');
};

const setupDefaultEvents = (socket) => {
  socket.on('ping', () => handlePing(socket));
  socket.on('disconnect', () => handleDisconnect(socket));
};

export const setupSocketEventHandlers = (socket) => {
  setupDefaultEvents(socket);
};
