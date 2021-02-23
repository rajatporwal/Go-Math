const QUEUE_HELPER = {
  heading: 'Queue',
  category: 'queue',
  pathname: '/ds',
  children: [
    {
      title: 'Introduction',
      id: 'queue/introduction',
      description:
        'Queue is an abstract data structure, somewhat similar to Stacks. Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). Queue follows First-In-First-Out methodology, i.e., the data item stored first will be accessed first.',
      list: null,
      code: [
        {
          title: '',
          code: `class Queue {
  constructor() {
    this.data = [];
  }

  // Enqueue
  add(ele) {
    this.data.unshift(ele);
  }

  // Dequeue
  remove() {
    if(this.data.length === 0) {
      return "Underflow"
    }
    return this.data.pop();
  }

  peek() {
    if(this.data.length === 0) {
      return "Underflow"
    }
    return this.data[this.data.length - 1];
  }

}`,
        },
      ],
      note: null,
    },
    {
      title: 'Weave',
      id: 'queue/weave',
      description:
        'Weave receives two queues as arguments and combones the contents of each into new, third queue. The third queue should contain the alternating content if the two queue.',
      code: [
        {
          title: '',
          code: `function weave(queue1, queue2) {
  const queue  = new Queue();
  while(queue1.peek() !== 'Underflow' || queue2.peek() !== 'Underflow') {
    if(queue1.peek() !== 'Underflow') {
      queue.add(queue1.remove())
    }
    if(queue2.peek() !== 'Underflow') {
      queue.add(queue2.remove())
    }
  }
  return queue;
}

const queue1 = new Queue();

queue1.add(1);
queue1.add(3);
queue1.add(5);
queue1.add(7);
queue1.add(8);
queue1.add(9);

const queue2 = new Queue();

queue2.add(2);
queue2.add(4);
queue2.add(6);

console.log(weave(queue1, queue2));     // [9, 8, 7, 6, 5, 4, 3, 2, 1]`,
        },
      ],
    },
    {
      title: 'Queue using two stacks',
      id: 'queue/queue_using_two_stacks',
      description: '',
      code: [
        {
          title: '',
          code: `class Queue {
  constructor() {
    this.first = new Stack();
    this.stack = new Stack();
  }

  add(ele) {
    this.first.push(ele);
  }

  remove() {
    while(this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const result = this.second.pop();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return result;
  }

  peek() {
    while(this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const result = this.second.peek();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return result;
  }
}`,
        },
      ],
    },
  ],
};

export default QUEUE_HELPER;
