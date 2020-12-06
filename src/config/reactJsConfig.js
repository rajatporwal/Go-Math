const reactJsConfig = [
  {
    heading: "React Foundation",
    pathname: "/react",
    children: [
      {
        title: "React",
        id: "intro",
        desciption: null,
        list: [
          "React is a front-end JavaScript library developed by Facebook in 2011.",
          "It follows the component based approach which helps in building reusable UI components.",
          "Even though it was open-sourced only in 2015, it has one of the largest communities supporting it."
        ],
        code: null,
        note: null
      },
      {
        title: "Life Cycle Methods",
        id: "life_cycle_methods",
        desciption: null,
        list: [
          "<b>Constructor : </b> Runs only once (Its job is to set initial state)",
          "<b>Static getDerivedStateFromProps : </b> replacement of componentWillReceiveProps. <br /> This method is static bcs we don’t want to give access to this keyword in this method, so that user can not directly set state using this.setState.",
          "<b>componentWillMount : </b> componentWillMount is essentially the constructor. You can set instance properties that don't affect render, pull data from a store synchronously and setState with it, and other simple side effect free code you need to run when setting up your component. It's rarely needed, and not at all with ES6 classes.",
          "<b>componentDidMount : </b> componentDidMount() is a hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle.",
          "<b>shouldComponentUpdate :</b> returns a boolean value."
        ],
        code: [
          {
            title: "shouldComponentUpdate()",
            code: ` // We can stop our component from re rendering on state change by returning false from shouldComponentUpdate Method.          
shouldComponentUpdate(nextProps, nextState) {
  if (this.props.number === nextProps.number) {
    return false;
  }
    return true;
}`
          }
        ],
        note: null
      },
      {
        title: "componentWillMount vs componentDidMount",
        id: "will_vs_did_mount",
        desciption: `The best place to make calls to fetch data is within componentDidMount(). componentDidMount() is only called once, on the client, compared to componentWillMount() which is called twice, once to the server and once on the client.`,
        list: [
          "componentWillMount() runs first",
          "<a href=`https://dev.to/torianne02/componentwillmount-vs-componentdidmount-5f0n#:~:text=componentDidMount()%20is%20only%20called,is%20displayed%20in%20the%20browser` target='_blank'>Click here for more</a>"
        ],
        code: null,
        note: null
      },
      {
        title: "Methods which prevents component from re rendering",
        id: "prevent_rendering",
        desciption: null,
        list: ["shouldComponentUpdate()", "React.PureComponent", "React.memo"],
        code: null,
        note: null
      },
      {
        title: "Virtual DOM",
        id: "virtual_dom",
        desciption: null,
        list: [
          "React creates a virtual DOM. When state changes in a component it firstly runs a “diffing” algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.",
          "The HTML DOM is always tree-structured — which is allowed by the structure of HTML document. The DOM trees are huge nowadays because of large apps. Since we are more and more pushed towards dynamic web apps (Single Page Applications — SPAs), we need to modify the DOM tree incessantly and a lot. And this is a real performance and development pain.",
          "The Virtual DOM is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific implementation details. It is not invented by React but it uses it and provides it for free. ReactElements lives in the virtual DOM. They make the basic nodes here. Once we define the elements, ReactElements can be rendered into the real DOM.",
          "Whenever a ReactComponent is changing the state, diff algorithm in React runs and identifies what has changed. And then it updates the DOM with the results of diff. The point is - it’s done faster than it would be in the regular DOM."
        ],
        code: null,
        note: null
      },
      {
        title: "JSX",
        id: "jsx",
        desciption: null,
        list: [
          "JSX stands for JavaScript XML.",
          "JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.",
          "JSX allow you to write code like HTML syntax which transforms into javascript object."
        ],
        code: null,
        note: null
      },
      {
        title: "React Component",
        id: "component",
        desciption: `A React Component is a template. A blueprint. A global definition. This can be either a function or a class (with a render function). 
        To define a React component class, you need to extend React.Component`,
        list: null,
        code: [
          {
            title: "",
            code: `class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`
          }
        ],
        note: null
      },
      {
        title: "React Element",
        id: "element",
        desciption: null,
        list: [
          "A React Element is what gets returned from components. It’s an object that virtually describes the DOM nodes that a component represents.",
          "With a function component, this element is the object that the function returns.",
          "With a class component, the element is the object that the component’s render function returns.",
          "React elements are not what we see in the browser. They are just objects in memory and we can’t change anything about them."
        ],
        code: null,
        note: `When you use something like <MyComponent /> in JSX, is that a component, an element, or an instance? <br /><br />
 
        It’s an element but not a DOM element. It’s a React element. The clue here is that any JSX tag gets translated to a React.createElement call. Keep that in mind. CREATE.ELEMENT`
      },
      {
        title: "ReactDOM",
        id: "dom",
        desciption: `The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.`,
        list: [
          "render()",
          "hydrate()",
          "unmountComponentAtNode()",
          "findDOMNode()",
          "createPortal()"
        ],
        code: null,
        note: null
      },
      {
        title: "Why can’t Browsers read JSX?",
        id: "browser_jsx",
        desciption: `Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. So to enable a browser to read JSX, first we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.`,
        list: null,
        code: null,
        note: null
      },
      {
        title: "Render in React",
        id: "render",
        desciption:
          "Render function in react.js is used to return the HTML you want to display in a component.",
        list: [
          "Every Render function contains a return statement.",
          "This return statement can contain only one parent html tag."
        ],
        code: null,
        note: null
      },
      {
        title: "Synthetic Events",
        id: "synthetic_events",
        desciption: `Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.`,
        list: null,
        code: null,
        note: null
      },
      {
        title: "Refs",
        id: "refs",
        desciption: `Refs is the shorthand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function.`,
        list: null,
        code: null,
        note: null
      },
      {
        title: "HOC",
        id: "hoc",
        desciption: `A higher-order component in React is a pattern used to share common functionality between components without repeating code. A higher-order component is actually not a component though, it is a function. A HOC function takes a component as an argument and returns a component. It transforms a component into another component and adds additional data or functionality. In short:`,
        list: null,
        code: [
          {
            title: null,
            code: ` const NewComponent = (BaseComponent) => {
  // ... create new component from old one and update
  return UpdatedComponent 
}`
          },
          {
            title: `A higher-order component is a function that takes a component as an argument and returns a component. This means that a HOC will always have a form similar to the following:`,
            code: `const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
  return HOC:
};`
          }
        ],
        note: `HOC adds additional functionality to the component.`
      },
      {
        title: "Controlled and uncontrolled components",
        id: "c_vs_un_compoennt",
        desciption: null,
        list: [
          `A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component “controls” it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a “dumb component”`,
          `An Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.`
        ],
        code: null,
        note: null
      },
      {
        title: "Pure Component",
        id: "pure_component",
        desciption: `React's PureComponent does a shallow compare on the component's props and state. If nothing has changed, it prevents the rerender of the component. If something has changed, it rerenders the component.
        <br /><br />
        We should use Pure Component only when we have simple state, bcs it only compares object instance and not the nested object or keys.`,
        list: null,
        code: [
          {
            title: null,
            code: `import React, { Component, PureComponent } from 'react';
 
class Square extends PureComponent {
  render() {
    return <Item>{ this.props.number * this.props.number }</Item>;
  }
}`
          }
        ],
        note: null
      },
      {
        title: "Pure Function",
        id: "pure_function",
        desciption: `Pure functions take an input value (a parameter or argument) and depending on that input, produce an output value.`,
        list: null,
        code: [
          {
            title: null,
            code: `const pureFunction = (x) => {
  return x* 2;
} `
          }
        ],
        note: null
      },
      {
        title: "Is reducer a pure function ?",
        id: "reducer_pure_fnc",
        desciption: `Yes reducer is a pure function that takes the previous state and an action, and returns the next state.`,
        list: null,
        code: null,
        note: null
      },
      {
        title: "React Patterns",
        id: "patterns",
        desciption: null,
        list: [
          `Context Api Pattern <a href="https://reactjs.org/docs/context.html#when-to-use-context" target="_blank">(here)</a>
          <br/> Context provides a way to pass data through the component tree without having to pass props down manually at every level.`,
          `Render props <a href="https://reactjs.org/docs/render-props.html" target="_blank">(here)</a>`,
          "Presentation component"
        ],
        code: null,
        note: null
      },
      {
        title: "Render Props",
        id: "render_props",
        desciption: `The term <a href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce" target="_blank">render props</a> refers to a technique for sharing code between React components using a prop whose value is a function.
        <br /></br />
        A component with a render prop takes a function that returns a React element In working with render props, you pass a render function to a component that, in turn, returns a React element and calls it instead of implementing its own render logic.`,
        list: null,
        code: [
          {
            title:
              "The render function is defined by another component, and the receiving component shares what is passed through the render function.",
            code: `<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)} /> 

Class BaseComponent extends Component {
  render() {
    return <Fragment>{this.props.render()} </Fragment>;
  }
}`
          }
        ],
        note: null
      },
      {
        title: "Css-in-js react",
        id: "css",
        desciption: `CSS-in-JS refers to a pattern where CSS is composed using JavaScript instead of defined in external files. Read a comparison of CSS-in-JS libraries <a href="https://github.com/MicheleBertoli/css-in-js" target="_blank">here</a>.`,
        list: null,
        code: [
          {
            title: null,
            code: `style={{color: "red"}}`
          }
        ],
        note: null
      },
      {
        title: "Code Splitting - Lazy Loading",
        id: "lazy_loading",
        desciption: `The React.lazy function lets you render a dynamic import as a regular component. <a href="https://reactjs.org/docs/code-splitting.html" target="_blank">more</a>`,
        list: null,
        code: null,
        note: null
      },
      {
        title: "FLUX",
        id: "flux",
        desciption: `Flux is an architectural pattern which enforces the unidirectional data flow. It controls derived data and enables communication between multiple components using a central Store which has authority for all data. Any update in data throughout the application must occur here only. Flux provides stability to the application and reduces run-time errors.`,
        list: null,
        code: null,
        note: null
      },
      {
        title: "Alternative of Redux ",
        id: "alt_redux",
        desciption: null,
        list: ["mobX", "Apollo client + graphQL", "RxJS"],
        code: null,
        note: null
      },
      {
        title: "Redux",
        id: "redux",
        desciption: `It is a predictable state container for JavaScript applications and is used for the entire application state management.`,
        list: null,
        code: null,
        note: null
      },
      {
        title: "Three principles that Redux follows",
        id: "three_principles",
        desciption: null,
        list: [
          "Single source of truth",
          "State is read only",
          "Changes are made with pure functions: Pure functions are those whose return value depends solely on the values of their arguments"
        ],
        code: null,
        note: null
      },
      {
        title: "components of Redux",
        id: "components_redux",
        desciption: `Redux is composed of the following components:`,
        list: [
          `<b>Action </b> - Actions are payloads of information that send data from our application to our store. They are the only source of information for the store. We send them to the store using store.dispatch(). 
        <br />
        Dispatch an action.This is the only way to trigger a state change.`,
          "<b>Reducer </b> - Reducers specify how the application’s state changes in response to actions sent to the store. Remember that actions only describe what happened, but don’t describe how the application’s state changes. So this place determines how state will change to an action.",
          `<b>Store </b> - The Store is the object that brings Action and Reducer together. The store has the following responsibilities: 
    <br/>
    - Holds application state <br/>
    - Allows access to state via getState() <br/>
    - Allows state to be updated via dispatch(action) <br/>
    - Registers listeners via subscribe(listener) <br/>
    - Handles unregistering of listeners via the function returned by subscribe(listener) <br/>`
        ],
        code: [
          {
            title: "Action",
            code: `const names = (data) => dispatch => (
  dispatch(getnames(data))
)    
  const getNames = names => (
  {
    type: GET_NAMES,
    names
  }
)`
          },
          {
            title: "Reducer",
            code: `function allNames(state = [], action) {
  switch (action.type) {
    case GET_NAMES:
      return action.names;
    default:
      return state;
  }
}
  
export const rulesReducer = combineReducers({
  allNames
})`
          },
          {
            title: "State change in component",
            code: `function mapStateToProps(state) {
  return {
    names: state.rules.names
  }
}
  
function mapDispatchToProps(dispatch) {
  return {
    fetchAllnames: bindActionCreators(rulesActions.fetchAllnames,      dispatch),
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps) (SettingsHome);`
          },
          {
            title: "App.jsx",
            code: `const rootReducer = combineReducers({
  names: namesReducer,
  address: addressReducer,
});
     
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
     
ReactDOM.render(
  <IntlProvider locale="en">
    <Provider store={store} >
      <App />
    </Provider>
  </IntlProvider>,
document.getElementById('root')
)`
          }
        ],
        note: `It’s important to note that we’ll only have a single store in a Redux application. When we want to split your data handling logic, we’ll use reducer composition instead of many stores.`
      },
      {
        title: "State is async. Why?",
        id: "async_state",
        desciption: `setState actions are asynchronous and are batched for performance gains. This is explained in the documentation of setState.
        setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value. There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.`,
        list: null,
        code: null,
        note: "Dispatching action in redux is synchronous."
      },
      {
        title: "Second argument in setState",
        id: "arg_setState",
        desciption: `A callback function which will be invoked when setState has finished and the component is re-rendered. Since the setState is asynchronous, which is why it takes in a second callback function. With this function, we can do what we want immediately after the state has been updated.`,
        list: null,
        code: null,
        note: null
      },
      {
        title: "Error Boundary",
        id: "error_boundary",
        desciption: `Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.`,
        list: null,
        code: [
          {
            title: "Static getDerivedStateFromError",
            code: `// used to render fallback UI
static getDerivedStateFromError(error) {
  // Update state so the next render will show the fallback UI.
  return { hasError: true };
}
`
          },
          {
            title: "componentDidCatch",
            code: `// used to log the error to an error reporting service
componentDidCatch(error, info) {
  // Display fallback UI
  this.setState({ hasError: true });

  logErrorToMyService(error, info);
  console.log('error:', error);
  console.log('info:', info);
}`
          }
        ],
        note: null
      },
      {
        title: "package.json",
        id: "package_json",
        desciption: null,
        list: [
          `<b>version : </b> Must match version exactly`,
          `<b>>version : </b> Must be greater than version`,
          `<b>>=version : </b> etc`,
          `<b><=version</b>`,
          `<b>~version :</b> Approximately equivalent to version” <a href="https://docs.npmjs.com/misc/semver" target="_blank">See semver</a>`,
          `<b>^version : </b>Compatible with version” <a href="https://docs.npmjs.com/misc/semver" target="_blank">See semver</a>`,
          `<b>1.2.x : </b> 1.2.0, 1.2.1, etc., but not 1.3.0`,
          `<b>http://... </b> See ‘URLs as Dependencies’ below`,
          `<b>* : </b> Matches any version`,
          `<b> "" : </b> (just an empty string) Same as *`,
          `<b>version1 - version2 : </b>Same as >=version1 <=version2.`,
          `<b>range1 || range2 : </b> Passes if either range1 or range2 are satisfied.`,
          `<b>git... </b> See ‘Git URLs as Dependencies’ below`,
          `<b>user/repo : </b> See ‘GitHub URLs’ below`,
          `<b>tag A : </b> specific version tagged and published as tag <a href="https://docs.npmjs.com/cli/dist-tag" target="_blank">See npm-dist-tag</a>`,
          `<b>path/path/path </b> See <a href="https://docs.npmjs.com/files/package.json#local-paths" target="_blank">Local Paths </a> below`
        ],
        code: null,
        note: null
      },
      {
        title: "PropTypes",
        id: "proptypes",
        desciption: `Used to check the type of the props passed in the component.`,
        list: null,
        code: [
          {
            title: null,
            code: `import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};`
          }
        ],
        note: null
      }
    ]
  }
];

export default reactJsConfig;
