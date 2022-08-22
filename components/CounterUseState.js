import { useState } from "react";

const AddOneButton = ({ setCount }) => (
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

const Counter = ({ count }) => (
  <div>
    <span>{count}</span>
  </div>
);

const Container = ({ setCount }) => (
  <div>
    <AddOneButton setCount={setCount} />
  </div>
);

const CounterUseState = ({ title, description }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="title text-4xl">{title}</h1>
      <aside>{description}</aside>
      <Container setCount={setCount} />
      <Counter count={count} />
    </div>
  );
};

export default CounterUseState;
