const reactJsConfig = [
  {
    heading: 'React Foundation',
    pathname: '/react',
    children: [
      {
        title: 'React',
        id: 'intro',
        description: null,
        list: [
          'React is a front-end JavaScript library developed by Facebook in 2011.',
          'It follows the component based approach which helps in building reusable UI components.',
          'Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.',
        ],
        code: null,
        note: null,
      },
      {
        title: 'Life Cycle Methods',
        id: 'life_cycle_methods',
        description: null,
        list: [
          '<b>Constructor : </b> Runs only once (Its job is to set initial state)',
          '<b>Static getDerivedStateFromProps : </b> replacement of componentWillReceiveProps. <br /> This method is static bcs we don’t want to give access to this keyword in this method, so that user can not directly set state using this.setState.',
          "<b>componentWillMount : </b> componentWillMount is essentially the constructor. You can set instance properties that don't affect render, pull data from a store synchronously and setState with it, and other simple side effect free code you need to run when setting up your component. It's rarely needed, and not at all with ES6 classes.",
          '<b>componentDidMount : </b> componentDidMount() is a hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle.',
          '<b>shouldComponentUpdate :</b> returns a boolean value.',
        ],
        code: [
          {
            title: 'shouldComponentUpdate()',
            code: ` // We can stop our component from re rendering on state change by returning false from shouldComponentUpdate Method.          
shouldComponentUpdate(nextProps, nextState) {
  if (this.props.number === nextProps.number) {
    return false;
  }
    return true;
}`,
          },
        ],
        note: null,
      },
      {
        title: 'componentWillMount vs componentDidMount',
        id: 'will_vs_did_mount',
        description: `The best place to make calls to fetch data is within componentDidMount(). componentDidMount() is only called once, on the client, compared to componentWillMount() which is called twice, once to the server and once on the client.`,
        list: [
          'componentWillMount() runs first',
          "<a href=`https://dev.to/torianne02/componentwillmount-vs-componentdidmount-5f0n#:~:text=componentDidMount()%20is%20only%20called,is%20displayed%20in%20the%20browser` target='_blank'>Click here for more</a>",
        ],
        code: null,
        note: null,
      },
      {
        title: 'Methods which prevents component from re rendering',
        id: 'prevent_rendering',
        description: null,
        list: ['shouldComponentUpdate()', 'React.PureComponent', 'React.memo'],
        code: null,
        note: null,
      },
      {
        title: 'Virtual DOM',
        id: 'virtual_dom',
        description: null,
        list: [
          'React creates a virtual DOM. When state changes in a component it firstly runs a “diffing” algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.',
          'The HTML DOM is always tree-structured — which is allowed by the structure of HTML document. The DOM trees are huge nowadays because of large apps. Since we are more and more pushed towards dynamic web apps (Single Page Applications — SPAs), we need to modify the DOM tree incessantly and a lot. And this is a real performance and development pain.',
          'The Virtual DOM is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific implementation details. It is not invented by React but it uses it and provides it for free. ReactElements lives in the virtual DOM. They make the basic nodes here. Once we define the elements, ReactElements can be rendered into the real DOM.',
          'Whenever a ReactComponent is changing the state, diff algorithm in React runs and identifies what has changed. And then it updates the DOM with the results of diff. The point is - it’s done faster than it would be in the regular DOM.',
        ],
        code: null,
        note: null,
      },
      {
        title: 'JSX',
        id: 'jsx',
        description: null,
        list: [
          'JSX stands for JavaScript XML.',
          'JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.',
          'JSX allow you to write code like HTML syntax which transforms into javascript object.',
        ],
        code: null,
        note: null,
      },
      {
        title: 'React Component',
        id: 'component',
        description: `A React Component is a template. A blueprint. A global definition. This can be either a function or a class (with a render function). 
        To define a React component class, you need to extend React.Component`,
        list: null,
        code: [
          {
            title: '',
            code: `class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`,
          },
        ],
        note: null,
      },
      {
        title: 'React Element',
        id: 'element',
        description: null,
        list: [
          'A React Element is what gets returned from components. It’s an object that virtually describes the DOM nodes that a component represents.',
          'With a function component, this element is the object that the function returns.',
          'With a class component, the element is the object that the component’s render function returns.',
          'React elements are not what we see in the browser. They are just objects in memory and we can’t change anything about them.',
        ],
        code: null,
        note: `When you use something like <MyComponent /> in JSX, is that a component, an element, or an instance? <br /><br />
 
        It’s an element but not a DOM element. It’s a React element. The clue here is that any JSX tag gets translated to a React.createElement call. Keep that in mind. CREATE.ELEMENT`,
      },
      {
        title: 'ReactDOM',
        id: 'dom',
        description: `The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.`,
        list: [
          'render()',
          'hydrate()',
          'unmountComponentAtNode()',
          'findDOMNode()',
          'createPortal()',
        ],
        code: null,
        note: null,
      },
      {
        title: 'Why can’t Browsers read JSX?',
        id: 'browser_jsx',
        description: `Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. So to enable a browser to read JSX, first we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.`,
        list: null,
        code: null,
        note: null,
      },
      {
        title: 'Render in React',
        id: 'render',
        description:
          'Render function in react.js is used to return the HTML you want to display in a component.',
        list: [
          'Every Render function contains a return statement.',
          'This return statement can contain only one parent html tag.',
        ],
        code: null,
        note: null,
      },
      {
        title: 'Synthetic Events',
        id: 'synthetic_events',
        description: `Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.`,
        list: null,
        code: null,
        note: null,
      },
      {
        title: 'Refs',
        id: 'refs',
        description: `Refs is the shorthand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function.`,
        list: null,
        code: null,
        note: null,
      },
      {
        title: 'HOC',
        id: 'hoc',
        description: `A higher-order component in React is a pattern used to share common functionality between components without repeating code. A higher-order component is actually not a component though, it is a function. A HOC function takes a component as an argument and returns a component. It transforms a component into another component and adds additional data or functionality. In short:`,
        list: null,
        code: [
          {
            title: null,
            code: ` const NewComponent = (BaseComponent) => {
  // ... create new component from old one and update
  return UpdatedComponent 
}`,
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
};`,
          },
        ],
        note: `HOC adds additional functionality to the component.`,
      },
      {
        title: 'Controlled and uncontrolled components',
        id: 'c_vs_un_compoennt',
        description: null,
        list: [
          `A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component “controls” it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a “dumb component”`,
          `An Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.`,
        ],
        code: null,
        note: null,
      },
      {
        title: 'Pure Component',
        id: 'pure_component',
        description: `React's PureComponent does a shallow compare on the component's props and state. If nothing has changed, it prevents the rerender of the component. If something has changed, it rerenders the component.
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
}`,
          },
        ],
        note: null,
      },
      {
        title: 'Pure Function',
        id: 'pure_function',
        description: `Pure functions take an input value (a parameter or argument) and depending on that input, produce an output value.`,
        list: null,
        code: [
          {
            title: null,
            code: `const pureFunction = (x) => {
  return x* 2;
} `,
          },
        ],
        note: null,
      },
      {
        title: 'Is reducer a pure function ?',
        id: 'reducer_pure_fnc',
        description: `Yes reducer is a pure function that takes the previous state and an action, and returns the next state.`,
        list: null,
        code: null,
        note: null,
      },
      {
        title: 'React Patterns',
        id: 'patterns',
        description: null,
        list: [
          `Context Api Pattern <a href="https://reactjs.org/docs/context.html#when-to-use-context" target="_blank">(here)</a>
          <br/> Context provides a way to pass data through the component tree without having to pass props down manually at every level.`,
          `Render props <a href="https://reactjs.org/docs/render-props.html" target="_blank">(here)</a>`,
          'Presentation component',
        ],
        code: null,
        note: null,
      },
      {
        title: 'Render Props',
        id: 'render_props',
        description: `The term <a href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce" target="_blank">render props</a> refers to a technique for sharing code between React components using a prop whose value is a function.
        <br /></br />
        A component with a render prop takes a function that returns a React element In working with render props, you pass a render function to a component that, in turn, returns a React element and calls it instead of implementing its own render logic.`,
        list: null,
        code: [
          {
            title:
              'The render function is defined by another component, and the receiving component shares what is passed through the render function.',
            code: `<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)} /> 

Class BaseComponent extends Component {
  render() {
    return <Fragment>{this.props.render()} </Fragment>;
  }
}`,
          },
        ],
        note: null,
      },
      {
        title: 'Css-in-js react',
        id: 'css',
        description: `CSS-in-JS refers to a pattern where CSS is composed using JavaScript instead of defined in external files. Read a comparison of CSS-in-JS libraries <a href="https://github.com/MicheleBertoli/css-in-js" target="_blank">here</a>.`,
        list: null,
        code: [
          {
            title: null,
            code: `style={{color: "red"}}`,
          },
        ],
        note: null,
      },
      {
        title: 'Code Splitting - Lazy Loading',
        id: 'lazy_loading',
        description: `The React.lazy function lets you render a dynamic import as a regular component. <a href="https://reactjs.org/docs/code-splitting.html" target="_blank">more</a>`,
        list: null,
        code: null,
        note: null,
      },
      {
        title: 'FLUX',
        id: 'flux',
        description: `Flux is an architectural pattern which enforces the unidirectional data flow. It controls derived data and enables communication between multiple components using a central Store which has authority for all data. Any update in data throughout the application must occur here only. Flux provides stability to the application and reduces run-time errors.`,
        list: null,
        code: null,
        note: null,
      },
      {
        title: 'Alternative of Redux ',
        id: 'alt_redux',
        description: null,
        list: ['mobX', 'Apollo client + graphQL', 'RxJS'],
        code: null,
        note: null,
      },
      {
        title: 'Redux',
        id: 'redux',
        description: `It is a predictable state container for JavaScript applications and is used for the entire application state management.
        <br /><br />
        The key points of interest while working with redux are “Action”, “Dispatcher” and “Reducer”.
Action is something which triggers what needs to be done from the component dispatcher collects the action that is actively triggered and pasess it to reducer. Now reducer is responsible what needs to be done to update the store data.`,
        list: null,
        code: null,
        note: null,
      },
      {
        title: 'Three principles that Redux follows',
        id: 'three_principles',
        description: null,
        list: [
          'Single source of truth',
          'State is read only',
          'Changes are made with pure functions: Pure functions are those whose return value depends solely on the values of their arguments',
        ],
        code: null,
        note: null,
      },
      {
        title: 'components of Redux',
        id: 'components_redux',
        description: `Redux is composed of the following components:`,
        list: [
          `<b>Action </b> - Actions are payloads of information that send data from our application to our store. They are the only source of information for the store. We send them to the store using store.dispatch(). 
        <br />
        Dispatch an action.This is the only way to trigger a state change. <br /> &nbsp`,
          '<b>Reducer </b> - Reducers specify how the application’s state changes in response to actions sent to the store. Remember that actions only describe what happened, but don’t describe how the application’s state changes. So this place determines how state will change to an action. <br /> &nbsp',
          `<b>Store </b> - The Store is the object that brings Action and Reducer together. The store has the following responsibilities: 
    <br/>
    - Holds application state <br/>
    - Allows access to state via getState() <br/>
    - Allows state to be updated via dispatch(action) <br/>
    - Registers listeners via subscribe(listener) <br/>
    - Handles unregistering of listeners via the function returned by subscribe(listener) <br/>`,
        ],
        code: [
          {
            title: 'Action',
            code: `const names = (data) => dispatch => (
  dispatch(getnames(data))
)    
  const getNames = names => (
  {
    type: GET_NAMES,
    names
  }
)`,
          },
          {
            title:
              'An action is a plain javascript object with a type field, and optional payload, meta, and error fields. E.g.',
            code: `const loginRequest = {
  type: 'LOGIN_REQUEST',
  payload: {
    name: 'admin',
    password: '123',
  },
};`,
          },
          {
            title: 'Reducer',
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
})`,
          },
          {
            title: 'State change in component',
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
  
export default connect(mapStateToProps, mapDispatchToProps) (SettingsHome);`,
          },
          {
            title: 'App.jsx',
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
)`,
          },
        ],
        note: `It’s important to note that we’ll only have a single store in a Redux application. When we want to split your data handling logic, we’ll use reducer composition instead of many stores.`,
      },
      {
        title: 'State is async. Why?',
        id: 'async_state',
        description: `setState actions are asynchronous and are batched for performance gains. This is explained in the documentation of setState.
        setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value. There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.`,
        list: null,
        code: null,
        note: 'Dispatching action in redux is synchronous.',
      },
      {
        title: 'Second argument in setState',
        id: 'arg_setState',
        description: `A callback function which will be invoked when setState has finished and the component is re-rendered. Since the setState is asynchronous, which is why it takes in a second callback function. With this function, we can do what we want immediately after the state has been updated.`,
        list: null,
        code: null,
        note: null,
      },
      {
        title: 'Error Boundary',
        id: 'error_boundary',
        description: `Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.`,
        list: null,
        code: [
          {
            title: 'Static getDerivedStateFromError',
            code: `// used to render fallback UI
static getDerivedStateFromError(error) {
  // Update state so the next render will show the fallback UI.
  return { hasError: true };
}
`,
          },
          {
            title: 'componentDidCatch',
            code: `// used to log the error to an error reporting service
componentDidCatch(error, info) {
  // Display fallback UI
  this.setState({ hasError: true });

  logErrorToMyService(error, info);
  console.log('error:', error);
  console.log('info:', info);
}`,
          },
        ],
        note: null,
      },
      {
        title: 'package.json',
        id: 'package_json',
        description: null,
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
          `<b>path/path/path </b> See <a href="https://docs.npmjs.com/files/package.json#local-paths" target="_blank">Local Paths </a> below`,
        ],
        code: null,
        note: null,
      },
      {
        title: 'PropTypes',
        id: 'proptypes',
        description: `Used to check the type of the props passed in the component.`,
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
};`,
          },
        ],
        note: null,
      },
      {
        title: 'Profiling',
        id: 'profiling',
        description: `The Profiler measures how often a React application renders and what the <b>cost of rendering </b> is. Its purpose is to help identify parts of an application that are slow and may benefit from <a href="https://reactjs.org/docs/hooks-faq.html#how-to-memoize-calculations" target="_blank">optimizations such as memoization</a>.
        <br /><br />
        A Profiler can be added anywhere in a React tree to measure the cost of rendering that part of the tree. It requires two props: an id (string) and an onRender callback (function) which React calls any time a component within the tree “commits” an update.`,
        list: null,
        code: [
          {
            title:
              'For example, to profile a Navigation component and its descendants:',
            code: `render(
  <App>
    <Profiler id="Navigation" onRender={callback}>
      <Navigation {...props} />
    </Profiler>
    <Main {...props} />
  </App>
);`,
          },
        ],
        note: null,
      },
      {
        title: 'Hooks',
        id: 'hooks',
        description: `Hooks let you use state and other React features without writing a class.`,
        list: null,
        code: [
          {
            title: '<b>useState</b>',
            code: ` // age is state and setState is setter for the .
const [age, setAge] = useState(0); // here 0 is the initial .

value={name} // name state can be directly used without using  this.state.name syntax.
onChange={e => setName(e.target.value)} // setName to update state.`,
          },
          {
            title: `<b>useEffect</b> <br /> Performs the same operation as of react lifecycle methods does, like didMount, willMount.`,
            code: `// [] behaves as componentWillMount, only calls one time.
// [nirvana] only runs when nirvana changes.
// no second parameter will run on every update, componentDidUpdate.
  
useEffect(() => {
  if(born) {
    document.title = "nirvana born";
  }
}, [nirvana]);      // always run on second parameter updates.

// clean up using useEffect

useEffect(() => {
  // logic here

  return () => {
    // clean up
  };
}, []);`,
          },
          {
            title: `<b>useMemo</b> <br />  useMemo is used for memorizing the previous render of component so
            that component will not get render again, it will only get rendered if
            props or state gets updated.`,
            code: ` const memoChild = useMemo(() => {
              return <Child />
            }, [i]);   // if we do not pass i here i.e. [] then it will only   call at initial rendering.
                       // on passing i it will get called whenever i gets updated.`,
          },
          {
            title: `<b>useSelector and useDispatch</b>
            <br />
            useSelector is use to get state from store.
            <br />
            useDispatch is use to dispatch state to reducer.`,
            code: `// useSelector is use to get state from store
const counter = useSelector( (state) => state.counter);

// useDispatch is use to dispatch state to reducer
const dispatch = useDispatch();

<h1>Counter : {counter} </h1>
        
<button onClick={() => dispatch({type: "INCREMENT", payload:10 })}>INCREMENT</button>`,
          },
          {
            title: `<b>useParams</b> <br />useParams is for reading values from URL.`,
            code: `const {firstName,lastName} = useParams();`,
          },
          {
            title: `<b>UseLocation</b> <br /> use for fetching multiple parameters from Link.
            <br /> useLocation will return both the parameter, pathname and state.`,
            code: `const location = useLocation();
<Link to={
  {
    pathname: "/memo",
    state: {
      from: "root"
      }
    }
  }>Memo</Link>`,
          },
        ],
        note: null,
      },
      {
        title: 'Force React Component to Render',
        id: 'force_render',
        description: `this.forceUpdate(), which skips shouldComponentUpdate:`,
        list: '',
        code: [
          {
            title: ``,
            code: `someMethod() {
  // Force a render without state change...
  this.forceUpdate();
}`,
          },
        ],
        note: null,
      },
      {
        title: 'Middleware',
        id: 'middleware',
        description: `Middleware is block of code which acts as a mediater while the process of receiving a request or generating response. Here we are going to discuss about the 2 most popular libraries redux-thunk and redux-saga.
        <br /><br />
        A thunk is a function that acts as a wrapper in which it wraps an expression to delay its evaluation. Thunk allows to write an action creators that return a function instead of the typical action object.
        <br /><br /> 
        Where as redux-saga is a library that mainly focuses on easy handling of application side effects and more efficient for execution.`,
        list: '',
        code: null,
        note: null,
      },
      {
        title: 'Redux Thunk',
        id: 'thunk',
        description: `Redux-Thunk middleware allows you to dispatch special functions, called thunks.
        <br /><br />
        That is, a thunk is a function that (optionally) takes some parameters and returns another function. The inner function takes a dispatch function and a getState function -- both of which will be supplied by the Redux-Thunk middleware.`,
        list: '',
        code: [
          {
            title: 'Thunks (in Redux) generally have the following structure:',
            code: `export const thunkName =
  parameters =>
    (dispatch, getState) => {
        // Your application logic goes here
    };`,
          },
        ],
        note: null,
      },
      {
        title: 'Redux Saga',
        id: 'saga',
        description: `Redux-Saga middleware allows you to express complex application logic as pure functions called sagas. Pure functions are desirable from a testing standpoint because they are predictable and repeatable, which makes them relatively easy to test.
        <br /><br />
        Sagas are implemented through special functions called generator functions. These are a new feature of ES6 JavaScript. Basically, execution jumps in and out of a generator everywhere you see a yield statement. Think of a yield statement as causing the generator to pause and return the yielded value. Later on, the caller can resume the generator at the statement following the yield.`,
        list: '',
        code: [
          {
            title: `A generator function is one defined like this. Notice the asterisk after the function keyword.`,
            code: `function* mySaga() {
  // ...
}`,
          },
        ],
        note: null,
      },
      {
        title: 'Redux Thunk vs Redux Saga',
        id: 'thunk_vs_saga',
        description: `You might think the biggest difference is in the syntax. Although it's true that writing and reasoning about thunks and sagas are quite different, there's something bigger.
        <br /><br />
        <b>Thunks can never act in response to an action.</b> Redux-Saga, on the other hand, subscribes to the store and can trigger a saga to run or continue when a certain action is dispatched.`,
        list: '',
        code: null,
        note: null,
      },
      {
        title: 'Advantages Redux Thunk',
        id: 'adv_thunk',
        description: `WIP`,
        list: '',
        code: null,
        note: null,
      },
      {
        title: 'Redux Thunk Alternatives & Comparisons',
        id: 'thunk_alt',
        description: '',
        list: [
          '<b>redux-saga : </b> An alternative side effect model for Redux apps. <br /> &nbsp;',
          '<b>Redux Observable </b> : It allows developers to dispatch a function that returns an observable, promise or iterable of action(s). Compose and cancel async actions to create side effects and more. <br /> &nbsp;',
          '<b>Redux : </b> It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. t provides a great experience, such as live code editing combined with a time traveling debugger. <br /> &nbsp;',
          "<b>vuex : </b> Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import. <br /> &nbsp;",
          '<b>MobX : </b> MobX is a battle tested library that makes state management simple and scalable by transparently applying functional reactive programming (TFRP). React and MobX together are a powerful combination. React renders the application state by providing mechanisms to translate it into a tree of renderable components. MobX provides the mechanism to store and update the application state that React then uses.',
        ],
        code: null,
        note: null,
      },
      {
        title: 'React Router',
        id: 'router',
        description: `Coming Soon`,
        list: '',
        code: null,
        note: null,
      },
    ],
  },
];

export default reactJsConfig;
