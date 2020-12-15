const MAP_HELPER = {
  heading: "Map",
  category: "map",
  pathname: "/ds",
  children: [
    {
      title: "Introduction",
      id: "map/introduction",
      description: `Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.`,
      list: [
        `<b>new Map() </b> – creates the map.`,
        `<b>map.set(key, value) </b> – stores the value by the key.`,
        `<b>map.get(key) </b> – returns the value by the key, undefined if key doesn’t exist in map.`,
        `<b>map.has(key) </b> – returns true if the key exists, false otherwise.`,
        `<b>map.delete(key) </b> – removes the value by the key.`,
        `<b>map.clear() </b> – removes everything from the map.`,
        `<b>map.size </b> – returns the current element count.`
      ],
      code: [
        {
          title: ``,
          code: `var map = new Map(); 
  
map.set("a", "A");
map.set("b", "B");
map.set("d", "D");

console.log(map.size);        // output: 3`
        }
      ],
      note: null
    },
    {
      title: "has()",
      id: "map/has",
      description: `returns false if key is not found`,
      list: null,
      code: [
        {
          title: "",
          code: `var map = new Map(); 
  
map.set("a", "A");
map.set("b", "B");
map.set("d", "D");

console.log(map.has('a'));    // true
console.log(map.has('c'));    // false
console.log(map.has('D'));    // false`
        }
      ],
      note: null
    },
    {
      title: "get()",
      id: "map/get",
      description: `returns undefined if key is not found`,
      list: null,
      code: [
        {
          title: "",
          code: `var map = new Map(); 
  
map.set("a", "A");
map.set("b", "B");
map.set("d", "D");

console.log(map.get("a"));     // A
console.log(map.get("c"));     // undefined`
        }
      ],
      note: null
    },
    {
      title: "delete()",
      id: "map/delete",
      description: `returns false if key is not found`,
      list: null,
      code: [
        {
          title: "",
          code: `var map = new Map(); 
  
map.set("a", "A");
map.set("b", "B");
map.set("d", "D");

console.log(map.delete("d"));   // true
console.log(map.delete("c"));   // false`
        }
      ],
      note: null
    },
    {
      title: "entries()",
      id: "map/entries",
      description: `returns key and values both in array form`,
      list: null,
      code: [
        {
          title: "",
          code: `var map = new Map(); 
  
map.set("a", "A");
map.set("b", "B");
map.set("d", "D");

let mapIteratorEntries = map.entries();
console.log(mapIteratorEntries);              // MapIterator {"a" => "A", "b" => "B"}

for(let ele of mapIteratorEntries) {       
  console.log(ele);                           // ex. ["a", "A"], ["b", "B"]
}

// another way of iterating
for(let [key, value] of map.entries()) {       
  console.log(key, value);                    // output:  a b
}`
        }
      ],
      note: null
    },
    {
      title: "keys()",
      id: "map/keys",
      description: `returns only keys`,
      list: null,
      code: [
        {
          title: "",
          code: `var map = new Map(); 
  
map.set("a", "A");
map.set("b", "B");
map.set("d", "D");

let mapIteratorKeys = map.keys();         
console.log(mapIteratorKeys);             // MapIterator {"a", "b"}

for(let ele of mapIteratorKeys) {
  console.log(ele);                       // output:  a b
}`
        }
      ],
      note: null
    },
    {
      title: "values()",
      id: "map/values",
      description: `returns only values`,
      list: null,
      code: [
        {
          title: "",
          code: `var map = new Map(); 
  
map.set("a", "A");
map.set("b", "B");
map.set("d", "D");

let mapIteratorValues = map.values();
console.log(mapIteratorValues);           // MapIterator {"A", "B"}

for(let ele of mapIteratorValues) {
  console.log(ele);                       // output:  A B
}`
        }
      ],
      note: null
    },
    {
      title: "forEach()",
      id: "map/forEach",
      description: `we can directly render using forEach while entries(), keys() and values() returns iterator object.`,
      list: null,
      code: [
        {
          title: "",
          code: `var map = new Map(); 
  
map.set("a", "A");
map.set("b", "B");
map.set("d", "D");

// return values
map.forEach(ele => {          
  console.log(ele);                        // output:  A B                             
})`
        }
      ],
      note: null
    },
    {
      title: "clear()",
      id: "map/clear",
      description: `returns undefined if it cleared map successfully`,
      list: null,
      code: [
        {
          title: "",
          code: `var map = new Map(); 
  
map.set("a", "A");
map.set("b", "B");
map.set("d", "D");
  
console.log(map.clear());       // output:  undefined`
        }
      ],
      note: null
    },
    {
      title: "convert map to array",
      id: "map/m_array",
      description: null,
      list: null,
      code: [
        {
          title: "",
          code: `var map = new Map(); 
  
map.set("a", "A");
map.set("b", "B");
  
const arr = [...map];
console.log(arr);                    // [["a", "A"], ["b", "B"]]`
        }
      ],
      note: null
    },
    {
      title: "map vs object",
      id: "map/map-vs_obj",
      description: `<b>Map </b> is a data structure which helps in storing the data in the form of pairs. The pair consists of a unique key and a value mapped to the key. It helps prevent duplicity.
      <br /><br />
      <b>Object </b> follows the same concept as that of map i.e. using key-value pair for storing data. But there are slight differences which makes map a better performer in certain situations.
      <br /> <br />
      Few basic differences are as follows:`,
      list: [
        `In Object, the data-type of the key-field is restricted to integer, strings, and symbols. Whereas in Map, the key-field can be of any data-type (integer, an array, even an object!)`,
        `In the Map, the original order of elements is preserved. This is not true in case of objects.`,
        `The Map is an instance of an object but the vice-versa is not true.`
      ],
      code: null,
      note: null
    },
    {
      title: "Where To Use Object",
      id: "map/use_obj",
      description: `Although Map tends to have more advantages over objects, at the end the day it depends on the kind of data being used and the operation needs to be performed.
      <br /><br />
      However, of all the advantages of map over object, map cannot replace object in JavaScript because Object is much more than a hash table. It shouldn’t be used just for the purpose of hashing if there exists another choice.`,
      list: [
        `Objects are a great choice for situations where we need simple structure to store data and the type of keys needed is either an integer, strings or symbols.`,
        `Scenarios which needs the application of separate logic to individual property element, the object is definitely the choice.`,
        `JSON gives direct support for object but not with map(yet).`,
        `Map is completely hash whereas Object is more than that.`
      ],
      code: null,
      note: null
    }
  ]
};

export default MAP_HELPER;
