const BST_INSERT = `BST.prototype.insert = function(value) {
  if(value <= this.value) {
    if(!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else {
    if(!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
}`;

const BST_CONTAINS = `BST.prototype.contains = function(value) {
  if(value === this.value) return true;
  
  if (value < this.value) {
    if(!this.left) return false;

    return this.left.contains(value);
  } else {
    if(!this.right) return false;

    return this.right.contains(value);
  }
}`;

const BST_DFT = `BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    if(order === "pre-order") iteratorFunc(this.value);
    if(this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if(order === "in-order") iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if(order === "post-order") iteratorFunc(this.value);
  }`;

const BST_BFT = `BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
    var queue = [this];
    while(queue.length) {
      let treeNode = queue.shift();
      iteratorFunc(treeNode.value);
      if(treeNode.left) queue.push(treeNode.left);
      if(treeNode.right) queue.push(treeNode.right);
    }
  }`;

const BST_GET_MIN_VAL = `BST.prototype.getMinVal = function() {
    if(this.left) {
      return this.left.getMinVal();
    }
    return this.value;
  }`;

const BST_GET_MAX_VAL = `BST.prototype.getMaxVal = function() {
    if(this.right) {
      return this.right.getMaxVal();
    }
    return this.value;
  }`;

const BINARY_SEARCH_TREE_HELPER = {
  heading: "Binary Search Tree",
  category: "bst",
  pathname: "/ds",
  children: [
    {
      title: "Binary Tree",
      keywords: "Binary Tree",
      id: "bt",
      description: `A binary tree is a tree-type non-linear data structure with a maximum of two children for each parent. Every node in a binary tree has a left and right reference along with the data element.
      <br /><br />The nodes that hold other sub-nodes are the parent nodes. A parent node has two child nodes: the left child and right child.`
    },
    {
      title: "Introduction",
      id: "bst/intro",
      description: `Binary Search Tree is a node-based binary tree data structure which has the following properties:`,
      list: [
        "The left subtree of a node contains only nodes with keys lesser than the node’s key.",
        "The right subtree of a node contains only nodes with keys greater than the node’s key.",
        "The left and right subtree each must also be a binary search tree.",
        "<b>Ex: </b>Dictionary, phone Book, User list whose id is of type no."
      ],
      code: [
        {
          title: ``,
          code: `function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

  ${BST_INSERT} 

  ${BST_CONTAINS} 

  ${BST_DFT} 

  ${BST_BFT} 

  ${BST_GET_MIN_VAL} 

  ${BST_GET_MAX_VAL} 


  var bst = new BST(50);
  bst.insert(40);
  bst.insert(60);
  bst.insert(31);
  bst.insert(32);
  bst.insert(53);
  bst.insert(47);
  bst.insert(2);

  const hasValue = bst.contains(34);

  console.log(bst);
  console.log(hasValue);

  bst.depthFirstTraversal(log, "in-order");
  console.log("---------------");
  bst.depthFirstTraversal(log, "pre-order");
  console.log("---------------");
  bst.depthFirstTraversal(log, "post-order");

  bst.breadthFirstTraversal(log);
  function log(value) {
    console.log(value)
  }

  const min = bst.getMinVal();
  console.log('min', min);

  const max = bst.getMaxVal();
  console.log('max', max);`
        }
      ],
      note: null
    },
    {
      title: "Insert",
      id: "bst/insert",
      code: [
        {
          title: ``,
          code: `function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

  ${BST_INSERT}`
        }
      ],
      note: null
    },
    {
      title: "Contains",
      id: "bst/contains",
      code: [
        {
          title: ``,
          code: `function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

  ${BST_CONTAINS}`
        }
      ],
      note: null
    },
    {
      title: "Depth First Traversal",
      id: "bst/dft",
      code: [
        {
          title: ``,
          code: `function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

  ${BST_DFT}`
        }
      ],
      note: null
    },
    {
      title: "Breadth First Traversal",
      keywords: "Breadth First Traversal",
      id: "bst/bft",
      code: [
        {
          title: ``,
          code: `function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

  ${BST_BFT}`
        }
      ],
      note: null
    },
    {
      title: "Min()",
      id: "bst/min",
      code: [
        {
          title: ``,
          code: `function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

  ${BST_GET_MIN_VAL}`
        }
      ],
      note: null
    },
    {
      title: "Max()",
      id: "bst/max",
      code: [
        {
          title: ``,
          code: `function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

  ${BST_GET_MAX_VAL}`
        }
      ],
      note: null
    }
  ]
};

export default BINARY_SEARCH_TREE_HELPER;
