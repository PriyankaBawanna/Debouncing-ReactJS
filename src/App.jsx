import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Debounce from "./Debouncing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Debounce />
    </div>
  );
}

export default App;
