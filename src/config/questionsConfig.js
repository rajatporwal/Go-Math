const questionsConfig = [
  {
    category: "array",
    question: "Remove duplicate objects from array.",
    id: "a_remove_duplicate",
    solution: [
      {
        title: "Converting array into Set to remove duplicates: ",
        code: `var  books = [ 
  { title: "C++", author: "Bjarne" }, 
  { title: "Java", author: "James" }, 
  { title: "Python", author: "Guido" }, 
  { title: "Java", author: "James" }, 
];

let jsonObject = books.map(JSON.stringify); 
   
// since array has now 4 values as string, set will remove equal string.
let uniqueSet = new Set(jsonObject); 
   
let uniqueArray = Array.from(uniqueSet).map(JSON.parse);`
      },
      {
        title: "Using one of the keys as index:",
        code: ""
      }
    ]
  }
];

export default questionsConfig;
