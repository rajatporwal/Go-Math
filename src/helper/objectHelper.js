import { OBJECT_FOR_IN } from "./common";

const OBJECT_HELPER = {
  heading: "Object",
  category: "object",
  pathname: "/ds",
  children: [
    {
      title: "Object.values",
      id: "object/values",
      description: `The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)`,
      list: null,
      code: [
        {
          title: null,
          code: `const obj = { 0: '23', 1: 'geeks', 2: 'true' };

Object.values(obj);   // output: [23, "geeks", true]`
        }
      ],
      note: null
    },
    {
      title: "Object.keys",
      id: "object/keys",
      description: `The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.`,
      list: null,
      code: [
        {
          title: null,
          code: `const obj = { 'index': '23', 'value': 'geeks', 'type': 'true' };

Object.keys(obj);   // output: ["index", "value", "type"]`
        },
        {
          title: `If we use Object.keys in array then it will return index of the elements.`,
          code: `var check = ['x', 'y', 'z'];

Object.keys(check);  // output: ["0", "1", "2"]`
        }
      ]
    },
    {
      title: "Object.entries",
      id: "object/entries",
      description: `The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.`,
      list: null,
      code: [
        {
          title: null,
          code: `const obj = { 'index': '23', 'value': 'geeks', 'type': 'true' };

Object.entries(obj);   /* [
                            ["index", "23"],
                            ["value", "geeks"],
                            ["type", "true"]
                          ]
                      */`
        }
      ]
    },
    {
      title: "Object.assign",
      id: "object/assign",
      description: `Object.assign is used for cloning object`,
      list: ["if two variables have same name it will only keep last one."],
      code: [
        {
          title: null,
          code: `let a1 = { a: 10 };      
let a = Object.assign({}, a1);           // a1 is copied to the a.

let b1 = { a: 10 };
let b2 = { b: 20 };
let b3 = { c: 30 };
let b = Object.assign(b1, b2, b3);       // b1, b2, b3 are copied b.
                                         // output : {a: 10, b: 20, c: 30}

Object.assign(b, b1, b2, b3);            // same as above, b1, b2, b3 are copied b.

let c1 = { a: 10, b: 10, c: 10 };
let c2 = { b: 20, c: 20 };
let c3 = { c: 31 };
let c = Object.assign({}, c1, c2, c3);    // c1, c2, c3 are copied to the c and the target object gets the overwritten values.
                                          // output : {a: 10, b: 20, c: 31}`
        }
      ]
    },
    {
      title: "Object.is",
      id: "object/is",
      description: `Object.is() is used for comparison of two strings, two numbers, polarity of two numbers and two objects`,
      list: null,
      code: [
        {
          title: null,
          code: `let checkObj1 = { a: 100 };
let checkObj2 = Object.assign(checkObj1);
let checkObj3 = Object.assign({}, checkObj1);

Object.is(checkObj1, checkObj2);    // true     because 1 and 2 are pointing on the same instance
Object.is(checkObj1, checkObj3);    // false    it will create new object

Object.is(0,-0);    // false
0 == -0;            // true    this is polarity check for 0
0 === -0;           // true`
        }
      ]
    },
    {
      title: "Object.freeze",
      id: "object/freeze",
      description: `It makes the object immutable i.e after freezing object we can not add or update keys`,
      list: null,
      code: [
        {
          title: null,
          code: `const obj1 = {'a': 1};
obj1['b'] = 2;
console.log(obj1);   //  { a:1, b:2 }

Object.freeze(obj1);

// after freezing object we can not add or update keys.
obj1['c'] = 3;     //  { a:1, b:2 } we will get same output.

Object.isFrozen(obj1);   // true`
        }
      ]
    },
    {
      title: "Object.seal",
      id: "object/seal",
      description: `we can only update the existing keys.`,
      list: null,
      code: [
        {
          title: null,
          code: `const obj2 = {'x': 1};
obj2['y'] = 2;
console.log(obj2);       //  { x:1, y:2 }

Object.seal(obj1);       //  { x:1, y:2 }, we will get same output.

obj2['y'] = 3;     
console.log(obj2);       //  { x:1, y:3 }

Object.isSealed(obj1);   // true`
        }
      ]
    },
    {
      ...OBJECT_FOR_IN,
      id: "object/for_in"
    }
  ]
};

export default OBJECT_HELPER;
