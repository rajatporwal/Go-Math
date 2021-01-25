import {
  STRING_REVERSE,
  INTEGER_REVERSAL,
  CAPITALIZES_FIRST_LETTER,
  VOWEL_COUNT,
  PALINDROME,
  ANAGRAMS,
  ARRAY_CHUNKING
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
    question: "Odd even sort array",
    category: ["array"],
    id: "odd_even_sort_array",
    solution: [
      {
        title: "First odd then even no",
        code: `function sort(arr) {
  return arr.sort((a, b) => b % 2 - a % 2 || a - b)
}

sort([4, 3, 6, 8, 10, 1, 9, 5]);  // output: [1, 3, 5, 9, 4, 6, 8, 10]`
      },
      {
        title: "First even then odd no",
        code: `function sort(arr) {
  return arr.sort((a, b) => a % 2 - b % 2 || a - b)
}

sort([4, 3, 6, 8, 10, 1, 9, 5]);    // output: [4, 6, 8, 10, 1, 3, 5, 9]`
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
  },
  {
    question: "String Palindrome",
    category: ["string"],
    id: "palindrome",
    solution: [
      {
        title: "Using every() method",
        code: PALINDROME.usingEvery
      },
      {
        title: "By reversing array",
        code: PALINDROME.usingReverse
      }
    ]
  },
  {
    question: "String Anagrams",
    category: ["string"],
    id: "anagrams",
    directions: `Check to see if two provided strings are anagrams of eachother.
    One string is an anagram of another if it uses the same characters
    in the same quantity. Only consider characters, not spaces
    or punctuation. Consider capital letters to be the same as lower case
    <br /><br />
    <b>Examples</b>
    <ul>
      <li>anagrams('rail safety', 'fairy tales') --> True</li>
      <li>anagrams('RAIL! SAFETY!', 'fairy tales') --> True</li>
      <li>anagrams('Hi there', 'Bye there') --> False</li>
      </ul>`,
    solution: [
      {
        title: "using inbuilt methdos",
        code: ANAGRAMS.usingInbuiltMethods
      },
      {
        title: "Without using inbuilt methdos",
        code: ANAGRAMS.withoutUsingInbuiltMethods
      }
    ]
  },
  {
    question: "Harmless Ransom Note",
    category: ["string"],
    id: "hrn",
    directions: `Given an arbitrary ransom note string and another string containing words from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
    <br /><br />Each word in the magazine string can only be used once in your ransom note.`,
    solution: [
      {
        title: "for …of",
        code: `function harmlessRansomNote(noteText, magazineText) {
  const noteArray = noteText.split(' ');
  const magazineArray = magazineText.split(' ');
  const magazineObject = {};
  
  for (const word of magazineArray) {
    !magazineObject[word] ? magazineObject[word] = 1 : magazineObject[word]++;
  }
  
  for (const word of noteArray) {
    if (!magazineObject[word]) return false;
    magazineObject[word]--;
  }
  return true;
}`
      },
      {
        title: "forEach & every",
        code: `function harmlessRansomNote(noteText, magazineText) {
  const noteArray = noteText.split(' ');
  const magazineArray = magazineText.split(' ');
  const magazineObject = {};
  
  magazineArray.forEach((word) => {
    if (!magazineObject[word]) magazineObject[word] = 0;
    magazineObject[word]++;
  });

  const noteIsPossible = noteArray.every((word) => {
    if (!magazineObject[word]) { return false; }
    magazineObject[word]--;
    return magazineObject[word] >= 0;
  });

  return noteIsPossible;
}`
      },
      {
        title: "reduce & every",
        code: `function harmlessRansomNote(noteText, magazineText) {
  const noteArray = noteText.split(' ');
  const magazineArray = magazineText.split(' ');
  const reducer = (acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }
  const noteObject = noteArray.reduce(reducer, {});
  const magazineObject = magazineArray.reduce(reducer, {});

  const noteIsPossible = Object.entries(noteObject).every(([key, noteCounts]) => !magazineObject[key] || magazineObject[key] >= noteCounts);

  return noteIsPossible;
}`
      },
      {
        title: "every & indexOf & splice (Best)",
        code: `function harmlessRansomNote(noteText, magazineText) {
  const noteArray = noteText.split(' ');
  const magazineArray = magazineText.split(' ');
  const noteIsPossible = noteArray.every((word) => {
    const indexOfWord = magazineArray.indexOf(word);
    if (indexOfWord > -1) {
      magazineArray.splice(indexOfWord, 1);
      return true;
    }
  });
  return noteIsPossible;
}`
      }
    ]
  },
  {
    question: "Array Chunking",
    category: ["array"],
    id: "chunking",
    directions: `Given an array and chunk size, divide the array into many subarrays
    where each subarray is of length size. <br /><br />
    <b>Examples</b>
    <ul>
    <li>chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]] </li>
    <li>chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]] </li>
    <li>chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]] </li>
    <li>chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]] </li>
    <li>chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]</li>
    </ul>`,
    solution: [
      {
        title: "using inbuilt methdo slice()",
        code: ARRAY_CHUNKING.usingInbuiltMethods
      },
      {
        title: "Without using inbuilt methdos",
        code: ARRAY_CHUNKING.withoutUsingInbuiltMethods
      }
    ]
  },
  {
    question: "String MaxChar",
    category: ["string"],
    id: "max_char",
    directions: `Given a string, return the character that is most
    commonly used in the string.
    <br /><br />
    <b>Examples</b>
    <ul>
    <li>maxChar("abcccccccd") === "c" </li>
    <li>maxChar("apple 1231111") === "1"</li></ul>`,
    solution: [
      {
        code: `function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

    return maxChar;
  }

module.exports = maxChar;`
      }
    ]
  }
];

export default questionsConfig;
