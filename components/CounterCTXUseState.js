import { useState, createContext, useContext } from "react";

const Container = () => (
  <div>
    <AddOneButton />
  </div>
);

const AddOneButton = () => {
  const [, setCount] = useContext(CounterContext);
  return (
    <div>
      <button
        type="button"
        onClick={() => setCount((e) => e + 1)}
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      >
        Add 1
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
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>
);

const CounterCTXUseState = ({ title, description }) => {
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

export default CounterCTXUseState;
