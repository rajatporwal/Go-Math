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
    question: 'Odd even sort array',
    category: ['array'],
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
];

export default questionsConfig;
