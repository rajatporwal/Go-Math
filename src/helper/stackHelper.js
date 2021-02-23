const STACK_HELPER = {
  heading: 'Stack',
  category: 'stack',
  pathname: '/ds',
  children: [
    {
      title: 'Introduction',
      id: 'stack/introduction',
      description:
        'Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen.',
      list: null,
      code: [
        {
          title: '',
          code: `class Stack {
  constructor() {
    this.data = [];
  }

  push(ele) {
    this.data.push(ele);
    return this.data;
  }

  pop() {
    if (this.data.length === 0) 
        return "Underflow"; 
    return this.data.pop();
  }

  peek() {
    if (this.data.length === 0) 
        return "Underflow"; 
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    if(this.data.length === 0) return true;
    return false;
  }

}

const stack = new Stack();
stack.push(3);
stack.push(3);
stack.push(2);
stack.push(4);

stack.peek();

stack.pop();

stack.isEmpty();`,
        },
      ],
      note: null,
    },
  ],
};

export default STACK_HELPER;
