export const OBJECT_FOR_IN = {
  title: "for in",
  id: "for_in",
  description: `Used to enumerate over object`,
  list: ["It returns object keys"],
  code: [
    {
      title: "",
      code: `const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};

// for in - properties
// enumerating
for (item in detailedBasket) {
  console.log(item);
};    // output: apples, oranges, grapes

for (item in basket) {
  console.log(item);
};    // output: 0, 1, 2`
    }
  ],
  note:
    "for in loop works with array and it returns indexes of the element, as shown above."
};
