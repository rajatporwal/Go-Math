import {
  STRING_REVERSE,
  INTEGER_REVERSAL,
  CAPITALIZES_FIRST_LETTER,
  VOWEL_COUNT
} from "../helper/questionsHelper";

const questionsConfig = [
  {
    question: "Remove duplicate objects from array",
    category: ["array"],
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
  },
  {
    question: "Reverse string",
    category: ["string", "reverse"],
    id: "reverse_string",
    solution: [
      {
        title: "Using reduceRight method:",
        code: `${STRING_REVERSE.usingReduceRight}`
      },
      {
        title: "Using reduce method:",
        code: `${STRING_REVERSE.usingReduce}`
      },
      {
        title: "By converting string into array: ",
        code: `${STRING_REVERSE.byConvertingStringIntoArray}`
      },
      {
        title: "Using loop: ",
        code: `${STRING_REVERSE.usingLoop}`
      }
    ]
  },
  {
    question: "Reverse Integer",
    category: ["number", "reverse"],
    id: "reverse_integer",
    solution: [
      {
        title: null,
        code: `${INTEGER_REVERSAL.reverse}`
      }
    ]
  },
  {
    question: "Capitalizes first letter of every word in a sentence",
    category: ["string"],
    id: "capitalizes",
    solution: [
      {
        title: "Using array",
        code: `${CAPITALIZES_FIRST_LETTER.usingArray}`
      },
      {
        title: "Using loop",
        code: `${CAPITALIZES_FIRST_LETTER.usingLoop}`
      }
    ]
  },
  {
    question: "Find total vowel count in string",
    category: ["string", "regex"],
    id: "vowel_count",
    solution: [
      {
        title: "Using regex",
        code: `${VOWEL_COUNT.usingRegex}`
      },
      {
        title: "Using loop",
        code: `${VOWEL_COUNT.usingLoop}`
      }
    ]
  }
];

export default questionsConfig;
