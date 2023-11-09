import dotenv from 'dotenv';
import { setupTestSocket, waitFor } from '__test__/helpers';

dotenv.config({ path: '.env.local' });

describe('socket.io', () => {
  // eslint-disable-next-line
  let clientSocket, httpServer, io, serverSocket;
  beforeEach(async () => {
    const testSocket = await setupTestSocket();

    httpServer = testSocket.httpServer;
    io = testSocket.io;
    serverSocket = testSocket.serverSocket;
    clientSocket = testSocket.clientSocket;
  });

  afterEach(async () => {
    serverSocket.disconnect();
    clientSocket.disconnect();
    await httpServer.close();
    io.close();
  });

  it('responds to ping', async () => {
    clientSocket.emit('ping');
    const response = await waitFor(clientSocket, 'ping');
    expect(response.message).toBe('pong');
  });
});
