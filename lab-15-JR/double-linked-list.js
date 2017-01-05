'use strict';

const Node = require('./node/dll-node');

const DoublyLinkedList = module.exports = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if(!this.head) {
    this.head = node;
    this.tail = node;
    return node.val;
  }
  //if things exist already

  node.next = this.head;
  this.head.prev = node;
  this.head = node;
};

DoublyLinkedList.prototype.append = function(val) {
  let node = new Node(val);

  if(!this.tail) {
    this.head = node;
    this.tail = node;
    return node.val;
  }
  node.prev = this.tail;
  this.tail.next = node;
  this.tail = node;
  return node.val;
};

//HEAD[val, prev, next] <=> [val, prev, next] <=> [val, prev, next](TAIL)
// prepend()                                              append()
