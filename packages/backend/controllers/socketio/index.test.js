const attachHandlersToSocket = (socket, handlers) =>
  Object.keys(handlers).map((eventName) =>
    socket.on(eventName, handlers[eventName])
  );

export { attachHandlersToSocket };
