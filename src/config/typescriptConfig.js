const TYPESCRIPT_CONFIG = [
    {
      heading: "Typescript",
      pathname: "/typescript",
      children: [
        {
            title: "Advantages of using Typescript",
            keywords: "Advantages of using Typescript",
            id: "advantages_of_using_typescript",
            description: `<b>JavaScript</b> uses <b>dynamic types</b> (resolved at run time), <b>Typescript</b> uses <b>static types</b> (set during development)`,
            list: [
                'Types!',
                "Next-gen JavaScript Features (compiled down for older Browsers)",
                "Non-JavaScript Features like interfaces or Generics",
                "Meta_Programming Features like Decorators",
                "Rick Configuration Options",
                "Modern Tooling that helps even in non-Typescript Projects"
            ],
            code: [
            ],
            note: "",
          },
        {
            title: "Using Typescript",
            keywords: "Using ts",
            id: "using_typescript",
            description: ``,
            list: null,
            code: [
              {
                title: '! means the value will never be null',
                code: `const button = document.querySelector("button")
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// adding ! specifies value will not be null or undefined

function add(num1: number, num2: number) {
    return num1 + num2
}

button.addEventListener("click", function() {
    console.log(ad(+input1.value, +input2.value))
})`,
              },
              {
                title: 'variable declarations',
                code: `let age: number;
age = 26;

let activities: string[];
activities = ['Sports', 'Swimming'];`,
              },
              {
                title: 'Union types',
                code: ` // | is an union operator, where you can combine two types of operator
let input1: string | number`,
              },
            ],
            note: "",
          },
        {
            title: "Objects",
            keywords: "Objects ts",
            id: "typescript_objects",
            description: ``,
            list: null,
            code: [
              {
                title: '',
                code: `const person: {
    name: string;
    age: number;
} = {
    name: 'rajat',
    age: 30
}

console.log(person.name)`,
              },
              {
                title: 'Nested Objects & Types',
                code: `// Let's say you have this JavaScript object:
                
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

// This would be the type of such an object:

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}

// So you have an object type in an object type so to say.`,
              },
            ],
            note: "",
          },
          {
            title: "Tuple",
            keywords: "tuple ts",
            id: "typescript_tuple",
            description: `Added by typescript, fixed length array`,
            list: null,
            code: [
              {
                title: '',
                code: `let activities: [number, string]
activities = [1, 'Swimming']`,
              },
            ],
            note: "",
          },
          {
            title: "Enum",
            keywords: "enum ts",
            id: "typescript_enum",
            description: `Added by typescript, Automatically enumerted global constant identifiers`,
            list: null,
            code: [
              {
                title: '',
                code: `enum Role { ADMIN = 'ADMIN', READ_ONLY = 'READ_ONLY', AUTHOR = 'AUTHOR'};

const person = {
    role: Role.ADMIN
}

console.log(person.role === Role.ADMIN)`,
              },
            ],
            note: "",
          },
      ]}
  ];
  
  export default TYPESCRIPT_CONFIG;
  