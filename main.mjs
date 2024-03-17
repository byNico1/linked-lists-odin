function LinkedList(head = null, size = 0) {
  return {
    head,
    size,
    preppend(value) {
      this.head = Node(value, this.head);
      this.size++;
    },
    append(value) {
      if (!this.head) {
        this.head = Node(value, head);
        this.size++;
      } else {
        let currentNode = this.head;

        while (currentNode.nextNode) {
          currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = Node(value);
      }

      this.size++;
    },
    printList() {
      let currentNode = this.head;

      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.nextNode;
      }
    },
    getSize() {
      return this.size;
    },
    getHead() {
      return this.head;
    },
    getTail() {
      let currentNode = this.head;

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      return currentNode;
    },
    at(index) {
      let currentNode = this.head;

      for (let i = 0; i < index; i++) {
        if (!currentNode.nextNode) {
          console.log("Node not found");
          break;
        }
        currentNode = currentNode.nextNode;
      }

      return currentNode;
    },
    pop() {
      if (!this.head) {
        console.log("List is empty");
        return;
      }
      let currentNode = this.head;
      let previous;

      while (currentNode.nextNode) {
        previous = currentNode;
        currentNode = currentNode.nextNode;
      }
      previous.nextNode = null;
      this.size--;
    },
    contains(value) {
      let currentNode = this.head;

      while (currentNode.nextNode) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }

      if (currentNode.value === value) {
        return true;
      } else {
        return false;
      }
    },
    find(value) {
      let currentNode = this.head;
      let index = 0;

      while (currentNode.nextNode) {
        if (currentNode.value === value) {
          return index;
        }
        currentNode = currentNode.nextNode;
        index++;
      }

      if (currentNode.value === value) {
        return index;
      } else {
        return null;
      }
    },
    toString() {
      let currentNode = this.head;
      let string = "";

      while (currentNode) {
        string += `(${currentNode.value}) -> ${
          !currentNode.nextNode ? "null" : ""
        }`;
        currentNode = currentNode.nextNode;
      }

      return string;
    },
    insertAt(value, index) {
      if (index > 0 && index > this.size) {
        return;
      }

      if (index === 0) {
        this.preppend(value);
        return;
      }

      const node = Node(value);
      let currentNode = this.head;
      let previous;
      let count = 0;

      while (count < index) {
        previous = currentNode;
        count++;
        currentNode = currentNode.nextNode;
      }

      node.nextNode = currentNode;
      previous.nextNode = node;

      this.size++;
    },

    removeAt(index) {
      if (index > 0 && index > this.size) {
        return;
      }

      if (index === this.size - 1) {
        this.pop();
        return;
      }

      let currentNode = this.head;
      let previous;
      let count = 0;

      if (index === 0) {
        this.head = currentNode.nextNode;
      } else {
        while (count < index) {
          previous = currentNode;
          count++;
          currentNode = currentNode.nextNode;
        }

        previous.nextNode = currentNode.nextNode;
      }
      this.size--;
    },
  };
}

function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

const ll = LinkedList();
ll.preppend(100);
ll.append(200);
ll.append(300);
ll.append(400);
ll.preppend(0);
ll.insertAt(250, 3);
ll.removeAt(5);
ll.printList();
console.log(ll.getSize());
console.log(ll.getHead());
console.log(ll.getTail());
console.log(ll.at(3));
ll.pop();
ll.printList();
console.log(ll.getSize());
console.log(ll.contains(0));
console.log(ll.find(400));
console.log(ll.toString());
