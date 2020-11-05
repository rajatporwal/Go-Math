const javaScriptConfig = [
  {
    heading: "JavaScript Foundation",
    pathname: "/javascript",
    children: [
      {
        title: "Execution Context",
        id: "execution_context",
        desciption: `When the <b>JavaScript</b> engine first encounters your script, it
  creates a global <b>execution context</b> and pushes it to the current 
  <b>execution stack</b>. Whenever the engine finds a function invocation,
  it creates a new <b>execution context</b> for that function and pushes
  it to the top of the <b>stack</b>.`,
        list: [
          "Global Execution Context has Global Object and this in the scope.",
          "Global object in browser is window and in node is global.",
          "An empty javascript file also has the GEC."
        ],
        code: [
          {
            title: null,
            code: `  // An empty JS file
  console.log(this);   			// prints Window object
  console.log(window); 			// prints Window object
  console.log(this === window)	// true (at least for now, as we not added anything)`
          }
        ],
        note: null
      },
      {
        title: "Lexical Environment",
        id: "lexical_environment",
        desciption: ` Every time the <b>JavaScript</b> engine creates an execution context to
    execute the function or global code, it also creates a new 
    <b>lexical environment</b> to store the variable defined in that
    function during the execution of that function. A <b>lexical environment</b> is a data structure that holds
    identifier-variable mapping.`,
        list: null,
        code: [
          {
            title: null,
            code: `  function  findMyName() {
    function  nestedFunction() {
      return  'I am nested function';
    };
  };
    
  function  sayMyName() {
    findMyName();
  };
    
  sayMyName();
    
  console.log(window.sayMyName);  		// prints function defination
  console.log(window.findMyName);  		// prints function defination
  console.log(window.nestedFunction);  	// undefined`
          }
        ],
        note:
          "Only function or variable which are defined at parent level have gloabl lexical scope."
      },
      {
        title: "Hoisting",
        id: "hoisting",
        desciption: `Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
    Hoisting happens on every execution context.`,
        list: [
          "variables are partially hoisted",
          "functions are fully hoisted",
          "only keywords starting with var and function gets hoisted",
          "let and const works as normal variable and they do not get hoisted",
          `Whenever you don't want to get your variable hoisted, use const instead of var`
        ],
        code: [
          {
            title: null,
            code: ` // Initial code

        console.log(a); 			// undefined
        console.log(myName());  	// Rajat
        
        var a = 'hello';
        function myName() {
          return 'Rajat';
        }
      
          console.log(a);			// hello
          console.log(myName());	// rajat
          console.log(b); 		// throw an exception - Uncaught ReferenceError: b is not defined
      
      // Code that gets compiled internally after hoisting (not really, just for explanation
      )
      
        var a = undefined; 		// undefined will get assign to 'a' initially, as variables are hoisted partially	
          function  myName() {	// whole function will get hoisted, as functions are fully hoisted
            return  'Rajat';
          }
          
        console.log(a);
        console.log(myName());
      
        a = 'hello';
          console.log(a);
          console.log(myName());
          console.log(b);`
          },
          {
            title: "Function Hoisting with same name",
            code: ` a();				// Output: Bye
	
        function a() {
          return 'Hi';
        };
        
        a();				// Output: Bye
        
        function b() {
          return 'Bye';
        };
        
        a();				// Output: Bye`
          }
        ],
        note:
          "When there are two functions with same name gets hoisted, it overrides the previously alloted memory with the new function."
      },
      {
        title: "Functions",
        id: "functions",
        desciption: `A <b>JavaScript function</b> is a block of code designed to perform a particular task. A <b>JavaScript function</b> is executed when something invokes it (calls it).
    `,
        list: [
          "Function Declaration gets hoisted",
          "Function Expression are not hoisted"
        ],
        code: [
          {
            title: null,
            code: `  // Function Expression 
        var canada = function() {
          return "cold";
        }
      
      // Function Declaration
        function india() {
          return "warm";
        }	
      
      // Function Invocation/Call/Execution
        canada();		// it will get memory at runtime
        india();		// it will get memory at parse/compile time`
          }
        ],
        note: null
      },
      {
        title: "Arguments",
        id: "arguments",
        desciption: `The <b>arguments</b> object is a local variable available within all non-arrow functions. You can refer to a function's <b>arguments</b> inside that function by using its <b>arguments</b> object. It has entries for each <b>argument</b> the function was called with, with the first entry's index at 0 .
    .
    `,
        list: [
          "arguments are not available for global scope (GEC), it gets created with every execution context."
        ],
        code: [
          {
            title: null,
            code: `function world(a, b) {
          console.log(arguments);		// { 0: "hello", 1: "world" }
        }
        
        console.log(arguments);			// undefined, as it has not created for GEC.
        world("hello", "world");
        `
          }
        ],
        note: null
      },
      {
        title: "Scope Chain",
        id: "scope_chain",
        desciption: `The scope chain is used to resolve the value of variable names in javascript. Without a scope chain the Javascript engine wouldn't know which value to pick for a certain variable name if there are multiple defined at different scopes. Scope chain in javascript is lexically defined, which means that we can see what the scope chain will be by looking at the code.`,
        list: null,
        code: [
          {
            title: null,
            code: `function sayMyName(a) {
          console.log(a);
          return function findMyName(b) {
              console.log(b);
              return function printName(c) {
              console.log(c);
                 return  'Rajat Porwal';
                 }
          }
        }
      
        sayMyName(1);				// 1, [function findMyName]
        sayMyName(1)(2);			// 1, 2, [function printName]
        sayMyName(1)(2)(3);			// 1, 2, 3, [function findMyName]`
          }
        ],
        note: null
      },
      {
        title: "use strict",
        id: "use_strict",
        desciption: `The <b>use strict</b> directive was new in ECMAScript version 5. It is not a statement, but a literal expression, ignored by earlier versions of <b>JavaScript</b>. The purpose of <b>use strict</b> is to indicate that the code should be executed in <b>strict</b> mode. With strict mode, you can not, for example, use undeclared variables.`,
        list: null,
        code: [
          {
            title: "without use strict",
            code: `function weird() {
          height = 50;
          return height;
        }
        
        weird();  // output: 50`
          },
          {
            title: "using use strict",
            code: `  'use strict'
	
        function weird() {
          height = 50;
          return height;
        }
        
        weird();  // Reference error: height is not defined`
          }
        ],
        note: "Undeclared vairables are added to global scope. "
      },
      {
        title: "Function Scope vs Block Scope",
        id: "function_scope_vs_block_scope",
        desciption: null,
        list: [
          "Variables are by default functionally scoped in JS.",
          "Variables declared with the var keyword cannot <b>have Block Scope</b>. Variables declared inside a <b>block</b> {} <b>can</b> be accessed from outside the <b>block</b>",
          "const and let are block scoped."
        ],
        code: [
          {
            title: null,
            code: `  function weird() {
          if(true) {
          var a = 1;
          const b = 1;
          let c = 1;
        }
        console.log(a);  	// output: 1, as variables declared with var keyword are functionally scoped.
        console.log(b); 	// output: Reference error, b is not defined, as variables declared with const and let keyword are blocked scope.
        console.log(c); 	// output: Reference error, c is not defined.
        }`
          }
        ],
        note: null
      },
      {
        title: "IIFE",
        id: "iife",
        desciption: `An Immediately-invoked Function Expression is a way to execute functions immediately, as soon as they are created. IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations.
    `,
        list: ["IIFe has its own execution context. It do not pollutes GEC."],
        code: [
          {
            title: null,
            code: `  	(function (a, b) {
          console.log(a);			// output: 1
          console.log(b);			// output: 2
          }(1, 2));`
          }
        ],
        note: "IIFE are self invoked function, there is no need to call them."
      },
      {
        title: "this",
        id: "this",
        desciption: `The <b>JavaScript</b> this keyword refers to the object it belongs to. In a function, this refers to the global object. In a function, in strict mode, this is undefined . In an event, this refers to the element that received the event.
    `,
        list: null,
        code: [
          {
            title: "this without use strict",
            code: `  	(function () {
          console.log(this);					// Window object
          console.log(window);					// Window object
          console.log(this === window);			// true
          }());
          `
          },
          {
            title: "this with use strict",
            code: `  	(function () {
          'use strict'
           console.log(this);					// undefined
           console.log(window);					// Window object
           console.log(this === window);			// false
           }());
          `
          },
          {
            title: "use of this in object",
            code: `  	const obj = {
          name: 'Billy',
          sing() {
          return 'lalalala' + this.name;		 // because this can access the properties of current object.
          }	
        }
          `
          }
        ],
        note: "this is the object as the function is property of."
      },
      {
        title: "call(), apply(), bind()",
        id: "call_apply_bind",
        desciption: `The <b>call</b>, <b>bind</b> and <b>apply</b> methods can be used to set the this keyword independent of how a function is <b>called</b>. The <b>bind</b> method creates a copy of the function and sets the this keyword, while the <b>call</b> and <b>apply</b> methods sets the this keyword and <b>calls</b> the function immediately.`,
        list: [
          "<b>call()</b> and <b>apply()</b> is used to buy the functions from the another object.",
          "<b>bind()</b> returns the bound function, so that we can use the function later on."
        ],
        code: [
          {
            title: null,
            code: `  function  a() {
          console.log('hi');
        }
      
          function  b() {
          console.log('hi from bind');
        }
      
          a(); // hi
          a.apply(); // hi
          a.call(); // hi
          b.bind(this);
          this.b(); // hi from bind
          `
          },
          {
            title: null,
            code: `  const  wizard  = {
          name:  'Merlin',
          health:  50,
          heal(num1, num2) {
            this.health  +=  num1  +  num2;
            console.log(this.health);
              }
           };
      
          const  archer  = {
          name:  'Robin Hood',
          health:  30
        };
      
        wizard.heal(10, 20); // 80
      
        // To inherit heal method from wizard to archer
      
        console.log(archer); 					// {name: "Robin Hood", health: 30}
        wizard.heal.call(archer, 50, 30); 	// 110, here call is binding heal to the archer's object
        console.log(archer); 					// {name: "Robin Hood", health: 110}
      
        wizard.heal.apply(archer, [50, 30]);  // 190
      
      //  Note: The  only  difference  between  call() and  apply() is  apply  takes  parameters  in  array  form.
      
        const healArcher = wizard.heal.bind(archer, 50, 30);		// as bind will return new function and we are assigning that function into healArcher()
        
        healArcher();			
        console.log(archer);		// {name: "Robin Hood", health: 270}
          `
          },
          {
            title: "more on bind()",
            code: `// function currying
        function  multiply(a, b) {
          return  a*b;
        };
      
         let  multiplyByTwo  =  multiply.bind(this, 2);
         console.log(multiplyByTwo(5)); // 10, as multiplyByTwo already has one parameter as 2 when we have bind that function
        `
          },
          {
            title: "this in arrow function",
            code: `var b = {
          name: 'jay',
          say() { console.log(this) }	
        }
      
        var c = {
          name: 'jay',
          say() return function() { console.log(this) }		// this will create its own exection context in normal function
        }
        
        var d = {
          name: 'jay',
          say() return () => { console.log(this) }		// this is lexically scoped inside arrow function
        }
        
        b.say()		// { name: 'jay', say: [Function] }
        c.say()		// [Function]		
        c.say()()	// Window object, as this inside function will create it's own execution context
        d.say()		// [Function]
        d.say()		// { name: 'jay', say: [Function] }
        
        // Note: this is lexically scoped in arrow function, i.e. arrow function uses this of the parent and do not create its own execution context`
          }
        ],
        note: "Every function has call, apply and bind property."
      },
      {
        title: "Arrow function vs Regular Function",
        id: "Arrow_function_vs_regular_function",
        desciption: `Todo`,
        list: null,
        code: null,
        note: null
      }
    ]
  },
  {
    heading: "Types in JavaScript",
    pathname: "/javascript",
    children: [
      {
        title: "Primitive Types",
        id: "primitive_types",
        desciption: `In JavaScript, a <b>primitive data type</b> is data that is not an object and has no methods. All primitives are immutable, i.e., they cannot be altered.`,
        list: null,
        code: null,
        note: null,
        table: [
          {
            columns: [
              {
                title: "Index",
                dataIndex: "index",
                index: "index"
              },
              {
                title: "Example",
                dataIndex: "example",
                key: "example"
              },
              {
                title: "Data Type",
                dataIndex: "dataType",
                key: "dataType"
              }
            ],
            data: [
              {
                example: "typeof 5",
                dataType: "number"
              },
              {
                example: "typeof true",
                dataType: "boolean"
              },
              {
                example: "typeof 'hello'",
                dataType: "string"
              },
              {
                example: "typeof undefined",
                dataType: "undefined"
              },
              {
                example: "typeof null",
                dataType: "object"
              },
              {
                example: "typeof Symbol('just me')",
                dataType: "symbol"
              }
            ]
          }
        ]
      },
      {
        title: "Non-Primitive Data Types ",
        id: "non_primitive_data_types ",
        desciption: null,
        list: [
          "Referred to collectively as Objects.",
          `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects" target="_blank">[JS Built In Objects]</a>`
        ],
        code: null,
        note: null,
        table: [
          {
            columns: [
              {
                title: "Index",
                dataIndex: "index",
                index: "index"
              },
              {
                title: "Example",
                dataIndex: "example",
                key: "example"
              },
              {
                title: "Data Type",
                dataIndex: "dataType",
                key: "dataType"
              }
            ],
            data: [
              {
                example: "typeof {}",
                dataType: "object"
              },
              {
                example: "typeof []",
                dataType: "object"
              },
              {
                example: "typeof function(){}",
                dataType:
                  "`function` (but internally functions behave like an object)"
              },
              {
                example: "typeof undefined",
                dataType: "undefined"
              },
              {
                example: "typeof null",
                dataType: "object"
              },
              {
                example: "typeof Symbol('just me')",
                dataType: "symbol"
              }
            ]
          }
        ]
      },
      {
        title: "Pass By Value vs Pass By Reference",
        id: "pass_by_value_vs_pass_by_reference",
        desciption: `Primitive data types are passed by value while non-primitive data types are pass by reference.`,
        list: null,
        code: [
          {
            title: null,
            code: `  	var a = 5;
            var b = a;
            b++;
            console.log(a);			// output: 5
            console.log(b);			// output: 6
            
            let obj1 = { name: 'Yao', pass: '123'};
            let obj2 = obj1;
            obj2.pass = '456';
            console.log(obj1);		// output: { name: 'Yao', pass: '456'}
            console.log(obj2);		// output: { name: 'Yao', pass: '456'}
            `
          }
        ],
        note: null
      },
      {
        title: "Shallow Clone vs Deep Clone",
        id: "shallow_clone_vs_deep_clone",
        desciption: null,
        list: null,
        code: [
          {
            title: null,
            code: `  	let obj = {
              a: 'a',
                b: 'b',
                c: {
                  deep: 'try and copy me'
                }
              };
          
            let clone1 = Object.assign({}, obj); // shallow copy, do not change reference for nested objects
            let clone2 = {...obj}; // shallow copy
            let superClone  =  JSON.parse(JSON.stringify(obj)); // deep copy
          
            obj.b  =  'updated value';
            obj.c.deep  =  "hahahaha";
          
            console.log(obj);          // { a: 'a', b: 'updated value', c: { deep: 'hahahaha' }}
            console.log(clone1);       // { a: 'a', b: 'b', c: { deep: 'hahahaha' }}
            console.log(clone2);       // { a: 'a', b: 'b', c: { deep: 'hahahaha' }}
            console.log(superClone);   // { a: 'a', b: 'b', c: { deep: 'try and copy me' }}
            `
          }
        ],
        note: null
      },
      {
        title: "Type Coercion",
        id: "type_coercion",
        desciption: `JS implicit converts the type when we use <b>==</b> for comparison. Always use <b>===</b> for comparison unless you have solid reason for <b>==</b>.`,
        list: null,
        code: null,
        table: [
          {
            title: "Sameness Comparison",
            columns: [
              {
                title: "x",
                dataIndex: "x",
                index: "x"
              },
              {
                title: "y",
                dataIndex: "y",
                key: "y"
              },
              {
                title: "==",
                dataIndex: "equal",
                key: "equal"
              },
              {
                title: "equalTo",
                dataIndex: "equalTo",
                key: "==="
              },
              {
                title: "Object.is",
                dataIndex: "object",
                key: "object"
              },
              {
                title: "SameValueZero",
                dataIndex: "sameValueZero",
                key: "sameValueZero"
              }
            ],
            data: [
              {
                x: "undefined",
                y: "undefined",
                equal: "true",
                equalTo: "true",
                object: "true",
                sameValueZero: "true"
              },
              {
                x: "17",
                y: "17",
                equal: "true",
                equalTo: "false",
                object: "false",
                sameValueZero: "false"
              },
              {
                x: "+0",
                y: "0",
                equal: "true",
                equalTo: "true",
                object: "true",
                sameValueZero: "true"
              },
              {
                x: "[1, 2]",
                y: "'1, 2'",
                equal: "true",
                equalTo: "false",
                object: "false",
                sameValueZero: "false"
              },
              {
                x: "null",
                y: "undefined",
                equal: "true",
                equalTo: "false",
                object: "false",
                sameValueZero: "false"
              },
              {
                x: "null",
                y: "false",
                equal: "false",
                equalTo: "false",
                object: "false",
                sameValueZero: "false"
              },
              {
                x: "undefined",
                y: "false",
                equal: "false",
                equalTo: "false",
                object: "false",
                sameValueZero: "false"
              }
            ]
          },
          {
            title: `Exceptional Cases <br /><br /> <b>Object.is</b> and <b>===</b> are same for most of the cases, expect few which are listed below.
            `,
            columns: [
              {
                title: "x",
                dataIndex: "x",
                index: "x"
              },
              {
                title: "y",
                dataIndex: "y",
                key: "y"
              },
              {
                title: "==",
                dataIndex: "equal",
                key: "equal"
              },
              {
                title: "equalTo",
                dataIndex: "equalTo",
                key: "==="
              },
              {
                title: "Object.is",
                dataIndex: "object",
                key: "object"
              },
              {
                title: "SameValueZero",
                dataIndex: "sameValueZero",
                key: "sameValueZero"
              }
            ],
            data: [
              {
                x: "+0",
                y: "-0",
                equal: "true",
                equalTo: "true",
                object: "false",
                sameValueZero: "true"
              },
              {
                x: "-0",
                y: "0",
                equal: "true",
                equalTo: "true",
                object: "false",
                sameValueZero: "true"
              },
              {
                x: "NAN",
                y: "NAN",
                equal: "false",
                equalTo: "false",
                object: "true",
                sameValueZero: "true"
              }
            ]
          },
          {
            title: "Weird Cases",
            columns: [
              {
                title: "x",
                dataIndex: "x",
                index: "x"
              },
              {
                title: "y",
                dataIndex: "y",
                key: "y"
              },
              {
                title: "==",
                dataIndex: "equal",
                key: "equal"
              }
            ],
            data: [
              {
                x: "false",
                y: "[]",
                equal: "true"
              },
              {
                x: "false",
                y: "{}",
                equal: "false"
              },
              {
                x: `""`,
                y: "[]",
                equal: "true"
              },
              {
                x: `""`,
                y: "{}",
                equal: "false"
              },
              {
                x: "0",
                y: "[]",
                equal: "true"
              },
              {
                x: "0",
                y: "{}",
                equal: "false"
              }
            ]
          }
        ],
        note: null
      }
    ]
  },
  {
    heading: "Closures and Inheritance",
    pathname: "/javascript",
    children: [
      {
        title: "Functions are Objects",
        id: "functions_are_objects",
        desciption: null,
        list: null,
        code: [
          {
            title: "4 ways to invoke a function.",
            code: `  function  one() {
              return  1;
            }
            
            one();
          
          // 2. Call function as method of object
          
            const obj  = {
              two() {
              return  2;
              }
            }
           
           obj.two();
          
          // 3. using call and apply
          
            function  three() {
              return  3;
            }
          
            three.call();
          
          // 4.
          
            const  four  =  new  Function('num', 'return num');
            
            four(4);`
          }
        ],
        note: null
      },
      {
        title: "Callable Object",
        id: "callable_object",
        desciption: `Because functions are objects in JavaScript, this also gives them the ability to have properties added to them. This creates a <b>callable object</b>, a special object that creates properties not available on normal objects. Below is a visualisation of how this works under the hood. This code can not be ran in the console, but it is a representation of how the object looks.`,
        list: null,
        code: [
          {
            title: "Function as objects",
            code: ` function say() {
              console.log('say something')
            }
            say.yell = 'yell something'
          
          // under the hood visual
          // will not run or show in console
          
            const funcObj = {
              // name will not exist if anonymous
              name: 'say',
              // code to be ran
              (): console.log('say something')
              // properties get added
              // apply, arguments, bind, call, caller, length, name, toString
              yell: 'yell something',
            }
          
          // with an obj
            const obj = {
              // nothing gets created
            }`
          }
        ],
        note: null
      },
      {
        title: "Higher Order Function",
        id: "higher_order_function",
        desciption:
          "A Higher Order Function (HOF) is a function that either takes a function as an argument or returns another function.",
        list: null,
        code: null,
        note: null
      },
      {
        title: "Closures",
        id: "closures",
        desciption: `Closures allow a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared. In other words, a closure gives you access to its outer functions scope from the inner scope. The JavaScript engine will keep variables around inside functions that have a reference to them, instead of "sweeping" them away after they are popped off the call stack.
        <br><br>
        As JS is lexically scoped, it first creates the scope chain, i.e. even before our code runs every functions knows which variables he can access.
        <br><br>
        <b>Two of the major reasons closures are so beneficial are memory efficiency and encapsulation.</b>
        `,
        list: null,
        code: [
          {
            title: "",
            code: `	function a() {
            let grandpa = 'grandpa'
            return function b() {
              let father = 'father'
              let random = 12345 // not referenced, will get garbage collected
              return function c() {
                let son = 'son'
                return 'closure inherited all the scopes: ${"grandpa"} > ${"father"} > ${"son"}'
              }
            }
          }
        
          a()()();
        
          // closure inherited all the scopes: grandpa > father > son`
          },
          {
            title: "A Fun Example with Closures",
            code: `function callMeMaybe() {
            const callMe = 'Hey, I just met you!'
            setTimeout(function() {
                console.log(callMe)
            }, 8640000000);
         
         callMeMaybe()
         
         // ONE DAY LATER
         // Hey, I just met you!
         
         // Do not run this in the console, it will take 1 day to timeout!`
          }
        ],
        note: null
      },
      {
        title: "Memory Efficient",
        id: "memory_efficient",
        desciption: `Closures are created only when function returns function.
        <br><br>
        Using closures makes your code more memory efficient. Take the example below.
        `,
        list: null,
        code: [
          {
            title: "",
            code: `function inefficient(idx) {
  const bigArray = new Array(7000).fill("😄");
  console.log("created!");
  return bigArray[idx];
}
            
// This function will push bigArray into closure when it get's rendered for the first time and when it get called again it will not render bigArray again, it directly returns the inner function.
function efficient() {
  const bigArray = new Array(7000).fill("😄");
  console.log("created again!");

  return function(idx) {
    return bigArray[idx];
  };
}
            
  inefficient(688);
  inefficient(1000);
  inefficient(6500);
  
  const getEfficient = efficient();
  
  getEfficient(688);
  getEfficient(1000);
  getEfficient(6500);
            
  // created!
  // created!
  // created!
  // created Again!
  // '😄'
  
  // inefficient created the bigArray 3 times
  // efficient created the bigArray only once`
          }
        ],
        note: null
      }
    ]
  },
  {
    heading: "Object Oriented Programming",
    pathname: "/javascript",
    children: [
      {
        title: "OOP Introduction",
        id: "introduction",
        desciption: `OOP stands for Object-Oriented Programming. Procedural programming is about writing
        procedures or methods that perform operations on the data, while object-oriented programming is about creating objects that contain both data and methods.`,
        code: [
          {
            title: null,
            code: `  const elf1 = {
    name: 'Dobby',
    type: 'house',
    weapon: 'cloth',
    say: function() {
      return 'Hi, my name is \${this.name}, I am a \${this.type} elf.'
    }
    attack: function() {
      return 'attack with \${this.weapon}'
    }
  }

  const elf2 = {
    name: 'Legolas',
    type: 'high',
    weapon: 'bow',
    say: function() {
      return 'Hi, my name is \${this.name}, I am a \${this.type} elf.'
    }
    attack: function() {
      return 'attack with \${this.weapon}'
    }
  }
            
  elf1.attack()
  // attack with cloth
  elf2.attack()
  // attack with bow`
          }
        ]
      },
      {
        title: "Factory Functions",
        id: "factory_functions",
        desciption: `When you use regular functions to build objects, they are called factory functions.
        <br /><br />
        As you can see, above code is already getting very repetitive and is not maintainable with only 1 character type. Imagine adding more characters, things would get out of control quickly. So, another way to create objects was introduced, factory functions. `,
        list: [
          "Factory functions are functions that produces objects. ",
          "In JavaScript, there are two ways to create objects, one by using either function constructors or classes. ",
          "In either case, you have to use a new keyword. And secondly, by using regular functions."
        ],
        code: [
          {
            title: null,
            code: `  function createElf(name, type, weapon) {
    return {
      name: name,
      type: type,
      weapon: weapon,
      say() {
        return 'Hi, my name is \${name}, I am a \${type} elf.';
      },
      attack() {
        return '\${name} attacks with \${weapon}';
      }
    };
  }
            
    const dobby = createElf("Dobby", "house", "cloth");
    const legolas = createElf("Legolas", "high", "bow");
    
    dobby.say(); // Hi, my name is Dobby, I am a house elf.
    legolas.say(); // Hi, my name is Legolas, I am a high elf.
    dobby.attack(); // Dobby attacks with cloth.
    legolas.attack(); // Legolas attacks with bow.`
          }
        ],
        note:
          "Factory functions return a new object every time they are ran. This could improve the code somewhat."
      },
      {
        title: "Store",
        id: "store",
        desciption: `This is a step in the right direction, but if we added more characters, we would run into some of the same issues again. Not only is the code not DRY, the attack method is being created and taking up memory space for every new elf. This is not very efficient. How do we solve this? Well, we could separate the methods out into a store.`,
        code: [
          {
            title: null,
            code: `  const elfMethodsStore = {
    attack() {
      return 'attack with \${this.weapon};
    },
    say() {
      return 'Hi, my name is \${this.name}, I am a \${this.type} elf.';
    }
  };
            
  function createElf(name, type, weapon) {
    return {
      name: name, // old way
      type, // with ES6 assignment, if they are the same name
      weapon
    };
  }
            
  // each method has to be assigned to the store method to
  // create the __proto__ chain
  const dobby = createElf("Dobby", "house", "cloth");
  dobby.attack = elfMethodsStore.attack;
  dobby.say = elfMethodsStore.say;
  
  const legolas = createElf("Legolas", "high", "bow");
  legolas.attack = elfMethodsStore.attack;
  legolas.say = elfMethodsStore.say;`
          }
        ]
      },
      {
        title: "Object.create",
        id: "object_create",
        desciption: `Having a store saved us some efficiency in memory, but this was a lot of manual work to assign each method. So, we were given Object.create to help create this chain without having to assign each method.`,
        code: [
          {
            title: null,
            code: `  const elfMethodsStore = {
    attack() {
      return 'attack with \${this.weapon}';
    },
    say() {
      return 'Hi, my name is \${this.name}, I am a \${this.type} elf.';
    }
  };
            
  function createElf(name, type, weapon) {
    // this creates the __proto__ chain to the store
    let newElf = Object.create(elfMethodsStore);
    console.log(newElf.__proto__); // { attack: [Function], say: [Function] }
    // this assigns all the methods
    newElf.name = name;
    newElf.type = type;
    newElf.weapon = weapon;
    // this returns the new Elf with everything attached
    return newElf;
  }
  
  const dobby = createElf("Dobby", "house", "cloth");
  const legolas = createElf("Legolas", "high", "bow");
  dobby.attack; // attack with cloth
  legolas.attack; // attack with bow`
          }
        ]
      }
    ]
  }
];

export default javaScriptConfig;
