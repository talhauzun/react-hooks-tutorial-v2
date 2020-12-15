import React, { useReducer } from "react";
import './App.css';
import { countReducer } from "./redux/reducer";

import { Button } from "react-bootstrap";
import { AComponents,BComponents,CComponents,DComponents } from "./companents/";

export const CounterContext = React.createContext(null)

const App = () => {
  const initialState = 0;
  const [count, dispatch] = useReducer(countReducer, initialState)

  return (
    <CounterContext.Provider value={{countState:count,countDispatch:dispatch}}>
      <div className="App">
        <header className="App-header">

          <h1>Not using context : {count}</h1>
          <div>
            <Button variant="success" onClick={() => dispatch("increment")}>Arttır</Button>
            <Button variant="danger" onClick={() => dispatch("decrement")}>Azalt</Button>
          </div>
          <hr/>
          <AComponents></AComponents>
          <BComponents></BComponents>
          <CComponents></CComponents>
          <DComponents></DComponents>
          
        </header>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
