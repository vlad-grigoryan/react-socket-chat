var uuid = require("uuid");
const {users} = require("./users");

const messages = [];

const addMessage = (room, message) => {
  const selectedUser = users.find((user) => message.senderId === user.id);

  const msg = { id: uuid.v4(), room, name: selectedUser?.name, ...message };
  messages.push(msg);
  return msg;
};

const removeMessage = (id) => {
  const index = messages.findIndex((message) => message.id === id);

  if (index !== -1) return messages.splice(index, 1)[0];
};

const getMessage = (id) => messages.find((message) => message.id === id);

const getMessagesInRoom = (room) =>
  messages.filter((message) => message.room === room);

module.exports = { addMessage, removeMessage, getMessage, getMessagesInRoom };
