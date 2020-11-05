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
