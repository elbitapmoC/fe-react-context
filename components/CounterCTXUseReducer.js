import { useReducer, createContext, useContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "subtract":
      if (state === 0) {
        return state;
      }
      return state - 1;
    default:
      return state;
  }
};

const Container = () => (
  <div>
    <AddOneButton />
    <SubtractOneButton />
  </div>
);

const AddOneButton = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "add",
          })
        }
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      >
        Add 1
      </button>
    </div>
  );
};

const SubtractOneButton = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "subtract",
          })
        }
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      >
        Subtract 1
      </button>
    </div>
  );
};

const Counter = () => {
  const [count] = useContext(CounterContext);
  return (
    <div>
      <span>{count}</span>
    </div>
  );
};

// Creating the context
const CounterContext = createContext(null);

// Set the initial value for our
// Every Context object comes w/ a Provider React Component, this allows us to consuming components to subscribe to context changes (which in this case would be the value.)
// All consumers, that are decendents of the provider will re-render once the value changes.
const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useReducer(reducer, 0)}>
    {children}
  </CounterContext.Provider>
);

const CounterCTXUseReducer = ({ title, description }) => {
  return (
    <CounterContextProvider>
      {/* 
      Context object initialized above, @ line 39.
      This is why we can simply use: CounterContextProvider
      <CounterContext.Provider value={useState(0)}>
      */}
      <h1 className="title text-4xl">{title}</h1>
      <aside>{description}</aside>
      <Container />
      <Counter />
      {/* </CounterContext.Provider> */}
    </CounterContextProvider>
  );
};

export default CounterCTXUseReducer;
