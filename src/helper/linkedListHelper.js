const LINKED_LIST_HELPER = {
  heading: "Linked List",
  category: "linked_list",
  pathname: "/ds",
  children: [
    {
      title: "Singly Linked List",
      id: "linkedlist/singly",
      description: `A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail). Each element in a linked list is called a node. A single node contains data and a pointer to the next node which helps in maintaining the structure of the list.`,
      code: [
        {
          title: ``,
          code: `class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  clear() {
    this.head = null;
  }

  insertAtFirst(data) {
    this.head = new Node(data, this.head);
    return this.head;

    // this.addElementByIndex(data, 0);
  }

  insertAtLast(data) {
    const newNode = new Node(data);
    if(!this.head) return this.head = newNode;

    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    node.next = newNode;
    return this.head;
  }

  addElementByIndex(index, data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if(index === 0) {
      this.head = new Node(data, this.head);
      return this.head;
    }

    const prev = this.getElementByIndex(index - 1) || this.getLastElement();
    if(!prev && !prev.next) return;
    
    const newNode = new Node(data, prev.next);
    prev.next = newNode;
    return this.head;
  }

  getFirstElement() {
    return this.head;

    // this.getElementByIndex(0);
  }

  getLastElement() {

    if(!this.head) return null;

    let node = this.head;
    while(node) {
      if(!node.next) {
        return node;
      }
      node = node.next;
    }

    // let last = null;
    // let node = this.head;
    // while(node) {
    //   last = node;
    //   node = node.next;
    // }
    // return last;

    // this.getElementByIndex(this.size() - 1);
  }

  getElementByIndex(index) {
    let counter = 0;
    let node = this.head;
    while(node) {
      if(counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;    
  }
  
  removeFirstElement() {
    if(!this.head) return;

    this.head = this.head.next;
    return this.head;
  }

  removeLastElement() {
    const last = this.getLastElement();

    if(last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }

    // if(!this.head) return;

    // if(!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let prevNode = this.head;
    // let currNode = this.head.next;
    // while(currNode.next) {
    //     prevNode = currNode;
    //     currNode = currNode.next
    //   }
    // prevNode.next = null;

    return this.head;
  }
  
  removeElementByIndex(index) {
    if(!this.head) return;

    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = this.getElementByIndex(index - 1);
    if(!prev || !prev.next) {
      return;
    }

    prev.next = prev.next.next;
    return this.head;
  }
}

  const ll = new LinkedList();

  ll.insertAtFirst(10);
  ll.insertAtFirst(11);
  ll.insertAtFirst(12);
  console.log(ll);

  const size = ll.size();
  console.log(size);

  const removeFirst = ll.removeFirstElement();
  console.log('removeFirst', removeFirst);

  const lastElement = ll.getLastElement();
  console.log('lastElement', lastElement);

  const removeLastElement = ll.removeLastElement();
  console.log(removeLastElement);

  const insertLast = ll.insertAtLast(13);
  console.log(insertLast);

  const getElementByIndex = ll.getElementByIndex(5);
  console.log(getElementByIndex);

  const removeElementByIndex = ll.removeElementByIndex(3);
  console.log(removeElementByIndex);

  const addElementByIndex = ll.addElementByIndex(5, 14);
  console.log(addElementByIndex);`
        }
      ],
      note: null
    }
  ]
};

export default LINKED_LIST_HELPER;
