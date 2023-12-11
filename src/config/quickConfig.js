const QUICK_CONFIG = [
  {
    heading: "Quick",
    pathname: "/quick",
    children: [
      {
        title: "Introduction",
        keywords: "Quick Introduction",
        id: "intro",
        description:
          "I'm Swarnim Porwal, a React developer with four years of experience. I started my journey at TCS, where I spent 1 year and 8 months diving into React,Javascript, Redux, and the basics of web development. Later, I joined Neosoft Technologies, continuing to grow as a React developer. In my current company at HealthAssure, I focused on React, Javascript, Redux, and the essentials like typescript,HTML, and CSS. I had the opportunity to work extensively with Next.js for 6-7 months and ya I am also comfortable with popular libraries such as Bootstrap, Material UI, and Tailwind.",
        list: [],
        code: null,
        note: null,
      },
      {
        title: "Execution Context",
        keywords: "Quick Execution Context",
        id: "quick_execution_context",
        description: null,
        list: [
          "Everything in javascript happens inside an Execution Context.",
          "An execution context is similar to a container that stores variables, and the code gets evaluated and then executed.",
          "So For Example :- we have one big box which is known as execution context and in this box 2 components is there....first component is known as memory component and second component is known as code component.",
          "Memory Component (Variable Environment) contains variables and functions as the key-value pairs.",
          "and Code Component (Thread of Execution) is the place where whole javascript code is executed.",
        ],
        code: null,
        note: null,
      },
      {
        title: "Closures",
        keywords: "Quick Closures",
        id: "quick_closures",
        description: null,
        list: [
          "The ability of a function to store a variable for further reference even after it is executed is called Closure.",
          "Closures are created only when function returns function.",
          "Closures can be useful to create private variables and functions.",
          "With a function closure we can store data in a separate scope, and share it only where necessary.",
        ],
        code: [
          {
            title: "",
            code: `const myFunction = () => {
                 let myValue = 2;
                 console.log(myValue);
            
                 const childFunction = () => {
                      console.log(myValue += 1);
                 }
            
                 return childFunction;
            }
            
            const result = myFunction();
            console.log(result);
            result(); // Result store the whole myFunction even it is closed this is called closures.
            result();`,
          },
        ],
        note: null,
      },
      {
        title: "Difference Between Closures and Lexical Scope",
        keywords: "DB Closures and Lexical Scope",
        id: "db_closures_lexicalscope",
        description:
          "The only difference between closures and lexical scope is that we will access parent scope even after the parent function has closed because closures store a variable for further reference even after it is closed.",
        list: [],
        code: null,
        note: null,
      },
      {
        title: "Hoisting",
        keywords: "quick hoisting",
        id: "quick_hoisting",
        description: null,
        list: [
          "Hoisting is a default behavior of javascript where all the variables and function declarations are moved on the top of the scope before code execution.",
          "Variables defined with let and const are hoisted to the top of the block, but not initialized and the only reason is because of temporal dead zone (TDZ).",
          "A temporal dead zone (TDZ) is the block where a variable is inaccessible until the moment the computer initializes it with a value.",
          "Function Declaration gets hoisted and Function Expression are not hoisted",
        ],
        code: null,
        note: null,
      },
      {
        title: "Redux Thunk",
        keywords: "quick redux thunk",
        id: "quick_redux_thunk",
        description: null,
        list: [
          "The main objective of using Redux Thunk is to establish asynchronous communication from the externally present API into fetching and saving data. It makes it easier to dispatch actions that follow the paradigm of the whole lifecycle of requests from the externally present API.",
          "keep our components clean from API calls and make our codebase more readable",
        ],
        code: null,
        note: null,
      },
      {
        title: "Difference between Regular functions and Arrow functions",
        keywords: "DB Regular and Arrow Function",
        id: "db_regular_arrowfunction",
        description: null,
        list: [
          "the Regular Functions uses function keyword but Arrow Functions don't inspite it uses arrow symbol(=>).",
          "Regular function have its their own this context, but the Arrow function don't have their own. Inside an Arrow function this value hold the this value of outer function.",
          "Arguments objects are not available in arrow functions, but are available in regular functions. and give Reference Error :arguments is not defined.",
          "regular functions are constructible, they can be called using the new keyword. However, the arrow functions are only ‘callable’ and not constructible.",
        ],
        code: null,
        note: null,
      },
      {
        title: "Use Strict",
        keywords: "quick usestrict",
        id: "quick_usestrict",
        description: null,
        list: [
          "In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler.  Thus programmer's chances of making an error are lowered. Duplicate arguments are not allowed by developers.",
          "In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.",
          "The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.",
          "Engineers will not be allowed to create global variables in Strict Mode.",
        ],
        code: null,
        note: null,
      },
      {
        title: "Constructor function",
        keywords: "quick constructor function",
        id: "quick_constructor_function",
        description: null,
        list: [
          "Constructor functions are used to create objects in javascript.",
          "If we want to create multiple objects having similar properties and methods, constructor functions are used.",
        ],
        code: [
          {
            title: "",
            code: `function Person(name,age,gender){
              this.name = name;
              this.age = age;
              this.gender = gender;
            }
            
            var person1 = new Person("Vivek", 76, "male");
            console.log(person1);
            
            var person2 = new Person("Courtney", 34, "female");
            console.log(person2);`,
          },
        ],
        note: null,
      },
      {
        title: "Difference between var and let",
        keywords: "DB var and let",
        id: "db_var_let",
        description: null,
        list: [
          "var is hoisted let is not hoisted.",
          "var has functional scope and let has block scope.",
          "we will redeclare the variable with the keyword var but not redeclared the variable with the keyword let.",
          "var is from initial javascript but let is in the picture after ES6.",
        ],
        code: null,
        note: null,
      },
      {
        title: "Difference between let and const",
        keywords: "DB let and const",
        id: "db_let_const",
        description: null,
        list: [
          "Reassignment :- Variables declared with let can be reassigned, but variables declared with const cannot. Once a value is assigned to a const variable, it cannot be changed.",
          "Initialization :- A const variable must be initialized at the time of declaration, while a let variable can be declared without initialization.",
        ],
        code: [
          {
            title: "",
            code: ` // Reassignment
            let a = 1; // allowed
            a = 2; // allowed
         
            const b = 1; // allowed
            b = 2; // Uncaught TypeError: Assignment to constant variable.
            
  // Initialization
            let a; // allowed
            const b; // Uncaught SyntaxError: Missing initializer in const declaration`,
          },
        ],
        note: null,
      },
      {
        title: "Difference between null and undefined",
        keywords: "DB null and undefined",
        id: "db_null_undefined",
        description: null,
        list: [
          "undefined means a variable has been declared but has not yet been assigned a value. It is the default value for variables that have just been declared.",
          "null is an assignment value. It means no value or no object. It implies absence of value.",
          "typeof(undefined) => undefined",
          "typeof(null) => object",
        ],
        code: null,
        note: "In short, undefined means a variable has been declared but not defined, and null is an assignment value that means no value or no object.",
      },
      {
        title: "Prototype",
        keywords: "quick Prototype",
        id: "quick_prototype",
        description:
          "Nearly all objects in JavaScript are instances of Object. That means all the objects in JavaScript inherit the properties and  methods from Object prototype. This is also called Prototype chaining. This is a very powerful and potentially dangerous mechanism to override or extend object behavior",
        list: [],
        code: null,
        note: null,
      },
      {
        title: "Generator Function",
        keywords: "quick Generator Function",
        id: "quick_generator_function",
        description:
          "A Generator Function in JavaScript is a special type of function that can be paused and resumed, allowing it to generate a sequence of results over time, rather than computing them at once and giving them back like a normal function. This makes generator functions very powerful for handling asynchronous programming and controlling the flow of execution.",
        list: [],
        code: [
          {
            title: "",
            code: `function* generatorFunction() {
              yield 'Hello';
              yield 'World';
            }
            
            const generator = generatorFunction();
            
            console.log(generator.next().value); // 'Hello'
            console.log(generator.next().value); // 'World'`,
          },
        ],
        note: "In this example, the generatorFunction is a generator function. The * after the function keyword indicates that it's a generator function. The yield keyword is used to pause and resume the function. The next() method is used to resume the function and it returns an object with two properties: value and done. The value property contains the yielded value and the done property indicates whether the generator has yielded its last value.",
      },
      {
        title: "Object Oriented Programming (OOP)",
        keywords: "quick Object Oriented Programming (OOP)",
        id: "quick_oop",
        description: null,
        list: [
          "Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic.",
          "OOP was developed to make code more flexible and easier to maintain.",
          "JavaScript is prototype-based procedural language, which means it supports both functional and object-oriented programming.",
          "There are 4 main principles in OOP, and they are:",
          "1) Abstraction :- Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.",
          "2) Encapsulation :- Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.",
          "3) Inheritance :- Inheritance makes all properties and methods available to a child class. This allows us to reuse common logic and to model real-world relationships.",
          "4) Polymorphism :- Polymorphism means having different and many forms. We can overwrite a method inherited from a parent class.",
        ],
        code: null,
        note: null,
      },
      {
        title: "Browser Storage",
        keywords: "quick Browser Storage",
        id: "quick_browser_storage",
        description: null,
        list: [
          "The Browser Storage or the Client-side Storage works on similar principles to the server-side storage but has different use cases. It consists of JavaScript APIs that allow us to store data on the client (i.e., on the user's machine), and then it could be retrieved when needed.",
          "There are a few ways by which we can store the data locally on our browsers is Cookies",
        ],
        code: null,
        note: null,
      },
      {
        title: "Web Storage",
        keywords: "quick Web Storage",
        id: "quick_Web_storage",
        description: null,
        list: [
          "Web storage such as were introduced with HTML 5. This made storing and retrieving data in browsers much easier, and one of the major improvements made with these in client-side storage was the storage size, which is much better than cookies.",
          "There are two objects for data storage on the client provided by HTML web storage:",
          "Local storage object - Stores data with no expiration date",
          "Session storage object - Stores data for one session (data is lost when the browser tab is closed)",
        ],
        code: null,
        note: null,
      },
      {
        title: "Difference Between Cookies,Local Storage and Session Storage",
        keywords: "DB Cookies,Local and Session Storage",
        id: "db_cookie_local_session",
        description: null,
        list: [],
        code: [
          {
            title: "",
            code: `              key points                                     Cookies               Local storage                  Session storage

            Capacity                                         4KB                     10MB                             5MB
            Browsers                                         HTML 4 / HTML 5         HTML 5                          HTML 5
            Accessible From                                  Any window              Any window                      Same tab
            Expiration                                       Manually set            Never                           On tab close
            Supported data types                             String only             String only                     String only
            Storage Location                                 Browser and server      Browser only                    Browser only
            Sent with requests                               Yes                     No                              No
            Editable and Blockable by users                  Yes                     Yes                             Yes`,
          },
        ],
        note: null,
      },
      {
        title: "Position in css",
        keywords: "Positions css",
        id: "db_position",
        description:
          "There are five different position values in CSS like static, relative, absolute, fixed, and sticky.",
        list: [
          "Static: This is the default value. Elements are positioned according to the normal flow of the document.",
          "Relative: This positions an element relative to its normal position. Offsetting properties (top, right, bottom, left) can be used to move the element from its normal position in any direction, without affecting the layout of other elements.",
          "Absolute: This removes the element from the normal document flow. It positions the element relative to its nearest positioned ancestor (instead of relative to the viewport). If no positioned ancestors are found, it takes the document body as reference.",
          "Fixed: This positions the element relative to the browser window (viewport). It will not move even if the page is scrolled.",
          "Sticky: This is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed.",
        ],
        code: null,
        note: null,
      },
      {
        title: "Callback",
        keywords: "quick callback",
        id: "quick_callback",
        description:
          "A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. This allows the function to invoke or call the callback function during its execution. Callbacks are often used in asynchronous programming to handle the completion of tasks, such as reading files or making API requests.",
        list: [],
        code: null,
        note: null,
      },
      {
        title: "Promises",
        keywords: "quick Promises",
        id: "quick_promises",
        description: null,
        list: [
          "A Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed.",
          "A promise is an assurance or guarantee that something will happen in the future.",
          "A promise may be in one of 3 possible states: fulfilled, rejected, or pending.",
          "There are four methods to use multiple promises :- ",
          "promise.all() => If all the promises is successfully run then result is given in array form [val1, val2, val3].If any error in any one of the promise then throw error [error].",
          "Promise.allSettled() => If Promise is success or fail is gives result in  [val1, err2, val3]",
          "Promise.race() => As soon as any of the promise is resolved or rejected it gives results (val1 / err1)",
          "Promise.any() => As soon as any of the promise is resolved it gives results (val1)",
        ],
        code: null,
        note: null,
      },
      {
        title: "Difference Between Promises and Async Await",
        keywords: "DB Promises and Async Await",
        id: "db_promises_asyncawait",
        description: null,
        list: [],
        code: [
          {
            title: "",
            code: `
Parameter                      Promise                                         Async Await
            
Syntax                The promise involves chaining .then                  Async Await uses a simpler syntax that 
                      and .catch methods, which can make the                looks more like synchronous code.
                      code look complicated and hard to read.
            
Error Handling        Error handling is done using the .catch method,      Error handling is done using a try-catch block,  
                      which can make the code look cluttered.              which makes the code cleaner and easier to read.
                                                                                                                            
Control flow          Promises use a chain of .then methods to control     With async/await, the code looks more like
                      the flow of execution. This can make it difficult    synchronous code. In try-catch, all await 
                      to follow the order of operations.                   functions are kept inside. There is no need for 
                                                                           chained try blocks.        
            
Error Propagation     Errors propagate down the chain of .then methods     Errors are propagated up the call stack, making
                      until they are caught by a .catch method. This can   it easier to find the source of the error. challenging
                      challenging to find the source of the error.         to find the source of the error. `,
          },
        ],
        note: null,
      },
      {
        title: "Difference Between Promises and CallBack",
        keywords: "DB Promises and CallBack",
        id: "db_promises_callback",
        description: null,
        list: [],
        code: [
          {
            title: "",
            code: `
Parameter                      Callback                                         Promises
            
Syntax                The syntax is difficult to understand.                The syntax is user-friendly and easy to
                                                                            read because of then and catch.
            
Error Handling         Error handling may be hard to manage.                Error handling is easier to manage using
                      which can make the code look cluttered.               catch block.
                                                                                                                            
Callback hell          It may create callback hell.                          It resolves callback hell.`,
          },
        ],
        note: null,
      },
      {
        title: "Event Loop",
        keywords: "event loop",
        id: "event_loop",
        description:
          "The event loop is essentially a loop that runs continuously and checks for tasks that are waiting to be executed. These tasks are added to a queue, and the event loop runs through the queue, executing each task in order.",
        list: [],
        code: null,
        note: null,
      },
      {
        title: "Difference between map, filter and reduce in javascript",
        keywords: "db map, filter & reduce",
        id: "db_map_filter_reduce",
        description: null,
        list: [
          "map() transforms every element in an array individually and creates a new array.",
          "filter() removes elements that are not required and creates a new array containing the ones needed.",
          "reduce() reduces all array elements into a single value. It takes the values in an array, from the first till the last element, and applies functionality such that it changes the array into one singular value.",
        ],
        code: null,
        note: null,
      },
      {
        title: "Difference between spread and rest operator in javascript",
        keywords: "db spread and rest operator",
        id: "db_spread_rest_operator",
        description: null,
        list: [
          "Spread Operators allow us to expand an array or object into its individual elements.",
          "where as Rest Operator allows us to condense multiple elements into a single array.",
          "the spread operator passes an array into a function and breaks it down into the arguments that the function has declared.",
          "The rest operator, on the other hand, takes multiple arguments passed into a function and truncates it into an array.",
        ],
        code: null,
        note: null,
      },
      {
        title: "Difference Between Context API & Redux?",
        keywords: "db Context API & Redux?",
        id: "db_contextapi_redux",
        description: null,
        list: [
          "Context API prompts a re-render on each update of the state and re-renders all components regardless. Redux however, only re-renders the updated components.",
          "Redux boasts excellent developer tools and a rich ecosystem then context API, making debugging and state time-traveling straightforward.",
          "Redux supports a variety of middlewares, enhancing its capabilities for tasks like asynchronous actions.",
        ],
        code: null,
        note: "so, yes for bigger project Redux is good approach in comparison to context API.",
      },
    ],
  },
];

export default QUICK_CONFIG;
