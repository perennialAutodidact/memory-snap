import { io as ioc } from 'socket.io-client';
import { createServer } from 'http';
import { Server } from 'socket.io';
import {
  setupSocketEventHandlers,
  socketEventHandlers,
} from 'controllers/socketio';

/**
 *
 * @param {Socket} emitter Socket.io instance
 * @param {string} event name of the event for which the socket should wait
 * @returns Promise which resolves when the event is emitted by the socket
 */
export const waitFor = (emitter, event) =>
  new Promise((resolve) => {
    emitter.once(event, resolve);
  });

export const setupTestSocket = async () => {
  const httpServer = createServer();
  const io = new Server(httpServer);
  httpServer.listen(process.env.SOCKET_PORT);

  const clientSocket = ioc(`ws://localhost:${process.env.SOCKET_PORT}`, {
    transports: ['websocket'],
  });

  let serverSocket;
  io.on('connection', (socket) => {
    setupSocketEventHandlers(socket, socketEventHandlers);
    serverSocket = socket;
  });

  await waitFor(clientSocket, 'connect');

  return { httpServer, io, clientSocket, serverSocket };
};
