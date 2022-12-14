import { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import CounterUseState from "../components/CounterUseState";
import CounterCTXUseState from "../components/CounterCTXUseState";
import CounterCTXUseReducer from "../components/CounterCTXUseReducer";

export default function Home() {
  const [count, setCount] = useState(1);

  return (
    <div className="p-4">
      <style jsx>{`
        .main {
          min-height: 85vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <Head>
        <title>Mastering Context</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <CounterUseState
          title="Prop Drilling"
          description="Data needs to be passed from a root component down to deeply-nested components."
        />

        {/* Context - It provides a way for us to access data, without having to do the above (prop-drilling AKA pass down data manual, level by level.) */}

        {/* These are self-contained. */}
        <CounterCTXUseState
          title="Context"
          description="Context API basically lets you broadcast your state/data to multiple components by wrapping them with a context provider."
        />

        <CounterCTXUseReducer title="Reducers" description="C2." />
      </div>
      <Footer />
    </div>
  );
}
