class linkedList {
    constructor(data) {
      this.node = new node(data);
    }
  
    append(data) {
      if (this.node.value === null) {
        this.node.value = data;
        return;
      }
      this.tail().next = new node(data);
    }
  
    prepend(data) {
      let tempNode = new node(data);
      tempNode.next = this.node;
      this.node = tempNode;
    }
  
    tail() {
      let newNode = this.node;
      while (newNode.next !== null) {
        newNode = newNode.next;
      }
      return newNode;
    }
  
    size() {
      let length = 1;
      let newNode = this.node;
      while (newNode.next !== null) {
        newNode = newNode.next;
        length++;
      }
      return length;
    }
  
    head() {
      return this.node.value;
    }
  
    pop() {
      let newNode = this.node;
      if (newNode.next === null) {
        newNode.value = null;
        return;
      }
      while (newNode.next.next !== null) {
        newNode = newNode.next;
      }
      newNode.next = null;
    }
  
    at(index) {
      let newNode = this.node;
      let value = newNode.value;
      for (let i = 0; i < index; i++) {
        newNode = newNode.next;
        value = newNode.value;
      }
      return value;
    }
  
    find(value) {
      let newNode = this.node;
      let index = 0;
      while (newNode.next !== null) {
        if (newNode.value === value) {
          return index;
        }
        index++;
        newNode = newNode.next;
      }
      if (newNode.value === value) {
        return index;
      }
      return null;
    }
  
    contains(value) {
      let newNode = this.node;
      while (newNode.next !== null) {
        if (newNode.value === value) {
          return true;
        }
        newNode = newNode.next;
      }
      if (newNode.value === value) {
        return true;
      }
      return null;
    }
  
    toString() {
      let newNode = this.node;
      while (newNode.next !== null) {
        process.stdout.write(`( ${newNode.value} ) -> `);
        newNode = newNode.next;
      }
      process.stdout.write(`( ${newNode.value} ) -> `);
      process.stdout.write(`( null ) `);
      console.log("");
    }
  
    remove(index) {
      let newNode = this.node;
      let size = this.size();
      let tempArr = [];
  
      if (this.head().next === null || this.size() < index) {
        return;
      }
      for (let i = 0; i < size; i++) {
        if (!(i === index)) {
          tempArr.push(newNode.value);
        }
        newNode = newNode.next;
      }
      while (this.head()) {
        this.pop();
      }
      for (let i = 0; i < size - 1; i++) {
        this.append(tempArr[i]);
      }
    }
  }
  
  class node {
    constructor(value) {
      if (value) {
        this.value = value;
      } else {
        this.value = null;
      }
      this.next = null;
    }
  }
  
  let list = new linkedList();
  
  list.append("earth");
  list.append("sky");
  list.append("space");
  list.append("star");
  list.append("galaxy");
  list.append("universe");
  list.toString();
  