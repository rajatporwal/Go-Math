const ARRAY_HELPER = {
  heading: "Array",
  category: "array",
  pathname: "/ds",
  children: [
    {
      title: "push()",
      id: "array/push",
      description: `Add's the element to the last index.`,
      list: null,
      code: [
        {
          title: null,
          code: `  const arr = ['a', 'b', 'c'];
  arr.push('d', 3);
  
  console.log(arr); // output: ['a', 'b', 'c', 'd', 3]`
        }
      ],
      note: null
    },
    {
      title: "pop()",
      id: "array/pop",
      description: `removes last element from the array.`,
      list: null,
      code: [
        {
          title: null,
          code: `  const arr = ['a', 'b', 'c'];
  arr.pop();
  
  console.log(arr); // output: ['a', 'b']`
        }
      ],
      note: null
    },
    {
      title: "unshift()",
      id: "array/unshift",
      description: `add elements at the front of an array.`,
      list: null,
      code: [
        {
          title: null,
          code: `  const arr = ['a', 'b', 'c'];
  arr.unshift(1);
  
  console.log(arr); // output: [1, 'a', 'b', 'c']`
        }
      ],
      note: null
    },
    {
      title: "shift()",
      id: "array/shift",
      description: `removes element from the front (first element) of array.`,
      list: null,
      code: [
        {
          title: null,
          code: `  const arr = ['a', 'b', 'c'];
  arr.shift();
  
  console.log(arr); // output: ['b', 'c']`
        }
      ],
      note: null
    },
    {
      title: "splice()",
      id: "array/splice",
      description: `removes or add element from the given index.`,
      list: null,
      code: [
        {
          title: "remove element from particular index",
          code: `const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// removes 2 elements from index 3
arr.splice(3, 2);
            
console.log(arr); // [1, 2, 3, 6, 7, 8, 9]`
        },
        {
          title: "remove and add elements",
          code: `const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// removes 3 elements from index 2 and adds 'a' and 'b'
arr.splice(2, 3, 'a', 'b');
            
console.log(arr); // [1, 2, "a", "b", 6, 7, 8, 9]`
        },
        {
          title: "adding elements from certain index without removing any",
          code: `const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// add elements from index 3
arr.splice(3, 0, 'a', 'b');
            
console.log(arr); // [1, 2, 3, "a", "b", 4, 5, 6, 7, 8, 9]`
        }
      ],
      note: null
    },
    {
      title: "slice()",
      id: "array/slice",
      description: `returns new array containing a portion of the array (end index exclusive)`,
      list: null,
      code: [
        {
          title: null,
          code: `const arr = [0, 1, 2, 3, 4, 5, 6];

let newArray =  arr.slice(2,5);

console.log(arr);   // output: [0, 1, 2, 3, 4, 5, 6];
console.log(newArray);   // output: [2, 3, 4];`
        },
        {
          title: "negative index",
          code: `const arr = [0, 1, 2, 3, 4, 5, 6];

// copy from -2 till the end
let newArray =  arr.slice(-2);

console.log(arr);   // output: [0, 1, 2, 3, 4, 5, 6];
console.log(newArray);   // output: [5, 6];`
        }
      ],
      note: null
    },
    {
      title: "indexOf()",
      id: "array/indexOf",
      description: `returns index of first matched element.`,
      list: null,
      code: [
        {
          title: null,
          code: `const arr = [1, 2, 3, 1, 2, 3];

const index = arr.indexOf(1);
            
console.log(index); // output: 0`
        }
      ],
      note: "indexOf() will return -1 if element not found"
    },
    {
      title: "lastIndexOf()",
      id: "array/lastIndexOf",
      description: `returns index of last matched element.`,
      list: null,
      code: [
        {
          title: null,
          code: `const arr = [1, 2, 3, 1, 2, 3];

const index = arr.lastIndexOf(1);

console.log(index); // output: 3`
        }
      ],
      note: "lastIndexOf() will return -1 if element not found"
    },
    {
      title: "findIndex()",
      id: "array/findindex",
      description: `returns index of first matched element according to condition.`,
      list: null,
      code: [
        {
          title: null,
          code: `const arr = [9, 7, 3, 2, 2, 3];

  let findIndex = arr.findIndex((v)=>{
    return  v % 2 === 0;             
  });
            
  console.log(findIndex); // output: 3`
        }
      ],
      note: "findIndex() will return -1 if condition not matched"
    },
    {
      title: "find()",
      id: "array/find",
      description: `find will return element itself when condition mathced`,
      list: null,
      code: [
        {
          title: null,
          code: `const arr = [9, 7, 3, 2, 2, 3];

  let find = arr.find((v)=>{
    return  v % 2 === 0;             
  });
            
  console.log(find); // output: 2`
        }
      ],
      note: "find() will return -1 if condition not matched"
    },
    {
      title: "reverse()",
      id: "array/reverse",
      description: `inbuilt function to reverse array`,
      list: null,
      code: [
        {
          title: null,
          code: `const arr = [1, 2, 3, 4, 5];
arr.reverse();  // Output: [5, 4, 3, 2, 1]`
        }
      ],
      note: null
    },
    {
      title: "sort()",
      id: "array/sort",
      description: null,
      list: ["only sorts alphabets"],
      code: [
        {
          title: "sorting on alphabets",
          code: `const arr = ['b', 'c', 'd', 'a'];

arr.sort();

console.log(arr); // output: ['a', 'b', 'c', 'd']`
        },
        {
          title:
            "sort() will not return correct results if we try to apply sorting on integers",
          code: `const arr = [2, 4, 5, 1, 99, 11, 10];

arr.sort();

console.log(arr); // output: [1, 10, 11, 2, 4, 5, 99]`
        },
        {
          title: "sorting on integers",
          code: `const arr = [2, 4, 5, 1, 99, 11, 10];

arr.sort((a, b) => {
  return a - b
});

console.log(arr); // output: [1, 2, 4, 5, 10, 11, 99]`
        },
        {
          title: "sorting in decreasing order",
          code: `const arr = [2, 4, 5, 1, 99, 11, 10];

arr.sort((a, b) => {
  return b - a
});

console.log(arr); // output: [99, 11, 10, 5, 4, 2, 1]`
        },
        {
          title: "sorting numerically on combination of both",
          code: `const arr = ['b3', 'c23', 'd1', 'a4'];

arr.sort((a, b) => a.substring(1) - b.substring(1));

console.log(arr); // output: ["d1", "b3", "a4", "c23"]`
        }
      ],
      note: null
    },
    {
      title: "Iterating over array",
      id: "array/iteration",
      description: null,
      list: [
        "for loop",
        "while loop",
        "forEach loop",
        "<b>array.entries():</b> returns key and value pair for each index.",
        "<b>array.values():</b> returns values for each index."
      ],
      code: [
        {
          title: "for loop",
          code: `const arr = ['b3', 'c23', 'd1', 'a4'];

for(let ele of arr) {
  console.log(ele);
}`
        },
        {
          title: "while loop",
          code: `let i=0, text '';
            
while (i < 10) {
  text += "The number is " + i;
  i++;
}`
        },
        {
          title: "forEach loop",
          code: `const arr = ['b3', 'c23', 'd1', 'a4'];

arr.forEach((ele, i) => {
  console.log(ele, i);
});`
        },
        {
          title: "Array.entries()",
          code: `const arr = ['b3', 'c23', 'd1', 'a4'];

let iteratorEntries = arr.entries();

for (let e of iteratorEntries) { 
  console.log(e);   // ex: [0, b3]
  if(e[0] == 2)
    console.log(e);   // output: [2, d1]
}`
        },
        {
          title: "Array.values()",
          code: `const arr = ['b3', 'c23', 'd1', 'a4'];

// works as normal for loop
let iterateValues = arr.values();
for( let e of iterateValues) { 
  console.log(e);
}`
        }
      ],
      note: null
    },
    {
      title: "every()",
      id: "array/every",
      description: `It checks whether all the elements of the array satisfy the given condition or not.`,
      list: null,
      code: [
        {
          title: null,
          code: `const arr = [1, 2, 3, 4, 5, 6];

let every =  arr.every(ele => ele < 5);
console.log(every);   // output: false`
        }
      ],
      note: null
    },
    {
      title: "some()",
      id: "array/some",
      description: `It checks at least one of the elements of the array satisfy the given condition.`,
      list: null,
      code: [
        {
          title: null,
          code: `const arr = [1, 2, 3, 4, 5, 6];

let some =  arr.some(ele => ele < 5);
console.log(some);   // output: true`
        }
      ],
      note: "Array.some() breaks the loop when any condition got matched."
    },
    {
      title: "map()",
      id: "array/map",
      description: `creates a new array from results of calling func for every element.`,
      list: null,
      code: [
        {
          title: null,
          code: `const arr = [1, 2, 3, 4, 5];

let mappedArray = arr.map( (ele) => ele * 2 );

console.log(mappedArray)  // output: [2, 4, 6, 8, 10]`
        }
      ],
      note: null
    },
    {
      title: "filter()",
      id: "array/filter",
      description: `filter elements through the function, return all values that make it return true`,
      list: null,
      code: [
        {
          title: null,
          code: `const arr = [1, 2, 3, 4, 5];
            
let filter = arr.filter(ele => ele < 3);
console.log(filter);  // output: [1, 2]`
        }
      ],
      note: null
    },
    {
      title: "reduce/reduceRight",
      id: "array/reduce",
      description: `reduces the array after performing provided calculation on every element`,
      list: [
        "reduce iterates the array in regular fashion",
        "reduceRight reduces the array from rigth to left"
      ],
      code: [
        {
          title: null,
          code: `const str = ['b', 'e', 's', 't'];

const reduce = str.reduce( (c, v) => c + v);         // best
const reduceRight = str.reduceRight( (c, v) => c + v);   // tsed`
        },
        {
          title: "return array",
          code: `const str = [2, 4, 6, 8];

const result = str.reduce((o, a) => {
  o.push(a / 2);
  return o;
}, [])

console.log(result);   // output: [1, 2, 3, 4]`
        }
      ],
      note: null
    },
    {
      title: "join()",
      id: "array/join",
      description: `joins every ele with the passed parameter and returns new string`,
      list: null,
      code: [
        {
          title: null,
          code: `var a = [1, 2, 3, 4, 5, 6];

const result = a.join('|');    // 1|2|3|4|5|6`
        }
      ],
      note: null
    },
    {
      title: "fill()",
      id: "array/fill",
      description: `fills the array with a given static value`,
      list: null,
      code: [
        {
          title: "Replaces all the values",
          code: `const arr = [1, 2, 3, 4, 5];
arr.fill(87);   

console.log(arr); // Output:  [87, 87, 87, 87, 87, 87]`
        },
        {
          title: "Replace the value for the given range (end index exclusive)",
          code: `const arr = [1, 2, 3, 4, 5];
arr.fill(87, 2, 4);     

console.log(arr);   // Output: [1, 2, 87, 87, 87, 5]`
        },
        {
          title:
            "Replaces all the values from starting index to end, if end index is not provided",
          code: `const arr = [1, 2, 3, 4, 5];
arr.fill(87, 2);     

console.log(arr);   // Output: [1, 2, 87, 87, 87, 87]`
        }
      ],
      note: null
    },
    {
      title: "flat()",
      id: "array/flat",
      description: `flats the deeply nested array`,
      list: null,
      code: [
        {
          title: "Flat to 1st level",
          code: `const matrix = [[1, 2, 3], [4, 5, 6]];
const matrix2 = [[1,2], [4, 5, [[[3]]]]]

// 1 will flat to only 1st level.
const flat = matrix.flat(1);   // [1, 2, 3, 4, 5, 6]
const flat2 = matrix2.flat(1);   // [1, 2, 4, 5, [[[3]]] ]`
        },
        {
          title: "Flat to Infinity",
          code: `const matrix = [[1,2], [4, 5, [[[3]]]]]
  
// Infinity will flat to all nested levels.
const flat = matrix.flat(Infinity);   // [1, 2, 4, 5, 3]`
        }
      ],
      note: null
    }
  ]
};

export default ARRAY_HELPER;
