import * as React from "react";
import { render } from "react-dom";
import {ContextProvider} from './global_state/contextComposer';

import "./styles.css";

const App = () => {
  let countRef = React.useRef(0);

  const incRef = () => {
    countRef.current = countRef.current + 1 
  };

  return (
    <ContextProvider>

    
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h1>{countRef.current++}</h1>
      <button onClick={incRef}>Click me: {countRef.current++}</button>
      <button>tgf</button>
    </div>
    </ContextProvider>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
