import { createServer } from 'node:http';
import { io as ioc } from 'socket.io-client';
import { Server } from 'socket.io';

export const setupMockSocket = () => {
  let io, serverSocket, clientSocket;

  beforeAll((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = ioc(`ws://localhost:${port}`);
      clientSocket.on('connection', (socket) => {
        serverSocket = socket;
      });
      clientSocket.on('connect', done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.disconnect();
  });

  return { io, serverSocket, clientSocket };
};
