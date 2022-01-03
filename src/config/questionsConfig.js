import {
  STRING_REVERSE,
  INTEGER_REVERSAL,
  CAPITALIZES_FIRST_LETTER,
  VOWEL_COUNT,
  PALINDROME,
  ANAGRAMS,
  ARRAY_CHUNKING,
} from '../helper/questionsHelper';

const questionsConfig = [
  {
    question: 'Remove duplicate objects from array',
    category: ['array'],
    id: 'a_remove_duplicate',
    solution: [
      {
        title: 'Converting array into Set to remove duplicates: ',
        code: `var  books = [ 
  { title: "C++", author: "Bjarne" }, 
  { title: "Java", author: "James" }, 
  { title: "Python", author: "Guido" }, 
  { title: "Java", author: "James" }, 
];

let jsonObject = books.map(JSON.stringify); 
   
// since array has now 4 values as string, set will remove equal string.
let uniqueSet = new Set(jsonObject); 
   
let uniqueArray = Array.from(uniqueSet).map(JSON.parse);`,
      },
      {
        title: 'Using one of the keys as index:',
        code: '',
      },
    ],
  },
  {
    question: 'Matching Brackets',
    category: ['string'],
    id: 'matching_brackets',
    solution: [
      {
        title: null,
        code: `let isMatchingBrackets = function (str) {
  let stack = [];
  let map = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (let word of str) {
    if(map[word]) {
      stack.push(word);
    }
    else {
      let last = stack.pop();
      if (word !== map[last]) {return false};
    }
  }
    if (stack.length !== 0) {return false};
  return true;
}

console.log(isMatchingBrackets("(){}")); // returns true
console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
console.log(isMatchingBrackets("({(()))}}"));  // returns false`,
      },
    ],
  },
  {
    question: 'Odd even sort array',
    category: ['array', 'number'],
    id: 'odd_even_sort_array',
    solution: [
      {
        title: 'First odd then even no',
        code: `function sort(arr) {
  return arr.sort((a, b) => b % 2 - a % 2 || a - b)
}

sort([4, 3, 6, 8, 10, 1, 9, 5]);  // output: [1, 3, 5, 9, 4, 6, 8, 10]`,
      },
      {
        title: 'First even then odd no',
        code: `function sort(arr) {
  return arr.sort((a, b) => a % 2 - b % 2 || a - b)
}

sort([4, 3, 6, 8, 10, 1, 9, 5]);    // output: [4, 6, 8, 10, 1, 3, 5, 9]`,
      },
    ],
  },
  {
    question: 'Reverse string',
    category: ['string', 'reverse'],
    id: 'reverse_string',
    solution: [
      {
        title: 'Using reduceRight method:',
        code: `${STRING_REVERSE.usingReduceRight}`,
      },
      {
        title: 'Using reduce method:',
        code: `${STRING_REVERSE.usingReduce}`,
      },
      {
        title: 'By converting string into array: ',
        code: `${STRING_REVERSE.byConvertingStringIntoArray}`,
      },
      {
        title: 'Using loop: ',
        code: `${STRING_REVERSE.usingLoop}`,
      },
    ],
  },
  {
    question: 'Reverse Integer',
    category: ['number', 'reverse'],
    id: 'reverse_integer',
    solution: [
      {
        title: null,
        code: `${INTEGER_REVERSAL.reverse}`,
      },
    ],
  },
  {
    question: 'Capitalizes first letter of every word in a sentence',
    category: ['string'],
    id: 'capitalizes',
    solution: [
      {
        title: 'Using array',
        code: `${CAPITALIZES_FIRST_LETTER.usingArray}`,
      },
      {
        title: 'Using loop',
        code: `${CAPITALIZES_FIRST_LETTER.usingLoop}`,
      },
    ],
  },
  {
    question: 'Find total vowel count in string',
    category: ['string', 'regex'],
    id: 'vowel_count',
    solution: [
      {
        title: 'Using regex',
        code: `${VOWEL_COUNT.usingRegex}`,
      },
      {
        title: 'Using loop',
        code: `${VOWEL_COUNT.usingLoop}`,
      },
    ],
  },
  {
    question: 'String Palindrome',
    category: ['string'],
    id: 'palindrome',
    solution: [
      {
        title: 'Using every() method',
        code: PALINDROME.usingEvery,
      },
      {
        title: 'By reversing array',
        code: PALINDROME.usingReverse,
      },
    ],
  },
  {
    question: 'String Anagrams',
    category: ['string'],
    id: 'anagrams',
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
        title: 'using inbuilt methdos',
        code: ANAGRAMS.usingInbuiltMethods,
      },
      {
        title: 'Without using inbuilt methdos',
        code: ANAGRAMS.withoutUsingInbuiltMethods,
      },
    ],
  },
  {
    question: 'Harmless Ransom Note',
    category: ['string'],
    id: 'hrn',
    directions: `Given an arbitrary ransom note string and another string containing words from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
    <br /><br />Each word in the magazine string can only be used once in your ransom note.`,
    solution: [
      {
        title: 'for …of',
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
}`,
      },
      {
        title: 'forEach & every',
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
}`,
      },
      {
        title: 'reduce & every',
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
}`,
      },
      {
        title: 'every & indexOf & splice (Best)',
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
}`,
      },
    ],
  },
  {
    question: 'Array Chunking',
    category: ['array'],
    id: 'chunking',
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
        title: 'using inbuilt methdo slice()',
        code: ARRAY_CHUNKING.usingInbuiltMethods,
      },
      {
        title: 'Without using inbuilt methdos',
        code: ARRAY_CHUNKING.withoutUsingInbuiltMethods,
      },
    ],
  },
  {
    question: 'Two Sum',
    category: ['array', 'number'],
    id: 'two_sum',
    directions:
      'Given an array and sum, find out all the pairs which equals to the passed array size',
    solution: [
      {
        title: '',
        code: `const arr = [1, 6, 4 ,5, 3, 3];

function twoSum(arr, sum) {
  const set = new Set();
  const res = [];
  arr.forEach(ele => {
    set.add(ele);
    if(set.has(sum - ele)) {
      res.push([ele, sum - ele]);
    }
  });
  return res;
}

twoSum(arr, 7);  // [ [6, 1], [3, 4],[3, 4]]`,
      },
    ],
  },
  {
    question: 'String MaxChar',
    category: ['string'],
    id: 'max_char',
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

module.exports = maxChar;`,
      },
    ],
  },
  {
    question: 'setTimeOut()',
    category: ['javascript'],
    id: 'set_time_out',
    directions: '',
    solution: [
      {
        title: 'when variable is declared by var keyword',
        code: `for(var i =0; i<5; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// output: 0, 1, 2, 3, 4, 5, 5, 5, 5, 5`,
      },
      {
        title: 'when variable is declared by let keyword',
        code: `for(let i =0; i<5; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// output: 0, 1, 2, 3, 4, 0, 1, 2, 3, 4`,
      },
      {
        title:
          'when variable is declared with const keyword outside of loop and with var inside loop',
        code: `const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

/* output: 
  Index: 4, element: undefined
  Index: 4, element: undefined
  Index: 4, element: undefined
  Index: 4, element: undefined
*/`,
      },
      {
        title:
          'when variable is declared with const keyword outside of loop and with let inside loop',
        code: `const let = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

/* output: 
  Index: 0, element: 10
  Index: 1, element: 12
  Index: 2, element: 15
  Index: 3, element: 21
*/`,
      },
    ],
  },
  {
    question: 'tripleAdd (function currying)',
    category: ['javascript'],
    id: 'triple_add',
    directions:
      'Currying a function is a technique of translating one function that takes multiple arguments into a sequence of function that each takes a single argument which is exactly out triple add function is',
    solution: [
      {
        title: '',
        code: `function tripleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    }
  }
}

tripleAdd(10)(20)(30); // 60`,
      },
    ],
  },
  {
    question: 'create map(), filter() and reduce() method',
    category: ['javascript'],
    id: 'create_map_filter_reduce',
    directions: null,
    solution: [
      {
        title: 'map()',
        code: `Array.prototype.myMap = function (callback) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};`,
      },
      {
        title: 'filter()',
        code: `Array.prototype.myFilter = function (callback) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};`,
      },
      {
        title: 'reduce()',
        code: `Array.prototype.myReduce = function (callback, accumulator) {
  if (this.length < 1) return 'Array is Empty';

  if (!accumulator) {
    if (this.type[0] === 'string') accumulator = '';
  } else if (this.type[0] === 'number') accumulator = 0;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this.length);
  }
};`,
      },
    ],
  },
  {
    question: 'check if an object is an array',
    category: ['object', 'javascript'],
    id: 'is_array',
    directions: null,
    solution: [
      {
        title: '',
        code: `var arrayList = [1 , 2, 3];
var obj = {'a': 1};

Array.isArray(arrayList);   // true
Object.prototype.toString.call(arrayList) === '[object Array]'    // true

Array.isArray(obj);   // false
Object.prototype.toString.call(obj) === '[object Object]'    // true
`,
      },
    ],
  },
  {
    question: 'check if a number is an integer',
    category: ['number', 'javascript'],
    id: 'is_number',
    directions: null,
    solution: [
      {
        title: '',
        code: `function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4));      // true
console.log(isInt(12.2));   // false
console.log(isInt(0.3));    // false`,
      },
    ],
  },
  {
    question: 'Counter Function using Closures',
    category: ['javascript'],
    id: 'counter_fnc_closure',
    directions: null,
    solution: [
      {
        title: '',
        code: `function myFunc() {
  let count = 0;

  return function() {
    count++;
    return count;
  }
}

  const instanceOne = myFunc();
  const instanceTwo = myFunc();

  instanceOne();     // 1
  instanceOne();     // 2
  instanceOne();     // 3
  instanceTwo();     // 1
  instanceTwo();     // 2
  instanceOne();     // 4`,
      },
    ],
  },
  {
    question: 'call() and apply() methods',
    category: ['javascript'],
    id: 'call_apply',
    directions: null,
    solution: [
      {
        title: 'Ex to use other objects method using call and apply',
        code: `const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log('This car is a \${this.brand}. The price is \${cost}. The year is \${year}. The color is \${color}.');
  }
};
        
const car2 = {
  brand: 'Lamborghini'
};

const car3 = {
  brand: 'Ford'
};

car1.getCarDescription(80000, 2010, 'blue');

// setting this context of car1 to car2
car1.getCarDescription.call(car2, 200000, 2013, 'yellow');

// setting this context of car1 to car3
car1.getCarDescription.apply(car3, [35000, 2012, 'black']);`,
      },
    ],
  },
  {
    question: 'bind() method',
    category: ['javascript'],
    id: 'bind',
    directions:
      'bind() returns the bound function while call and apply invoked immediately',
    solution: [
      {
        title: '',
        code: `this.distance = 10000;

const roadTrip1 = {
  distance: 3000,
  getDistance: function() {
    return this.distance;
  }
};

const roadTrip2 = {
  distance: 5000
};

// it will use global distance var
const getTripDistance = roadTrip1.getDistance;
getTripDistance();               // 10000

// set the current this context to distance variable using bind method
const getTripDistanceUsingBind = roadTrip1.getDistance.bind(roadTrip1);
getTripDistanceUsingBind();      // 3000

const getTripDistanceUsingBind2 = roadTrip1.getDistance.bind(roadTrip2);
getTripDistanceUsingBind2();     // 5000

// we can achieve the same functionality using call and apply method also
// the only difference is that function will get immediately invoked while bind return the bound function

console.log(roadTrip1.getDistance.call(roadTrip1))    // 3000`,
      },
    ],
  },
  {
    question: 'Equivalent Numbers',
    category: ['javascript'],
    id: 'equivalent_numbers',
    directions: null,
    solution: [
      {
        title: '',
        code: `900.9 === 300.3 * 3                     // false

300.3 * 3                               // 900.9000000000001

Number((300.3 * 3).toFixed(2))          // 900.9

Number((300.3 * 3).toPrecision(12))     // 900.9

((300.3 * 10) * 3) / 10                 // 900.9`,
      },
    ],
  },
  {
    question: 'String as Arrays',
    category: ['string', 'array', 'javascript'],
    id: 'string_as_array',
    directions: `Use Array methods on String: <br /> <br />
    - We can only use <b>read-only</b> methods: filter, forEach, map, some, every etc. <br />
    - cannot use: push, pop, slice, shift, reverse etc.`,
    solution: [
      {
        title: '',
        code: `const data1 = 'Jordan Smith';

// setting data1 as a context of this
// second function is passed as callback in filter function
const data2 = [].filter.call(data1, function(ele, index) {
  return index > 6;
})

console.log(data2);       // ['S', 'm', 'i', 't', 'h']`,
      },
    ],
  },
  {
    question: 'Object as a key',
    category: ['object', 'javascript'],
    id: 'object_as_a_key',
    directions: `Only strings are allowed as an Object key in JS
    <br /><br />
    
    if you assing an object as a key, it will add the key like <b>[object Object] </b> instead of actual object`,
    solution: [
      {
        title: '',
        code: `const a = {};
const b = { name: 'b'};
const c = { name: 'c'};

a[b] = 200;
// a['[object Object]'] = 200;

a[c] = 400;
// a['[object Object]'] = 400;

console.log(a[b]);    // 400
// console.log(a['[object Object]']);

console.log(a[c])     // 400

console.log(a)        // { [object Object]: 400 }`,
      },
    ],
  },
  {
    question: 'Find mising number from an unsorted array',
    category: ['array'],
    id: 'find_missing_no',
    directions: null,
    solution: [
      {
        title: 'using summation formula',
        code: `const arr = [2, 4, 3, 1, 6, 9, 8, 10];
  
function findMissingNo(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  
  const arrSum = arr.reduce((c, v) => c + v);
  return sum - arrSum;
}
  
findMissingNo(arr);   // 5`,
      },
      {
        title: 'using loop',
        code: `const arr = [2, 4, 3, 1, 6, 9, 8, 10, 7];

function findMissingNo(arr) {
  const obj = {};
  arr.forEach((ele) => (obj[ele] = true));

  for (var i = 1; i < arr.length + 1; i++) {
    if (!obj[i]) return i;
  }
}

findMissingNo(arr);     // 5`,
      },
      {
        title: 'Sort the array and then run another loop',
        code: '',
      },
    ],
  },
  {
    question: 'caesarCipher',
    category: ['string'],
    id: 'caesar_cipher',
    directions: ` - "Encrypt" like this: <br />
    &nbsp; caesarShift('Attack at dawn!', 12);    // Returns "Mffmow mf pmiz!"
    <br /><br />
 - And "decrypt" like this: <br />
 &nbsp; caesarShift('Mffmow mf pmiz!', -12);    // Returns "Attack at dawn!"<br /><br />
For simplicity, only works with ASCII characters.`,
    solution: [
      {
        title: 'using inbuit method',
        code: `var caesarCipher = function (str, amount) {
  if (amount < 0) {
    return caesarCipher(str, amount + 26);
  }

  var output = "";

  for (var i = 0; i < str.length; i++) {
    var c = str[i];

    if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    output += c;
  }

    return output;
  };

  caesarCipher('Zoo Keeper', 2);   // Bqq Mggrgt`,
      },
      {
        title: 'Without using inbuit method',
        code: `function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };

    return newString;
  }

  caesarCipher('Zoo Keeper', 2);`,
      },
    ],
  },
  {
    question: 'Find Min Max sum after removing each element from the array',
    category: ['array'],
    id: 'find_min_max',
    directions:
      'Remove each element from array from every index and then sum rest of the array elements, find out min and max summation',
    solution: [
      {
        title: 'Using Apply method',
        code: `const arr = [1, 2, 3, 4, 5, 6, 19, 78, 9, 11, 10];

const findMinMax = (arr) => {
  const total = arr.reduce((c, v) => c + v);

  console.log('min', total - Math.max.apply(null, arr));        // 70
  console.log('max', total - Math.min.apply(null, arr));        // 147
};`,
      },
      {
        title: 'Using loop',
        code: `const arr = [1, 2, 3, 4, 5, 6, 19, 78, 9, 11, 10];

const findMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  const total = arr.reduce((c, v) => c + v);

  arr.forEach((ele) => {
    if (ele < min) min = ele;
    if (ele > max) max = ele;
  });

  console.log('min', total - max);        // 70
  console.log('max', total - min);        // 147
};`,
      },
    ],
  },
  {
    question: 'Find length of number without converting it into string',
    category: ['number'],
    id: 'find_length_of_number',
    directions: null,
    solution: [
      {
        title: null,
        code: `let x = 1234578787878;
let len = 0;
while (x !== 0) {
  len += 1;
  x = (x - (x % 10)) / 10;
}

console.log(len); // 13`,
      },
    ],
  },
  {
    question: 'Find the number occurring odd number of times in an array',
    category: ['array', 'x-or'],
    id: 'find_number_occuring_odd_times',
    directions: `Given an array of positive integers. All numbers occur even number of times except one number which occurs odd number of times
    <br /><br />
    <b>Example:</b> 
      <br />
      Input: [1, 2, 3, 2, 3, 1, 3]<br />
      Output: [3] 
      `,
    solution: [
      {
        title: 'Using X-OR operator',
        code: `const arr = [1, 2, 3, 2, 3, 1, 3];

function findOddOccurence(arr) {
  let res = 0;
  arr.forEach((ele) => {
    res = res ^ ele;
  });
}

findOddOccurence(arr);      // Output: 3


/*
  XOR of two elements is 0 if both the elements are same i.e. A ^ A = 0
  XOR of a number x with 0 is x i.e. A ^ 0 = A
*/`,
      },
      {
        title: 'Using Map/Object',
        code: `const arr = [1, 2, 3, 2, 3, 1, 3];

function findOddOccurence(arr) {
  const map = new Map();
  arr.forEach((ele) => {
    if (map.has(ele)) {
      map.delete(ele);
    } else {
      map.set(ele, true);
    }
  });
  for (var i of map.keys()) {
    return i;
  }
}

findOddOccurence(arr);      // Output: 3`,
      },
    ],
  },
  {
    question: 'Tricky JS Question',
    category: ['javascript'],
    id: 'tricky_js_que',
    directions: null,
    solution: [
      {
        title: '+ and - operator',
        code: ` // '+' operator add if both the values are of number type and if not number it will concat them
console.log(2 + '2');     // 22

// '-' is only a number operator i.e. it won't work on string, so it will convert string into number
console.log(2 - '2');     // 0

console.log('abc' - 2);   // NaN, because abc cannot be converted into number
        `,
      },
      {
        title: 'Math.max() and Math.min()',
        code: `console.log(Math.max())      // -Infinity

console.log(Math.min())      // Infinity`,
      },
      {
        title: 'Convert String of Numbers to Array of Numbers',
        code: `const arr = ['1', '9', '8', '4', '0', '0', '2', '7', '0'];

arr.map(Number);          // [1, 9, 8, 4, 0, 0, 2, 7, 0]

arr.map((ele) => +ele);   // [1, 9, 8, 4, 0, 0, 2, 7, 0]`,
      },
      {
        title: 'Create one common function for add(1, 2) and add(1)(2)',
        code: `function add(num1, num2) {
  if (num1 && num2) {
    return num1 + num2;
  } else {
    return function (num2) {
      return num1 + num2;
    };
  }
}

console.log(add(1, 2));     // 3
console.log(add(1)(2));     // 3`,
      },
    ],
  },
  {
    question: 'First character of string is Uppercase or not',
    category: ['string', 'regex'],
    id: 'string_upper_case_first_char',
    directions: null,
    solution: [
      {
        title: null,
        code: `const str1 = 'Abcd';
const str2 = 'abcd';

console.log(str1.match(/^[A-Z]/));    // [0: A, index=0]
console.log(str2.match(/^[A-Z]/));    // null`,
      },
    ],
  },
  {
    question: 'Move Zeros to end of the array',
    category: ['arr'],
    id: 'move_zeros_to_end_of_array',
    directions: null,
    solution: [
      {
        title: 'Time Complexity - O(n), Extra Space O(1)',
        code: `const arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];

function pushZerosToEnd(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }
  while (count < arr.length) {
    arr[count++] = 0;
  }
  return arr;
}

pushZerosToEnd(arr);    //  [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0]`,
      },
      {
        title: 'Using Regex',
        code: `const arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];

function pushZerosToEnd(arr) {
  const str = arr.join('');
  const zeroArr = str.match(/[0]/g);

  return (str.replace(/[0]/g, '') + zeroArr.join('')).split('').map(Number);
}

pushZerosToEnd(arr);    //  [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0]`,
      },
    ],
  },
  {
    question: 'Find mid point of linked list',
    category: ['linked_list'],
    id: 'mid_point_ll',
    directions: `Return the middle node of Linked List <br /><br />
    Conditions:<br />
    - Do not use counter variable<br />
    - Do not retrive size of the list<br />
    - Only iterate through the list one time`,
    solution: [
      {
        title: null,
        code: `function findMidPoint(list) {
  let slow = list.head;
  let fast = list.head;

  while(fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

/* Optional chaining operator:
  "fast.next && fast.next.next" is same as "fast?.next?.next"
*/`,
      },
    ],
  },
  {
    question: 'Find Circular Node in linked list',
    category: ['linked_list'],
    id: 'circular_node_ll',
    directions:
      'Given a linked list, return true if the list is circular, false if it is not.',
    solution: [
      {
        title: null,
        code: `function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
                  
/*
  const ll = new List(); <br />
  const a = new Node('a'); <br />
  const b = new Node('b'); <br />
  const c = new Node('c'); <br />
  ll.head = a; <br />
  a.next = b; <br />
  b.next = c; <br />
  c.next = b; <br />
  circular(ll) // true
*/`,
      },
    ],
  },
  {
    question: 'Find element from last in Linked List',
    category: ['linked_list'],
    id: 'return_last_elment',
    directions: `Given a linked list and integer n, return the element n spaces from the last node in the list.
      <br /> Do not call the size method of the linked list.
      <br /> Assume that n will always be less than the length of the list.`,
    solution: [
      {
        title: null,
        code: `function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  while (n) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}
  
  /*
    const list = new List();
    list.insertLast('a');
    list.insertLast('b');
    list.insertLast('c');
    list.insertLast('d');
    list.insertLast('e');
    list.insertLast('f');
    list.insertLast('g');
    fromLast(list, 2).data // 'e'
  */`,
      },
    ],
  },
  {
    question: 'Stock prices array',
    category: ['array', 'javascript'],
    id: 'stock_prices_array',
    directions: `Find the total profit by buying and selling the stocks any number of times.`,
    solution: [
      {
        title: null,
        code: `// [2, 4, 5, 10, 1, 3] = 10
// [3, 1, 4, 9, 4, 1] = 8
// [1, 4, 2, 9, 4, 5] = 11

const getStocksProfit = arr => {
  let total = 0;
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > arr[i-1]){
      total += arr[i] - arr[i-1];
    }
  }
  return total;
}

getStocksProfit([1, 4, 2, 9, 4, 5]);`,
      },
    ],
  },
];

export default questionsConfig;
