import { EventEmitter } from '../events/Event';
import students from '../data/students.json';
import books from '../data/books.json';

export default (socket) => {
  EventEmitter.on('cardReceived', (Id) => {
    let item = students.find(({ rfidTag }) => rfidTag === Id);
    if (item) {
      socket.emit('studentReceived', item);
      return;
    }
    item = books.find(({ rfidTag }) => rfidTag === Id);
    if (item) {
      socket.emit('bookReceived', item);
    }
  });
};
