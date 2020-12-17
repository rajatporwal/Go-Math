const STRING_HELPER = {
  heading: "String",
  category: "string",
  pathname: "/ds",
  children: [
    {
      title: "substr()",
      id: "string/substr",
      description: `Counts index from start index to the next provided end index.`,
      list: [
        "Returns new string",
        "ex: if substr(5, 11) then it will return string from index 5 to 16.",
        "If negative index is passed it will count indexs from right to left"
      ],
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'

str.substr(4);      // s a great day.'
str.substr(5, 11);  // a great da
str.substr(-2);     // ay.
str.substr(-1, -4)  // no output`
        }
      ],
      note: null
    },
    {
      title: "substring()",
      id: "string/substring",
      description: `Counts index from start index to the end index.`,
      list: ["If negative index is passed it will return whole string"],
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'

str.substring(4);      // s a great day.'
str.substring(5, 11);  //  a gre
str.substring(-2);     // It is a great day.
str.substring(-1, -4)  // no output`
        }
      ],
      note: null
    },
    {
      title: "trim()",
      id: "string/trim",
      description: `Removes the white spaces from both the ends of the given string.`,
      list: null,
      code: [
        {
          title: null,
          code: `var str = "   geeks   ";

str.trim();        // 'geeks'
str.trimLeft();    // 'geeks   '
str.trimRight();   // '   geeks'`
        }
      ],
      note: null
    },
    {
      title: "startsWith()",
      id: "string/startsWith",
      description: `Check whether the given string start's with the characters of the specified string or not.`,
      list: [
        "Case sensitive",
        "If index is passed then it will consider passed index as starts index of the string and then checks it"
      ],
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'

str.startsWith('It');         // true
str.startsWith('Great');      // false
str.startsWith('great', 8);   // true`
        }
      ],
      note: null
    },
    {
      title: "endsWith()",
      id: "string/endsWith",
      description: `Check whether the given string ends with the characters of the specified string or not.`,
      list: [
        "Case sensitive",
        "If index is passed then it will consider passed index as end index of the string and then checks it"
      ],
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'

str.endsWith('day.');       // true
str.endsWith('great', 13);  // true, `
        }
      ],
      note: null
    },
    {
      title: "includes()",
      id: "string/includes",
      description: `Check whether the given string includes the characters of the specified string or not.`,
      list: [
        "Case sensitive",
        "If positive index is passed then it will start searching after the passed index",
        "If negative index is passed then entire array will be searched"
      ],
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'

str.includes("gre");       // true
str.includes("Gre");       // false
str.includes("g", 5);   // true
str.includes("g", 10);   // false
str.includes("g", -2);   // true`
        }
      ],
      note: null
    },
    {
      title: "toUpperCase/toLowerCase",
      id: "string/case",
      description: `Converts string into uppercase/lowercase.`,
      list: null,
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'
          
str.toUpperCase();        // IT IS A GREAT DAY.
str.toLowerCase();        // it is a great day.`
        }
      ],
      note: null
    },
    {
      title: "toLocaleUpperCase/toLocaleLowerCase",
      id: "string/localeCase",
      description: `Converts a string to uppercase/lowercase letters, according to the host's current locale.`,
      list: [
        "The locale is based on the language settings of the browser.",
        "Generally, this method returns the same result as the toLowerCase() method.",
        "However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary."
      ],
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'
          
str.toLocaleUpperCase();        // IT IS A GREAT DAY.
str.toLocaleLowerCase();        // it is a great day.`
        }
      ],
      note: null
    },
    {
      title: "charCodeAt()",
      id: "string/charCodeAt",
      description: `returns a Unicode character code of the character present at the index.`,
      list: null,
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'

str.charCodeAt(4);     // 115
str.charCodeAt(5);     // 32
str.charCodeAt(6);     // 97`
        }
      ],
      note: null
    },
    {
      title: "fromCharCode()",
      id: "string/fromCharCode",
      description: `Converts the UTF-16 codes into their equivalent characters and returns the string containing them.`,
      list: null,
      code: [
        {
          title: null,
          code: `String.fromCharCode(65, 66, 69);   // ABE`
        }
      ],
      note: null
    },
    {
      title: "length",
      id: "string/length",
      description: `returns the length count`,
      list: null,
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'

const len = str.length;     // 18`
        }
      ],
      note: null
    },
    {
      title: "charAt",
      id: "string/charAt",
      description: `returns the character present at the passed index`,
      list: null,
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'

str.charAt(9);    // r
str.charAt(20);   // empty string
str.charAt(-2);   // empty string`
        }
      ],
      note: "If negative index is passed then it will return empty string."
    },
    {
      title: "indexOf/lastIndexOf",
      id: "string/indexOf/lastIndexOf",
      description: `returns the first matched index`,
      list: [
        "If second parameter is passed in indexOf() method then it will skip the starting characters with the passed index.",
        "If second parameter is passed in lastIndexOf() method then it will skip the last characters/characters from right with the passed index."
      ],
      code: [
        {
          title: null,
          code: `var str = 'It is a great day.'

str.lastIndexOf('t');      // 12
str.indexOf('t');          // 1
str.lastIndexOf('t', 3);   // 1
str.indexOf('t', 2);       // 12`
        }
      ],
      note: null
    },
    {
      title: "String.raw",
      id: "string/raw",
      description: `Skips the escape char and print it as it is.`,
      list: null,
      code: [
        {
          title: null,
          code: `console.log(\`Hello world:\\n new line\`);              // 'Hello world
                                                     //  new line'

console.log(String.raw\`Hello world:\\n new line\`);    // Hello world:\\n new line`
        }
      ],
      note: null
    },
    {
      title: "repeat()",
      id: "string/repeat",
      description: `String.repeat() is used to build a new string containing a specified number of copies of the string on which this function has been called.`,
      list: null,
      code: [
        {
          title: null,
          code: `var rep = " Repeat me";

rep.repeat(3);      // Repeat me Repeat me Repeat me
rep.repeat(3.8);    // Repeat me Repeat me Repeat me`
        }
      ],
      note:
        "Converts decimal value into lower boundary integer, i.e. 3.8 will automatically get converted to 3."
    },
    {
      title: "split()",
      id: "string/split",
      description: null,
      list: [
        "If negative index is passed it will work as a normal function, i.e. it will spplit whole string with the passed condition"
      ],
      code: [
        {
          title: null,
          code: `var str = "U want to split";

str.split("");          // [ "U", " ", "w", "a", "n", "t", " ", "t", "o", " ", "s", "p", "l", "i", "t" ]  
str.split(" ");         // [ "U", "want", "to", "split" ]
str.split(" ", 2);      // [ "U", "want" ]
str.split(" ", 3);      // [ "U", "want", "to" ]
str.split(" ", -1);     // [ "U", "want", "to", "split" ]`
        }
      ],
      note: null
    },
    {
      title: "concat()",
      id: "string/concat",
      description: null,
      list: null,
      code: [
        {
          title: null,
          code: `const str1 = "It is"
const str2 = "a great day."

str1.concat(str2);    // It is a great day.`
        }
      ],
      note: null
    },
    {
      title: "valueOf()",
      id: "string/valueOf",
      description: "Return the primitive value of a string object.",
      list: null,
      code: [
        {
          title: null,
          code: `var str = "Hello World!";
var res = str.valueOf();    // Hello World`
        }
      ],
      note: null
    },
    {
      title: "slice()",
      id: "string/slice",
      description:
        "Extracts a section of a string and returns it as a new string, without modifying the original string.",
      list: [
        "<b>beginIndex: </b>The zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3, it is treated as str.length - 3.) If beginIndex is not a number after Number(beginIndex), it is treated as 0. If beginIndex is greater than or equal to str.length, an empty string is returned.",
        `<b>endIndex: </b> Optional The zero-based index before which to end extraction. The character at this index will not be included. If endIndex is omitted or undefined, or greater than str.length, slice() extracts to the end of the string. If negative, it is treated as str.length + endIndex. (For example, if endIndex is -3, it is treated as str.length - 3.) If it is not undefined and not a number after Number(endIndex), an empty string is returned. If endIndex is specified and startIndex is negative, endIndex should be negative, otherwise an empty string is returned. (For example, slice(-3, 0) returns "". If endIndex is specified, and startIndex and endIndex are both positive or negative, endIndex should be greater than startIndex, otherwise an empty string is returned. (For example, slice(-1, -3) or slice(3, 1) returns "".)`
      ],
      code: [
        {
          title: null,
          code: `const str = "It is a great day";

str.slice(1, 6);    // t is
str.slice(1, -3);   // t is a great
str.slice(10);      // eat day`
        }
      ],
      note: "End index is not included"
    },
    {
      title: "search()",
      id: "string/search",
      description: `Return index of first matched character/regex`,
      list: [
        "String.search()  is used to search for a match in between regular expressions and a given string object",
        "Return -1 if no match found"
      ],
      code: [
        {
          title: null,
          code: `const str = "Our goal is to find all the G in the string.";

let re1 = /g/; 
let re2 = /z/;
let re3 = /g/gi;

str.search(re1);   // 4
str.search(re2);   // -1
str.search(re3);   // 4
str.search('a');   // 6`
        }
      ],
      note: null
    },
    {
      title: "match()",
      id: "string/match",
      description: `Return array with all the matched characters/regex`,
      list: [
        "String.match()  is used to search for a match in between regular expressions and a given string object",
        "Return null if no match found"
      ],
      code: [
        {
          title: null,
          code: `const str = "Our goal is to find all the G in the string.";

let re1 = /g/; 
let re2 = /z/;
let re3 = /g/gi;

str.match(re1);    // ["g", index: 4, input: "Our goal is to find all the G in the string.", groups: undefined]
str.match(re2);    // null
str.match(re3);    // ["g", "G", "g"]`
        }
      ],
      note: null
    },
    {
      title: "replace()",
      id: "string/replace",
      description: `Replace a part of the given string with some another string or a regular expression. `,
      list: null,
      code: [
        {
          title: null,
          code: `const str = "It is a great day.";

str.replace(/day/, 'night');   // It is a great night
str.replace(/a/g, 'A');   // It is A greAt dAy.`
        }
      ],
      note: null
    },
    {
      title: "localeCompare()",
      id: "string/localeCompare",
      description: `The localeCompare method returns a number indicating whether str1 comes before, after or is the same as str2 in sort order.`,
      list: [
        "Returns -1 if str1 is sorted before str2",
        "Returns 0 if the two strings are equal",
        "Returns 1 if str1 is sorted after str2"
      ],
      code: [
        {
          title: null,
          code: `var str1 = "ab";
var str2 = "cd";
var str3 = "ab";

str1.localeCompare(str2);      // -1
str2.localeCompare(str1);      // 1
str1.localeCompare(str3);      // 0`
        }
      ],
      note: null
    },
    {
      title: "padStart()/padEnd()",
      id: "string/pad",
      description: `padStart and padEnd add the spaces before and after the string respectively.`,
      list: null,
      code: [
        {
          title: null,
          code: `const str = "Hello";

str.padStart(10);    // output: "       Hello"
str.padEnd(10);      // output: "Hello       "`
        }
      ],
      note: null
    }
  ]
};

export default STRING_HELPER;
