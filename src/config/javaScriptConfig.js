import { OBJECT_FOR_IN } from "../helper/common";

const javaScriptConfig = [
  {
    heading: "JavaScript Foundation",
    pathname: "/javascript",
    children: [
      {
        title: "Execution Context",
        id: "execution_context",
        description: `When the <b>JavaScript</b> engine first encounters your script, it
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
        description: ` Every time the <b>JavaScript</b> engine creates an execution context to
    execute the function or global code, it also creates a new 
    <b>lexical environment</b> to store the variable defined in that
    function during the execution of that function. A <b>lexical environment</b> is a data structure that holds
    identifier-variable mapping.`,
        list: null,
        code: [
          {
            title: null,
            code: `function  findMyName() {
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
        description: `Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
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
            code: `// Initial code

console.log(a); 			// undefined
console.log(myName());  	// Rajat
        
var a = 'hello';
function myName() {
  return 'Rajat';
}
      
console.log(a);			// hello
console.log(myName());	// rajat
console.log(b); 		// throw an exception - Uncaught ReferenceError: b is not defined
      
// Code that gets compiled internally after hoisting (not really, just for explanation)
      
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
            code: `a();				// Output: Bye
	
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
        description: `A <b>JavaScript function</b> is a block of code designed to perform a particular task. A <b>JavaScript function</b> is executed when something invokes it (calls it).
    `,
        list: [
          "Function Declaration gets hoisted",
          "Function Expression are not hoisted"
        ],
        code: [
          {
            title: null,
            code: `// Function Expression 
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
        description: `The <b>arguments</b> object is a local variable available within all non-arrow functions. You can refer to a function's <b>arguments</b> inside that function by using its <b>arguments</b> object. It has entries for each <b>argument</b> the function was called with, with the first entry's index at 0 .
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
world("hello", "world");`
          }
        ],
        note: null
      },
      {
        title: "Scope Chain",
        id: "scope_chain",
        description: `The scope chain is used to resolve the value of variable names in javascript. Without a scope chain the Javascript engine wouldn't know which value to pick for a certain variable name if there are multiple defined at different scopes. Scope chain in javascript is lexically defined, which means that we can see what the scope chain will be by looking at the code.`,
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
        description: `The <b>use strict</b> directive was new in ECMAScript version 5. It is not a statement, but a literal expression, ignored by earlier versions of <b>JavaScript</b>. The purpose of <b>use strict</b> is to indicate that the code should be executed in <b>strict</b> mode. With strict mode, you can not, for example, use undeclared variables.`,
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
            code: `'use strict'
	
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
        description: null,
        list: [
          "Variables are by default functionally scoped in JS.",
          "Variables declared with the var keyword cannot <b>have Block Scope</b>. Variables declared inside a <b>block</b> {} <b>can</b> be accessed from outside the <b>block</b>",
          "const and let are block scoped."
        ],
        code: [
          {
            title: null,
            code: `function weird() {
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
        description: `An Immediately-invoked Function Expression is a way to execute functions immediately, as soon as they are created. IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations.
    `,
        list: ["IIFe has its own execution context. It do not pollutes GEC."],
        code: [
          {
            title: null,
            code: `(function (a, b) {
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
        description: `The <b>JavaScript</b> this keyword refers to the object it belongs to. In a function, this refers to the global object. In a function, in strict mode, this is undefined . In an event, this refers to the element that received the event.
    `,
        list: null,
        code: [
          {
            title: "this without use strict",
            code: `(function () {
  console.log(this);					// Window object
  console.log(window);					// Window object
  console.log(this === window);			// true
}());`
          },
          {
            title: "this with use strict",
            code: `(function () {
  'use strict'
    console.log(this);					// undefined
    console.log(window);					// Window object
    console.log(this === window);			// false
}());`
          },
          {
            title: "use of this in object",
            code: `const obj = {
  name: 'Billy',
  sing() {
  return 'lalalala' + this.name;		 // because this can access the properties of current object.
  }	
}`
          }
        ],
        note: "this is the object as the function is property of."
      },
      {
        title: "4 ways to bind this",
        id: "bind_this",
        description: ``,
        list: [
          "<b>new keyword binding : </b> the new keyword changes the meaning of this to be the object that is being created. <br />&nbsp;",
          `<b>implicit binding : </b> "this" refers to the object that is calling it. It is implied, without doing anything its just how the language works.<br />&nbsp;`,
          `<b>explicit binding : </b>using the "bind" keyword to change the meaning of "this". <br />&nbsp;`,
          `<b>arrow functions as methods : </b> "this" is lexically scoped, refers to it's current surroundings and no further. However, if "this" is inside of a method's function, it falls out of scope and belongs to the window object. To correct this, you can use a higher order function to return an arrow function that calls "this".`
        ],
        code: [
          {
            title: null,
            code: `// new binding
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

const person1 = new Person("person1", 55);
// this = Person { name: 'person1', age: 55 }

//implicit binding
const person = {
  name: "person",
  age: 20,
  hi() {
    console.log("hi " + this);
  }
};

person.hi();
// this = person { name: 'person', age: 20, hi(){...} }

//explicit binding
let name = "Brittney";

const person3 = {
  name: "person3",
  age: 50,
  hi: function() {
    console.log("hi " + this.name);
  }.bind(window)
};

person3.hi();
// hi Brittney
// this = window {...}

// arrow functions inside objects
const person4 = {
  name: "person4",
  age: 40,
  hi: function() {
    var inner = () => {
      console.log(this);
    };
    return inner();
  }
};

person4.hi();
// this = person4 { name: 'person4', age: 40, hi() {...} }
// if either function is changed around, it doesn't work`
          }
        ],
        note: null
      },
      {
        title: "call(), apply(), bind()",
        id: "call_apply_bind",
        description: `The <b>call</b>, <b>bind</b> and <b>apply</b> methods can be used to set the this keyword independent of how a function is <b>called</b>. The <b>bind</b> method creates a copy of the function and sets the this keyword, while the <b>call</b> and <b>apply</b> methods sets the this keyword and <b>calls</b> the function immediately.`,
        list: [
          "<b>call()</b> and <b>apply()</b> is used to buy the functions from the another object.",
          "<b>bind()</b> returns the bound function, so that we can use the function later on."
        ],
        code: [
          {
            title: null,
            code: `function  a() {
  console.log('hi');
}
      
function  b() {
  console.log('hi from bind');
}
      
a(); // hi
a.apply(); // hi
a.call(); // hi
b.bind(this);
this.b(); // hi from bind`
          },
          {
            title: null,
            code: `const  wizard  = {
  name:  'Merlin',
  health:  50,
  heal(num1, num2) {
    this.health  +=  num1  +  num2;
    console.log(this.health);
  }
};
      
const archer  = {
  name: 'Robin Hood',
  health: 30
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
console.log(archer);		// {name: "Robin Hood", health: 270}`
          },
          {
            title: "more on bind()",
            code: `// function currying
function  multiply(a, b) {
  return  a*b;
};
      
let  multiplyByTwo  =  multiply.bind(this, 2);
console.log(multiplyByTwo(5)); // 10, as multiplyByTwo already has one parameter as 2 when we have bind that function`
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
        description: `Todo`,
        list: null,
        code: null,
        note: null
      },
      {
        title: "Local Storage",
        id: "local_storage",
        description: null,
        list: "",
        code: [
          {
            title: ``,
            code: `//setter
localStorage.setItem('myData', data);
// getter
localStorage.getItem('myData');
// remove
localStorage.removeItem('myData');
// remove all
localStorage.clear();`
          }
        ],
        note: null
      },
      {
        title: "Client Side Storage Technology",
        id: "client_side_storage_tech",
        description: ``,
        list: [
          "Cookies",
          "Local Storage",
          "Session Storage",
          "IndexedDB",
          "localForage",
          `<a href="https://mattwest.design/choosing-the-best-client-side-storage-technology-for-your-project" target="_blank">read more</a>`
        ],
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
        description: `In JavaScript, a <b>primitive data type</b> is data that is not an object and has no methods. All primitives are immutable, i.e., they cannot be altered.`,
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
        description: null,
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
        description: `Primitive data types are passed by value while non-primitive data types are pass by reference.`,
        list: null,
        code: [
          {
            title: null,
            code: `var a = 5;
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
        description: null,
        list: null,
        code: [
          {
            title: null,
            code: `let obj = {
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
console.log(superClone);   // { a: 'a', b: 'b', c: { deep: 'try and copy me' }}`
          }
        ],
        note: null
      },
      {
        title: "Type Coercion",
        id: "type_coercion",
        description: `JS implicit converts the type when we use <b>==</b> for comparison. Always use <b>===</b> for comparison unless you have solid reason for <b>==</b>.`,
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
        description: null,
        list: null,
        code: [
          {
            title: "4 ways to invoke a function.",
            code: `function one() {
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
        description: `Because functions are objects in JavaScript, this also gives them the ability to have properties added to them. This creates a <b>callable object</b>, a special object that creates properties not available on normal objects. Below is a visualisation of how this works under the hood. This code can not be ran in the console, but it is a representation of how the object looks.`,
        list: null,
        code: [
          {
            title: "Function as objects",
            code: `function say() {
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
        description:
          "A Higher Order Function (HOF) is a function that either takes a function as an argument or returns another function.",
        list: null,
        code: null,
        note: null
      },
      {
        title: "Closures",
        id: "closures",
        description: `Closures allow a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared. In other words, a closure gives you access to its outer functions scope from the inner scope. The JavaScript engine will keep variables around inside functions that have a reference to them, instead of "sweeping" them away after they are popped off the call stack.
        <br><br>
        As JS is lexically scoped, it first creates the scope chain, i.e. even before our code runs every functions knows which variables he can access.
        <br><br>
        <b>Two of the major reasons closures are so beneficial are memory efficiency and encapsulation.</b>
        `,
        list: null,
        code: [
          {
            title: "",
            code: `function a() {
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
        description: `Closures are created only when function returns function.
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
        description: `OOP stands for Object-Oriented Programming. Procedural programming is about writing
        procedures or methods that perform operations on the data, while object-oriented programming is about creating objects that contain both data and methods.`,
        code: [
          {
            title: null,
            code: `const elf1 = {
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
        description: `When you use regular functions to build objects, they are called factory functions.
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
            code: `function createElf(name, type, weapon) {
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
        description: `This is a step in the right direction, but if we added more characters, we would run into some of the same issues again. Not only is the code not DRY, the attack method is being created and taking up memory space for every new elf. This is not very efficient. How do we solve this? Well, we could separate the methods out into a store.`,
        code: [
          {
            title: null,
            code: `const elfMethodsStore = {
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
        description: `Having a store saved us some efficiency in memory, but this was a lot of manual work to assign each method. So, we were given Object.create to help create this chain without having to assign each method.`,
        code: [
          {
            title: null,
            code: `const elfMethodsStore = {
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
      },
      {
        title: "Constructor Functions",
        id: "constructor_function",
        description: `Using Object.create is true prototypal inheritance, the code is cleaner and easier to read. However, you will not see this being used in most programs. Before Object.create came around, we had the ability to use constructor functions. 
        <br /><br />Constructor functions are exactly like the function constructor we talked about above. The number and string functions were constructed and invoked with the new keyword and they were capitalized. The new keyword actually changes the meaning of this for the constructor function. Without new, this will point to the window object instead of the object that we just created.
        <br /><br />It is best practice to capitalize constructor functions to help us identify them and know to use the new keyword. Properties added to a constructor function can only be done using the this keyword, regular variables do not get added to the object.`,
        code: [
          {
            title: null,
            code: `// constructor functions are typically capitalized
function Elf(name, type, weapon) {
  // not returning anything
  // "constructing" a new elf
  this.name = name;
  this.type = type;
  this.weapon = weapon;
}

// to use a constructor function
// the "new" keyword must be used
const dobby = new Elf("Dobby", "house", "cloth");
const legolas = new Elf("Legolas", "high", "bow");

// To add methods we need to add
Elf.prototype.attack = function() {
  // cannot be an arrow function
  // this would be scoped to the window obj
  return \`attack with \${this.weapon}\`;
};
// This would need to be repeated for each method.

dobby.attack(); // attack with cloth
legolas.attack(); // attack with bow`
          }
        ]
      }
    ]
  },
  {
    heading: "Functional Programming",
    pathname: "/javascript",
    children: [
      {
        title: "FP Introduction",
        id: "fnc_introduction",
        description: `Functional programming has the same goals in mind as object oriented programming, to keep your code understanable, easy to extend, easy to maintain, memory efficient, and DRY. 
        <br /><br />Instead of objects, it uses reusable functions to create and act on data. Functional programming is based on a separation of concerns similar to object oriented programming. However, in functional programming, there is a complete separation between the data and the behaviors of a program. 
        <br /><br />There is also an idea that once something is created, it should not be changed, being immutable. Unlike OOP, shared state is avoided as functional programming works on the idea of pure functions.`,
        code: null
      },
      {
        title: "Pure Functions",
        id: "pure_fnc",
        description: `A pure function has no side effects to anything outside of it and given the same input will always output the same value. They do not change any data passed into them, but create new data to return without altering the original.. 
        <br /><br />However, it is not possible to have 100% pure functions. At some point you need to interact with the dom or fetch an api. Even console.log makes a function unpure because it uses the window object outside of the function. Fact is a program cannot exist without side effects. 
        <br /><br />So, the goal of functional programming is to minimize side effects by isolating them away from the data. Build lots of very small, reusable and predictable pure functions that do the following:`,
        list: [
          "Complete 1 task per function.",
          "Do not mutate state.",
          "Do not share state.",
          "Be predictable.",
          "Be composable, one input and one output.",
          "Be pure if possible.",
          "Return something."
        ],
        code: [
          {
            title:
              "if we use console.log in a function, then the function will not remain the pure function as it uses the window object. ",
            code: `// not a pure function
function a() {
  console.log('hi');
}`
          }
        ],
        note:
          "No side effects - i.e. a pure function do not update anything outside the function."
      },
      {
        title: "Referential transparency",
        id: "referential_transparency",
        description: `One important concept of functional programming is referential transparency, the ability to replace an expression with the resulting value without changing the result of the program.`,
        code: [
          {
            title: "",
            code: `function a(num1, num2) {
  return num1 + num2;
}

function b(num) {
  return num * 2;
}

b(a(3, 4)); // 14
// a should always return 7
// so it could be changed to
b(7); // 14
// and the output is the same`
          }
        ]
      },
      {
        title: "Idempotence",
        id: "idempotence",
        description: `Idempotence is another important piece of functional programming. It is the idea that given the same input to a function, you will always return the same output. The function could be used over and over again and nothing changes. This is how you make your code predictable.`,
        code: null
      },
      {
        title: "Imperative vs Declarative",
        id: "imperative_vs_declarative",
        description: `Imperative programming tells the computer what to do and how to complete it.
        <br /><br /> Declarative programming only tells the computer what to do, but not how to do things.
        <br /><br />Humans are declarative by nature, but computers typically need more imperative type programming. However, using higher level languages like JavaScript is actually being less declarative. This is important in function programming because we want to be more declarative to better understand our code and let the computer handle the dirty work of figuring out the best way to do something.`,
        code: null,
        note: "<b>Javascript is more of a declarative programming language.</b>"
      },
      {
        title: "Immutability",
        id: "immutability",
        description: `Immutability is simply not modifying the original data or state. Instead we should create copies of the state inside our functions and return a new version of the state.`,
        code: [
          {
            title: ``,
            code: `// Bad code
const obj = {name: 'Brittney'}

function clone(obj) {
  return {...obj} // this is pure
}

obj.name = 'Joe' //mutated the state

// Better code
function updateName(obj) {
  const newObj = clone(obj)
  newObj.name = 'Joe'
  return newObj
}

const updatedNameObj = updateName(obj)
console.log('obj = \${obj}, updatedNameObj = \${updatedNameObj}')
// obj = {name: 'Brittney'} updatedNameObj = {name: 'Joe'}`
          }
        ],
        note: `You may be thinking that this could get really expensive, memory wise, to just copy code over and over. However, there is something called <b>structural sharing</b> that allows the data to only copy new information and points to the original state for any commonalities.`
      }
    ]
  },
  {
    heading: "Asynchronous Javascript",
    pathname: "/javascript",
    children: [
      {
        title: "Memory Heap",
        id: "memory_heap",
        description: `The memory heap is a place to store and write information so that we can use our memory appropriately. It is a place to allocate, use, and remove memory as needed. Think of it as a storage room of boxes that are unordered.`,
        code: [
          {
            title: "",
            code: `// tell the memory heap to allocate memory for a number
const number = 11;
// allocate memory for a string
const string = "some text";
// allocate memory for an object and it's values
const person = {
  first: "Brittney",
  last: "Postma"
};`
          }
        ]
      },
      {
        title: "Call Stack",
        id: "call_stack",
        description: `The call stack keeps track of where we are in the code, so we can run the program in order.`,
        code: [
          {
            title: "",
            code: `function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}
debugger;
calculate();`
          },
          {
            title:
              "Things are placed into the call stack on top and removed as they are finished. It runs in a first in last out mode. Each call stack can point to a location inside the memory heap. In the above snippet the call stack looks like this.",
            code: `anonymous; // file is being ran
// CALL STACK

// hits debugger and stops the file
// step through each line

calculate(
  // steps through calculate() sumTotal = 9
  anonymous
);
// CALL STACK

// steps into subtractTwo(sumTotal) num = 9

subtractTwo; // returns 9 - 2
calculate(anonymous);
// CALL STACK

// subtractTwo() has finished and has been removed

calculate(
  // returns 7
  anonymous
)(
  // CALL STACK

  // calculate() has finished and has been removed

  anonymous
);
// CALL STACK

// and finally the file is finished and is removed

// CALL STACK`
          }
        ]
      },
      {
        title: "Stack Overflow",
        id: "stack_overflow",
        description: `So what happens if you keep calling functions that are nested inside each other? When this happens it's called a stack overflow.`,
        code: [
          {
            title: "",
            code: `// When a function calls itself,
// it is called RECURSION
function inception() {
  inception();
}

inception();
// returns Uncaught RangeError:
// Maximum call stack size exceeded`
          }
        ]
      },
      {
        title: "Garbage Collection",
        id: "garbage_collection",
        description: `JavaScript is a garbage collected language. If you allocate memory inside of a function, JavaScript will automatically remove it from the memory heap when the function is done being called. However, that does not mean you can forget about memory leaks. No system is perfect, so it is important to always remember memory management. JavaScript completes garbage collection with a mark and sweep method.`,
        code: [
          {
            title: null,
            code: `var person = {
  first: "Brittney",
  last: "Postma"
};

person = "Brittney Postma";`
          },
          {
            title: `In the example above a memory leak is created. By changing the variable person from an object to a string, it leaves the values of first and last in the memory heap and does not remove it. This can be avoided by trying to keep variables out of the global namespace, only instantiate variables inside of functions when possible. JavaScript is a single threaded language, meaning only one thing can be executed at a time. It only has one call stack and therefore it is a synchronous language.`,
            code: null
          }
        ]
      },
      {
        title: "Synchronous",
        id: "synchronous",
        description: `So, what is the issue with being a single threaded language? Lets's start from the beginning. When you visit a web page, you run a browser to do so (Chrome, Firefox, Safari, Edge). Each browser has its own version of JavaScript Runtime with a set of Web API's, methods that developers can access from the window object. In a synchronous language, only one thing can be done at a time. Imagine an alert on the page, blocking the user from accessing any part of the page until the OK button is clicked. If everything in JavaScript that took a significant amount of time, blocked the browser, then we would have a pretty bad user experience. <b>This is where concurrency and the event loop come in</b>.`,
        code: null
      },
      {
        title: "Promises",
        id: "promises",
        description: `A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.`,
        list: [
          "<b>Promise.all : </b> it will print result once all the promise are resolved",
          "<b>Promise.race : </b> it will print result the time first promise is resolved",
          "<b>Promise.allSettled : </b> it will run all the promises regardless whether promises are resolved or rejected"
        ],
        code: [
          {
            title: "",
            code: `const promise1 = new Promise((resolve, reject) => {
  if(true) {
    resolve('Stuff Worked');
  } else {
    reject('Error, it broke');
  }
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hii');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hii Again');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'It is me you are looking for?');
});

// it will print result once all the promise are resolved
Promise.all([promise1, promise2, promise3, promise4]).then(values => {
  console.log(values);    // output: ["Stuff Worked", "Hii", "Hii Again", "It is me you are looking for?"]
});

promise2.then(result => console.log(result));   // output : Hii

// it will print result the time first promise is resolved
Promise.race([promise2, promise1, promise3, promise4]).then(values => {
  console.log(values);    // output: Stuff Worked
});`
          },
          {
            title: "Promise.allSettled",
            code: `const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Promise one is resolved');
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'Promise two is rejected');
});

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data));    // throws exception: Uncaught (in promise) Promise two is rejected

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
.catch(e => console.log('something failed', e));    // returns error from catch: something failed Promise two is rejected

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data));   
/* 
output:  
[
  {status: 'fulfilled', Promise one is resolved},
  {status: 'rejected', Promise two is rejected},
] */

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
.catch(e => console.log('something failed', e));
/* 
output: 
[
  {status: 'fulfilled', Promise one is resolved},
  {status: 'rejected', Promise two is rejected},
] */
`
          }
        ],
        note: `Promise.all only returs results if all the promises are resolved, if any of the promise got rejects it will throw exception "Uncaught (in promise) undefined"`
      },
      {
        title: "Async/await",
        id: "async_await",
        description: `The purpose of async / await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async / await is similar to combining generators and promises. Async functions always return a promise. ... In this way, an async function without an await expression will run synchronously.`,
        list: [
          "In order to do error handling in async function we need to use try catch syntax."
        ],
        code: [
          {
            title: "",
            code: `const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return 'parallel is done: \${output1} \${output2} \${output3}';
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return 'sequence is done: \${output1} \${output2} \${output3}';
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return 'race is done: \${output1}';
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);

// race is done: a
// parallel is done: a b c
// sequence is done: a b c`
          }
        ]
      },
      {
        title: "for await ...of",
        id: "await_of",
        description: `The 'for await...of' statement creates a loop iterating over async objects and sync objects such as arrays, array-like objects, maps sets, etc.`,
        list: null,
        code: [
          {
            title: "syntax",
            code: `for await (variable of iterable) {
  statement
}`
          },
          {
            title: "example",
            code: `const url1 = "http://ex1";
const url1 = "http://ex2";
const url1 = "http://ex3";

const getData = async function() {
  const arrayOfPrromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPrromises) {
    const data = await request.json();
    console.log(data);
  }
}`
          }
        ]
      },
      {
        title: "Job Queue",
        id: "job_queue",
        description: `The job queue or microtask queue came about with promises in ES6. With promises we needed another callback queue that would give higher priority to promise calls. <b>The JavaScript engine is going to check the job queue before the callback queue.</b>`,
        list: [
          "Event loop will now run code in the priority - <b> Plain JS code -> Job Queue (Promise calls) -> Call back Queue (facade function like setTimeOut)</b>"
        ],
        code: [
          {
            title: null,
            code: `// 1 Callback Queue ~ Task Queue
setTimeout(() => {
  console.log("1", "is the loneliest number");
}, 0);
setTimeout(() => {
  console.log("2", "can be as bad as one");
}, 10);

// 2 Job Queue ~ Microtask Queue
Promise.resolve("hi").then(data => console.log("2", data));

// 3
console.log("3", "is a crowd");

// 3 is a crowd
// 2 hi
// undefined Promise resolved
// 1 is the loneliest number
// 2 can be as bad as one`
          }
        ]
      }
    ]
  },
  {
    heading: "EchmaScript",
    pathname: "/javascript",
    children: [
      {
        title: "for of",
        id: "for_of",
        description: `Used to iterate over arrays and string`,
        code: [
          {
            title: "",
            code: `const basket = ["apples", "oranges", "grapes"];
const str = "Hi there!";
// for of
// Iterating - arrays, strings
for (item of basket) {
  console.log(item);
}

for (item of str) {
  console.log(item);
}`
          }
        ],
        note: "for of loop does not works with object"
      },
      OBJECT_FOR_IN,
      {
        title: "Big  Int",
        id: "big_int",
        description: `BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.`,
        list: [
          "A BigInt is created by appending n to the end of an integer literal — 10n — or by calling the function BigInt()."
        ],
        code: [
          {
            title: "",
            code: `// bigint

typeof(4);   // number
typeof(4n);  // bigint

console.log(Number.MAX_SAFE_INTEGER);  // output: 9007199254740991, this is the safest no in JS, after this no if you perform any operation JS may start behaving weirdly.

// for ex: 

console.log(9007199254740991 +  10);    // output : 9007199254741000, which is not the correct output

// here if we use bigint, then we will now get the correct result 
console.log(9007199254740991n +  10n);    // output : 9007199254741001n`
          }
        ],
        note: null
      },
      {
        title: "Optional Chaining ( ?. )",
        id: "optional_chaining",
        description: `The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. The ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.
        <br /><br />
        This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.`,
        list: null,
        code: [
          {
            title: "",
            code: `let fruits = {
  apple: {
    quantity: 2,
  }
}

// to check whether quantity key exists in the obj or not
if (fruits && fruits.apple && fruits.apple.quantity) {
  console.log(fruits.apple.quantity);   // output: 2
} else {
  console.log('Apple quantity not found')
}

// optional chaining operator - replaces && operator
console.log(fruits?.apple?.quantity);     // output: 2
console.log(fruits?.apple?.available);    // undefined: 2

console.log(fruits.apple.available);      // undefined`
          },
          {
            title: "Simplified Syntax",
            code: `let nestedProp = obj.first && obj.first.second;
            
let nestedProp = obj.first?.second;`
          }
        ],
        note: null
      },
      {
        title: "Nullish coalescing operator (??)",
        id: "nullish_coalescing",
        description: `The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is <b>null or undefined</b>, and otherwise returns its left-hand side operand.
        <br /><br />
        This can be contrasted with the the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined. In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0). See below for more examples.
        <br /><br />
        The nullish coalescing operator has the fifth-lowest operator precedence, directly lower than || and directly higher than the conditional (ternary) operator.`,
        list: [
          "<b>?? : </b> returns true only if value is null or undefined",
          "<b>|| : </b> returns true if value is falsy (ex: null, undefined, 0, '')"
        ],
        code: [
          {
            title: "",
            code: `let fruits = {
  apple: {
    quantity: 0,
    available: '',
    smell: null,
  }
}

fruits.apple.quantity || 'no apple';   // output: no apple
fruits.apple.quantity ?? 'no apple';   // output: 0

fruits.apple.available || 'no apple';   // output: no apple
fruits.apple.available ?? 'no apple';   // output: ''

fruits.apple.smell || 'no apple';   // output: no apple
fruits.apple.smell ?? 'no apple';   // output: no apple`
          }
        ],
        note: null
      },
      {
        title: "globalThis",
        id: "globalThis",
        description: `globalThis is the object which works in all the environment, i.e. Javascript, Browser and Node.js.
        <br /><br />
        Historically, accessing the global object has required different syntax in different JavaScript environments. On the web you can use window, self, or frames - but in Web Workers only self will work. In Node.js none of these work, and you must instead use global.
        <br /><br />
        The globalThis property provides a standard way of accessing the global 'this' value (and hence the global object itself) across environments. Unlike similar properties such as window and self, it's guaranteed to work in window and non-window contexts. In this way, you can access the global object in a consistent manner without having to know which environment the code is being run in. To help you remember the name, just remember that in global scope the this value is globalThis.`,
        list: null,
        code: [
          {
            title: "",
            code: `let fruits = {
  apple: {
    quantity: 0,
    available: '',
    smell: null,
  }
}

fruits.apple.quantity || 'no apple';   // output: no apple
fruits.apple.quantity ?? 'no apple';   // output: 0

fruits.apple.available || 'no apple';   // output: no apple
fruits.apple.available ?? 'no apple';   // output: ''

fruits.apple.smell || 'no apple';   // output: no apple
fruits.apple.smell ?? 'no apple';   // output: no apple`
          }
        ],
        note: null
      }
    ]
  }
];

export default javaScriptConfig;
