const MAP_HELPER = {
  heading: "Map",
  category: "map",
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
    }
  ]
};

export default MAP_HELPER;
