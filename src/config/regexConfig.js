const regexConfig = [
  {
    heading: "Regex",
    pathname: "/regex",
    children: [
      {
        title: "Two ways of writing Regex",
        id: "two_ways_of_writing_regex",
        description: null,
        list: ["let regex = new RegExp('Hello')", "let regex = /hello/"],
        code: null,
        note: null
      },
      {
        title: "Regex Methods",
        id: "regexMethods",
        description: null,
        list: null,
        code: [
          {
            title:
              "<b>test : </b> returns true if pattern is found in the passed string; false if not.",
            code: `   let txt = "Programming courses always starts with a hello world example"
            let  regex1  = /hello/
            let  regex2  = /worlds/
            
            regex1.test(txt) 		// output: true
            regex2.test(txt) 		// output: false`
          },
          {
            title:
              "<b>exec : </b>returns an object for single match and array for multiple matches.",
            code: ` let txt = "Programming courses always starts with a hello world example hello"
            let regex1  = /hello/
            let regex2  = /hello/g
            let regex3  = /worlds/g
              
             - regex1.exec(txt)
          
            /*
            output:
              {
                0: "hello",
                  groups: undefined,
                index: 41,
                input: "Programming courses always starts with a hello world example.",
              }
            */
          
            - regex2.exec(txt)	  // output: ["hello, "hello"]
            - regex3.exec(txt)	  // output: null`
          },
          {
            title:
              "<b>toString : </b> returns a string of the regular expression syntax.",
            code: null
          }
        ],
        note: null
      },
      {
        title: "Regular Expression Flags",
        id: "regular_expression_flags",
        description: null,
        list: [
          "<b>g : </b> global, it matches more than one occurrence",
          "<b>i : </b> case insensitive match",
          "<b>m : </b>multi line match"
        ],
        code: [
          {
            title: null,
            code: `/pattern/flags new RegExp("pattern", "flags")`
          }
        ],
        note: null
      },
      {
        title: "String Methods",
        id: "string_methods",
        description: null,
        list: null,
        code: [
          {
            title:
              "<b>match : </b> returns an array of matches just like exec on RegExp",
            code: null
          },
          {
            title: "<b>search : </b>returns an indexed of the matched String",
            code: `let txt = "Programming courses always starts with a hello world example hello"
            let regex1  = /hello/g
            let regex2  = /hellos/g
          
          console.log(txt.search(regex1)); 		// output: 41, it returns only first matched index
          
          console.log(txt.search(regex2)); 		// output: -1`
          },
          {
            title: "<b>replace : </b> replaces matches with a string",
            code: `let txt = "Programming courses always starts with a hello world example hello"
            let regex1  = /hello/
            let regex2  = /hello/g
          
           console.log(txt.replace(regex1, "hi"));  // output: Programming courses always starts with a hi world example hello
          
           console.log(txt.replace(regex2, "hi"));  // output: Programming courses always starts with a hi world example hi
          
           Note: replace returns new string.`
          },
          {
            title:
              "<b>split : </b>splits a string into an array. The division is based on the regular expression pattern",
            code: `  let txt = "Programming courses alwayS starts with a hello world example"
            let  space  = /\\s/;
            
            txt.split(space);  // output: ["Programming", "courses", "always", "starts", "with", "a", "hello", "world", "example", "hello"]`
          }
        ],
        note: null
      },
      {
        title: "exec() vs match()",
        id: "exec_vs_match",
        description: null,
        list: [
          "match() will return all the matches",
          "exec will work as a loop, the more time you call it will return next matched element"
        ],
        code: [
          {
            title: null,
            code: `let regex1  = /s\\s/;
            let regex2  = /s\\s/g; 		// g flag will match all the s
            let regex3  = /s\\s/gi; 		// i will match all the s (ignores case)
            
              - txt.match(regex1)		// output: ['s']
              - txt.match(regex2)		// output: ['s', 's']
              - txt.match(regex3)		// output: ['s', 'S', s']
            
              - txt.exec(regex1)		// output: ["s ", index: 18]
              - txt.exec(regex2)		// output: ["S ", index: 25]
              - txt.exec(regex3)		// output: ["s ", index: 32]
              - txt.exec(regex3)		// output: null, as there is no more match having space after s`
          }
        ],
        note: null
      }
    ]
  },
  {
    heading: "Meta Characters",
    pathname: "/regex",
    children: [
      {
        title: "Characters",
        id: "characters",
        description: null,
        list: null,
        code: null,
        note: null,
        table: [
          {
            columns: [
              {
                title: "",
                dataIndex: "character",
                key: "character"
              },
              {
                title: "Description",
                dataIndex: "description",
                key: "description"
              },
              {
                title: "Regex",
                dataIndex: "regex",
                key: "regex"
              },
              {
                title: "Example Matches",
                dataIndex: "example",
                key: "example"
              }
            ],
            data: [
              {
                character: "^",
                description: "works as negation when used inside []",
                regex: "/A[^a-d]T/",
                example: "it will not match words having a-d after A"
              },
              {
                character: ".",
                description: "wild card",
                regex: "/h.t/g",
                example: "hat, het, h t, h@t etc."
              },
              {
                character: "\\",
                description: "returns literal value",
                regex: "/\\./",
                example: "match all the . in the string"
              },
              {
                character: "/",
                description: "",
                regex: "",
                example: ""
              },
              {
                character: "()",
                description: "Grouping",
                regex: "/([a-d][1-5]){5}/g",
                example: "a5b1c7d9, a2b8c4d3, a5b1c7d4"
              },
              {
                character: "[]",
                description: "Specify group of characters in [] brackets",
                regex: "/gr[ae]y/",
                example: "grey or gray"
              },
              {
                character: "=",
                description: "",
                regex: "",
                example: ""
              },
              {
                character: "#",
                description: "",
                regex: "",
                example: ""
              },
              {
                character: "!",
                description: "",
                regex: "",
                example: ""
              },
              {
                character: ":",
                description: "",
                regex: "",
                example: ""
              },
              {
                character: ":",
                description: "",
                regex: "",
                example: ""
              },
              {
                character: "|",
                description: "",
                regex: "",
                example: ""
              }
            ]
          }
        ]
      },
      {
        title: "Control Characters",
        id: "control_characters",
        description: null,
        list: null,
        code: null,
        note: null,
        table: [
          {
            columns: [
              {
                title: "Symbol",
                dataIndex: "symbol",
                key: "symbol"
              },
              {
                title: "Description",
                dataIndex: "description",
                key: "description"
              }
            ],
            data: [
              {
                symbol: "\\t",
                description: "tab"
              },
              {
                symbol: "\\v",
                description: "vertical tab"
              },
              {
                symbol: "\\n",
                description: "new line"
              },
              {
                symbol: "\\r",
                description: "carriage return"
              }
            ]
          }
        ]
      },
      {
        title: "Indicating Character Repetition",
        id: "indicating_character_repetition",
        description: null,
        list: null,
        code: null,
        note: null,
        table: [
          {
            columns: [
              {
                title: "Symbol",
                dataIndex: "symbol",
                key: "symbol"
              },
              {
                title: "Description",
                dataIndex: "description",
                key: "description"
              },
              {
                title: "Regex",
                dataIndex: "regex",
                key: "regex"
              },
              {
                title: "Example Matches",
                dataIndex: "example",
                key: "example"
              }
            ],
            data: [
              {
                symbol: "*",
                description: "zero or more",
                regex: "/hats?/",
                example: "hat, hats, hatss, hatsss"
              },
              {
                symbol: "+",
                description: "one or more",
                regex: "/hats+/",
                example: "hats, hatss, hatsss"
              },
              {
                symbol: "?",
                description: "zero or one",
                regex: "/hats?/",
                example: "hat, hats"
              },
              {
                symbol: "{min}",
                description: "exact equal to minimum",
                regex: "/\\d{3}/",
                example: "467, 568, 907"
              },
              {
                symbol: "{min, }",
                description: "min to infinite",
                regex: "/\\d{3,}/",
                example: "574, 83434790, 341343"
              },
              {
                symbol: "{min,max}	",
                description: "min to max times",
                regex: "/\\d{2,4}/",
                example: "574, 8790, 341"
              }
            ]
          }
        ]
      },
      {
        title: "Greediness and Laziness",
        id: "greediness_and_laziness",
        description: "By Default Regular expression are greedy.",
        list: [
          "<b>* : </b> will grab as much as possible",
          "<b>? : </b> will grab as little as possible, it makes the regex lazyh"
        ],
        code: [
          {
            title: null,
            code: `let txt = "\\<p>Para 1</p><p>Para 2</p>"
            let regex1  = /<p>.*<\\/p>/;
            let regex2  = /<p>.*?<\\/p>/;
            
            console.log(txt.match(regex1));		// output : <p>Para 1</p><p>Para 2</p>
            console.log(txt.match(regex2)); 		// output : <p>Para 1</p>`
          }
        ],
        note: null
      },
      {
        title: "Character Set Shorthand",
        id: "character_set_shorthand",
        description: null,
        list: null,
        code: null,
        note: null,
        table: [
          {
            columns: [
              {
                title: "Symbol",
                dataIndex: "symbol",
                key: "symbol"
              },
              {
                title: "Regex",
                dataIndex: "regex",
                key: "regex"
              },
              {
                title: "Description",
                dataIndex: "description",
                key: "description"
              }
            ],
            data: [
              {
                symbol: "\\d",
                regex: "[0-9]",
                description: "Allow only digits"
              },
              {
                symbol: "\\w",
                regex: "[a-zA-Z0-9_]",
                description: "Allows alpha numeric characters"
              },
              {
                symbol: "\\s",
                regex: "[ \\t\\r\\n]",
                description: "Allow space of any type"
              }
            ]
          }
        ]
      },
      {
        title: "Character Set Shorthand For Negation",
        id: "character_set_shorthand_for_negation",
        description: null,
        list: null,
        code: null,
        note: null,
        table: [
          {
            columns: [
              {
                title: "Symbol",
                dataIndex: "symbol",
                key: "symbol"
              },
              {
                title: "Regex",
                dataIndex: "regex",
                key: "regex"
              },
              {
                title: "Description",
                dataIndex: "description",
                key: "description"
              }
            ],
            data: [
              {
                symbol: "\\D",
                regex: "[0-9]",
                description: "Do not allow only digits"
              },
              {
                symbol: "\\W",
                regex: "[a-zA-Z0-9_]",
                description: "Do not allow alpha numeric characters"
              },
              {
                symbol: "\\S",
                regex: "[ \\t\\r\\n]",
                description: "Do not allow space of any type"
              }
            ]
          }
        ]
      },
      {
        title: "Anchored Expressions",
        id: "anchored_expressions",
        description: null,
        list: [
          "<b>^ : </b> match to the start of the line",
          "<b>$ : </b> match to the end of line"
        ],
        code: [
          {
            title: null,
            code: `let txt1 = "The dot is the very powerful name.";
            let txt2 = "Dot is The very powerful name";
            
            let regex1 = /^The/gi; // Matches only string starting with the
            
            console.log(txt1.match(regex1));   // output : ["The"]
            console.log(txt2.match(regex1));  // output : null
            
            let regex2 = /name.$/gi; // Matches only string ending with name.
            
            console.log(txt1.match(regex2));  // output : ["name."]
            console.log(txt2.match(regex2));  // output : null
            
            let regex3 = /^The.*name.$/; // Matches only string starting with The and ending with name.
            
            console.log(txt1.match(regex3));  // output: ["The dot is the very powerful name."]
            console.log(txt2.match(regex3));  // output: null`
          }
        ],
        note: null
      },
      {
        title: "Accurate Regular Expressions",
        id: "accurate_regular_expressions",
        description: null,
        list: [
          "When possible, define the quantity of repeated expressions.",
          "Narrow the scope of repeated expressions.",
          "Provide clear starting and ending points"
        ],
        code: null,
        note: null
      },
      {
        title: "Word Boundary",
        id: "word_boundary",
        description: null,
        list: [
          "<b>\\b : </b> Word Boundary - Pattern bounded by a non-word character.",
          "<b>\\B : </b> Non word Boundary - Pattern bounded by a word character."
        ],
        code: [
          {
            title: null,
            code: `let txt = "Inplant this idea: plan to plant multiple trees on this planet."
let regex1  = /plan/g;  		// it will match plan word in all of these words Inplant, plan, plant, planet
let regex2  = /\\bplan\\b/g;   // it will match only exact plan word, output: plan
let regex3  = /\\Bplan\\B/g;   // it will match only plan in between words output: Inplant, plant, planet
`
          }
        ],
        note:
          " In <b>\\B</b> word should be surrounded by other words or space."
      }
    ]
  },
  {
    heading: "Grouping",
    pathname: "/regex",
    children: [
      {
        title: "Introduction",
        id: "introduction",
        description: "Grouping in javascript works as split.",
        list: null,
        code: [
          {
            title: null,
            code: `let data = "2018-3-9";
          let regex1 = /^(\\d\\d\\d\\d)[-./](\\d{1,2})[-./](\\d{1,2})$/;
          
          console.log(regex1.exec(data)); // output : [0: "2018-3-9" 1: "2018", 2: "3", 3: "9"]
          
          // above expression will also match: 2018-9-8, 2018-9/8, 2018-9.8, 2018/9-8`
          }
        ],
        note: null
      },
      {
        title: "Capturing Groups",
        id: "capturing_groups",
        description: "Capturing groups are used to capture previous group.",
        list: [
          "To make group non capturing ?: is used.",
          "ex: (?:/d/d)(/d)",
          "back reference do not captures the pattern but it captures the actual string."
        ],
        code: [
          {
            title: "check month and dates are same",
            code: `
  let data = "2018-3-9";
  let regex1 = /^(\\d\\d\\d\\d)[-./](\\d{1,2})[-./]\\2$/; // it match with the second group

  // 2018-9-9, 2018-9/9 true bcs second group is equal to 3rd, \\2 (9 === 9)
  // 2018-9-8 false bcs second group is not equal to 3rd, \\2 (9 !== 8)

  let regex2 = /^(\\d\\d\\d\\d)([-./])(\\d{1,2})\\2(\\d{1,2})$/;

  // now it will only match 2018-9-9, bcs we have captured the second group with \\2
            `
          },
          {
            title: "",
            code: `let regex1 = /([a-d][1-5])\\1/g;		// a1d2 - false, a1a1 - true

            Note: As mentioned above, back reference captures the actual string.`
          }
        ],
        note: "By default groups are capturing."
      },
      {
        title: "Lookahead groups",
        id: "lookahead_groups",
        description:
          "result of lookahead group is not included in response, however it enforces the match",
        list: null,
        code: [
          {
            title: null,
            code: `let txt = "anything.com";

            let regex1 = /\\w+(?=\\.com)/; // output: anything, (lookahead group is not included in response)
            let regex2 = /\\w+(?:\\.com)/; // output: anything.com, (capturing group is included in response)`
          }
        ],
        note: null
      },
      {
        title: "Negative lookahead group",
        id: "negative_lookahead_group",
        description: null,
        list: null,
        code: [
          {
            title: null,
            code: `let txt = "anything.com";

            let regex1 = /\\w+(?!\\.com)/; // output: com, as it will not include "." in the words`
          }
        ],
        note: null
      },
      {
        title: "Meta characters you may need to escape",
        id: "meta_characters",
        description:
          " - &nbsp&nbsp&nbsp&nbsp 	^ 	&nbsp&nbsp&nbsp&nbsp 	\\ 	&nbsp&nbsp&nbsp&nbsp	] ",
        list: null,
        code: null,
        note: null
      },
      {
        title: "Applying Regular Expressions",
        id: "applying_regular_expressions",
        description: null,
        list: null,
        code: null,
        note: null,
        table: [
          {
            columns: [
              {
                title: "Pattern",
                dataIndex: "pattern",
                key: "pattern"
              },
              {
                title: "Regex",
                dataIndex: "regex",
                key: "regex"
              }
            ],
            data: [
              {
                pattern: "Email Address",
                regex: "/^[^\\s@]+@[^\\s@.]+\\.[^\\s@.]+$/"
              },
              {
                pattern: "Twitter Handle",
                regex: "^@?(\\w+)$"
              }
            ]
          }
        ]
      }
    ]
  }
];

export default regexConfig;
