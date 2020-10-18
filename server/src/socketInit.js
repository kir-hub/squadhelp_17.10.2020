const socketio = require('socket.io');
const ChatController = require('./server/controllers/sockets/ChatController');
const NotificationController = require(
  './server/controllers/sockets/NotificationController');

// let notificationController;
// let ChatController;

module.exports.createConnection = (httpServer) => {
  const io = socketio.listen(httpServer);
  NotificationController.connect('/notifications', io);
  ChatController.connect('/chat', io);

};

module.exports.getChatController = () => {
  return ChatController;
};

module.exports.getNotificationController = () => {
  return NotificationController;
};
