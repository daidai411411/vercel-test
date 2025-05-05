import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <p>This is daidai411411.com.</p>
      <button onClick={increment}>Click me</button>
      <p>Count: {count}</p>
    </>
  );
}

export default App;
