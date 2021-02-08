export const STRING_REVERSE = {
  usingReduceRight: `  function reverse(str) {
    return str
           .split("")
           .reduceRight((rev, char) => rev + char, "");
   };`,
  usingReduce: `  function reverse(str) {
    return str
           .split("")
           .reduce((rev, char) => char + rev, "");
  }`,
  byConvertingStringIntoArray: `  function reverse(str) {
    return str
           .split('')
           .reverse()
           .join('');
  }`,
  usingLoop: ` function reverse(str) {
    let reversed = '';
  
    for (let character of str) {
      reversed = character + reversed;
    }
    return reversed;
 }`
};

export const INTEGER_REVERSAL = {
  reverse: `  function reverseInt(n) {
    const reversed = n
      .toString()
      .split('')
      .reverse()
      .join('');

    return parseInt(reversed) * Math.sign(n);
  }`
};

export const CAPITALIZES_FIRST_LETTER = {
  usingArray: `  function capitalizes(str) {
    const words = [];
    for(let word of str.split(' ')) {
      words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
  }`,
  usingLoop: `function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}`
};

export const VOWEL_COUNT = {
  usingLoop: `function vowels(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];
  
    for (let char of str.toLowerCase()) {
      if (checker.includes(char)) {
        count++;
      }
    }
  
    return count;
  }`,
  usingRegex: `function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }`
};

export const PALINDROME = {
  usingEvery: `// palindrome("abba") === true
// palindrome("abcdefg") === false
          
  function palindrome(str) {
    return str.split('').every((char, i) => {
      return char === str[str.length - i - 1];
    });
  }`,
  usingReverse: `function palindrome(str) {
    const reversed = str
      .split('')
      .reverse()
      .join('');
  
    return str === reversed;
  }`
};

export const ANAGRAMS = {
  usingInbuiltMethods: `function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
  }
  
function cleanString(str) {
  return str
    .replace(/[^\\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}`,
  withoutUsingInbuiltMethods: `function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
    
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
    return true;
  }
    
  function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\\w]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }

  return charMap;
 }`
};

export const ARRAY_CHUNKING = {
  usingInbuiltMethods: `function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}`,
  withoutUsingInbuiltMethods: `function chunk(arr, chunk) {
  const chunked = [];
  let count = [];

  for(var ele of arr) {
    if(count.length === chunk) {
      chunked.push(count);
      count = [];
    }
      count.push(ele);
  }

  chunked.push(count)
  return chunked;
}`
};
