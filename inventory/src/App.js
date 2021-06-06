import "./App.css";
import Info from "./info";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info />
      <ButtonState />
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const updateTitleClicked = () => {
    setTitle("Now have title");
  };
  const updateCounterClicked = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Title: {title}</p>
      <p>Counter: {count}</p>
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  );
}
export default App;
