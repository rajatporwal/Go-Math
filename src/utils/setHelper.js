const SET_HELPER = {
  heading: "Set",
  category: "set",
  pathname: "/ds",
  children: [
    {
      title: "Introduction",
      id: "set/introduction",
      description: `Sets are a new object type with ES6 (ES2015) that allow creating collections of unique values. The values in a set can be either simple primitives like strings or integers as well as more complex object types like object literals or arrays.
      <br />You can iterate through the elements of a set in insertion order`,
      list: [
        `<b>new Set() </b> – creates the set.`,
        `<b>set.add(value) </b> – It adds the new element with a specified value at the end of the Set object.`,
        `<b>set.has(key) </b> – returns true if the key exists, false otherwise.`,
        `<b>set.delete(key) </b> – It deletes an element with the specified value from the Set object.`,
        `<b>set.clear() </b> – removes everything from the set.`,
        `<b>set.size </b> – returns the current element count.`
      ],
      code: [
        {
          title: ``,
          code: `var set = new Set(); 
  
set.add("a");
set.add("b");
set.add("d");

console.log(set.size);        // output: 3`
        }
      ],
      note: null
    },
    {
      title: "add()",
      id: "set/add",
      description: `adds the element to set`,
      list: null,
      code: [
        {
          title: "",
          code: `var set = new Set(); 
  
set.add("a");
set.add("b");
set.add("d");

console.log(set)    // output: Set(3) {"a", "b", "d"}`
        },
        {
          title:
            "if we try to add multiple values at one time, it will only insert first value",
          code: `var set = new Set(); 
  
set.add("a");
set.add("b");
set.add("c", "d");

console.log(set)    // output: Set(3) {"a", "b", "c"}`
        },
        {
          title: null,
          code: `var set = new Set("a", "b", "c"); 
  
console.log(set)        // output: Set(1) {"a"}`
        },
        {
          title: "create set by passing array",
          code: `var set = new Set(["a", "b", "c"]); 
  
console.log(set)        // output: Set(3) {"a", "b", "c"}`
        }
      ],
      note: null
    },
    {
      title: "has()",
      id: "set/has",
      description: `returns false if element is not found`,
      list: null,
      code: [
        {
          title: "",
          code: `var set = new Set(); 
  
set.add("a");
set.add("b");
set.add("d");

console.log(set.has('a'));    // true
console.log(set.has('c'));    // false
console.log(set.has('D'));    // false`
        }
      ],
      note: null
    },
    {
      title: "delete()",
      id: "map/delete",
      description: `returns false if element is not found`,
      list: null,
      code: [
        {
          title: "",
          code: `var set = new Set(); 
  
set.add("a");
set.add("b");
set.add("d");

console.log(set.delete("d"));   // true
console.log(set.delete("c"));   // false`
        }
      ],
      note: null
    },
    {
      title: "clear()",
      id: "map/clear",
      description: `returns undefined if it cleared set successfully`,
      list: null,
      code: [
        {
          title: "",
          code: `var set = new set(); 
  
set.add("a", "A");
set.add("b", "B");
set.add("d", "D");
  
console.log(set.clear());       // output:  undefined`
        }
      ],
      note: null
    },
    {
      title: "entries()",
      id: "map/entries",
      description: `It returns an iterator object which contains an array having the entries of the set, in the insertion order.`,
      list: [
        `It returns an iterator object that contains an
      <b>array of [value, value] </b> for every 
      element of the set, in the insertion order.`
      ],
      code: [
        {
          title: "",
          code: `var set = new Set(); 
  
set.add("a");
set.add("b");
set.add("d");

let setIteratorEntries = set.entries();
for(let ele of setIteratorEntries) {       
  console.log(ele);                       // ex. ["a", "a"] ["b", "b"]
}`
        }
      ],
      note: null
    },
    {
      title: "values()",
      id: "map/values",
      description: `It returns all the values from the Set in the insertion order.`,
      list: ["Values and keys are same in case of Set."],
      code: [
        {
          title: null,
          code: `var set = new Set(); 
  
set.add("a");
set.add("b");
set.add("d");
  
let setIteratorValues = set.values();       
for(let ele of setIteratorValues) {
  console.log(ele);                     // a b 
}`
        }
      ],
      note: null
    },
    {
      title: "keys()",
      id: "set/keys",
      description: `It also returns all the values from the Set in the insertion order.`,
      list: null,
      code: [
        {
          title: null,
          code: `var set = new Set(); 
  
set.add("a");
set.add("b");
set.add("d");
  
let setIteratorKeys = set.keys();       
for(let ele of setIteratorKeys) {
  console.log(ele);                     // a b 
}`
        }
      ],
      note: "It is similar to the values() in case of Sets."
    },
    {
      title: "forEach()",
      id: "set/forEach",
      description: `It executes the given function once for every element in the Set, in the insertion order.`,
      list: null,
      code: [
        {
          title: "",
          code: `var set = new Set(); 
  
set.add("a");
set.add("b");
set.add("d");

  
set.forEach(ele => {
  console.log(ele);           // a b
})`
        }
      ],
      note: null
    },
    {
      title: "convert set to array",
      id: "set/array",
      description: `It executes the given function once for every element in the Set, in the insertion order.`,
      list: null,
      code: [
        {
          title: "",
          code: `var set = new Set(["a", "d", "e"]);

console.log([...set]);      // ["a", "d", "e"]`
        }
      ],
      note: null
    },
    {
      title: "Set.prototype.subSet()",
      id: "set/subSet",
      description: `It returns true if Set A is a subset of Set B.
      <br /><br />
      A Set A is said to be a subset of Set B, if all the elements of Set A is also present in Set B.`,
      list: [
        `Arrow functions do not have a prototype property. Therefore we can not make prototype function using ES6`,
        `We can not use forEach loop here because we have to break the loop when condition meets,
      and we cannot break forEach loop in between.`
      ],
      code: [
        {
          title: "",
          code: `var set1 = new Set(["a", "b", "c", "d", "e"]); 
var set2 = new Set(["a", "d", "e"]);   

Set.prototype.subSet = function(otherSet) {
  if (this.size > otherSet.size) {
    return false;
  } 
  else {
    for (let ele of this) {
      if(!otherSet.has(ele))
        return false;
    }
    return true;
  }
}

console.log(set2.subSet(set1));       // true
console.log(set1.subSet(set2));       // false`
        },
        {
          title: "Solution 2",
          code: `function isSuperset(set, subset) {
  for (let elem of subset) {
      if (!set.has(elem)) {
          return false
      }
  }
  return true
}`
        }
      ],
      note: null
    },
    {
      title: "Set.prototype.union()",
      id: "set/union",
      description: `It returns a Set which consists of union of Set A and Set B.
      <br /><br />
      A Set is said to be a union of two set, if it contains all element of Set A as well as all elements of Set B, but it does’nt contains duplicate elements.
      <br /><br />
      For Example: If an element is present in both Set A and Set B then union of Set A and B will contain the single copy of the element.`,
      list: null,
      code: [
        {
          title: "",
          code: `var set1 = new Set(["a", "b", "c", "d", "e"]); 
var set2 = new Set(["a", "d", "e"]);
          
Set.prototype.union = function(otherSet) {
  var unionSet = new Set(); 
  for (var elem of this) { 
    unionSet.add(elem); 
  } 
  for(var elem of otherSet) {
      unionSet.add(elem); 
  }
  return unionSet; 
}

console.log(set1.union(set2));      // output: Set(5) {"a", "b", "c", "d", "e"}`
        },
        {
          title: "Solution 2",
          code: `Set.prototype.union = function(otherSet) {
  let unionSet = new Set(this)
  for (let elem of otherSet) {
      unionSet.add(elem);
  }
  return unionSet
}`
        },
        {
          title: "Solution 3",
          code: `const union = (set1, set2) => {
  return new Set([...set1, ...set2]);
}`
        }
      ],
      note: null
    },
    {
      title: "Set.prototype.intersection()",
      id: "set/intersection",
      description: `It returns the intersection of Set A and Set B.
      <br /><br />
      A Set is said to be the intersection of Set A and B if contains element which is present both in Set A and Set B.`,
      list: null,
      code: [
        {
          title: "",
          code: `var set1 = new Set(["a", "b", "c", "d", "e"]); 
var set2 = new Set(["a", "d", "e"]);

Set.prototype.intersection = function(otherSet) { 
  var intersectionSet = new Set(); 
  for(var elem of otherSet) { 
    if(this.has(elem)) 
      intersectionSet.add(elem); 
  } 
  return intersectionSet;                 
} 

console.log(set1.intersection(set2));   // Set(3) {"a", "d", "e"}`
        }
      ],
      note: null
    },
    {
      title: "Set.prototype.difference()",
      id: "set/difference",
      description: `It returns the Set which contains difference of Set A and Set B.
      <br /><br />
      A Set is said to be a difference of Set A and B if it contains set of element e which are present in Set A but not in Set B.`,
      list: null,
      code: [
        {
          title: "",
          code: `var set1 = new Set(["a", "b", "c", "d", "e"]); 
var set2 = new Set(["a", "d", "e", "f"]);

Set.prototype.difference = function(otherSet) 
{ 
  let difference = new Set(this)
  for (let elem of otherSet) {
      difference.delete(elem)
  }
  return difference
} 

console.log(set1.difference(set2));   // Set(2) {"b", "c"}
console.log(set2.difference(set1));   // Set(1) {"f"}`
        }
      ],
      note: null
    },
    {
      title: "Set.prototype.symmetricDifference()",
      id: "set/symmetricDifference",
      description: `It returns the Set which contains difference of both Set A and Set B.
      <br /><br />
      A Set is said to be a symmetricDifference of Set A and B if it contains set of element e which are present in Set A but not in Set B and also present in set B and not in Set A.`,
      list: null,
      code: [
        {
          title: "",
          code: `var set1 = new Set(["a", "b", "c", "d", "e"]); 
          var set2 = new Set(["a", "d", "e", "f"]);

Set.prototype.symmetricDifference = function(otherSet) 
{ 
  let symmetricDiff = new Set(this)
    for (let elem of otherSet) {
        if (symmetricDiff.has(elem)) {
            symmetricDiff.delete(elem)
        } else {
            symmetricDiff.add(elem)
        }
    }
    return symmetricDiff
} 

console.log(set1.symmetricDifference(set2));   // Set(3) {"b", "c", "f"}
console.log(set2.symmetricDifference(set1));   // Set(1) {"f", "b", "c"}`
        }
      ],
      note: null
    }
  ]
};

export default SET_HELPER;
