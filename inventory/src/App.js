import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const updateData = (searchParams) => {
    setData(searchParams);
  };

  return (
    <div className="App">
      <SearchBar callback={updateData} />
      <p>Name: {"name" in data ? data["name"] : "No Name to Display"}</p>
      <p>Price: {"price" in data ? data["price"] : "No Price to Display"}</p>
      <p>Type: {"type" in data ? data["type"] : "No Type to Display"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No Brand to Display"}</p>
    </div>
  );
}

export default App;
