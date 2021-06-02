import "./App.css";
import Info from "./info";
import AddItem from "./addItem";


function App() {
  return (
    <div className="App">
      <Info title="Paul's Stuff" />
      <Info />
      <AddItem text="Paul!" number={101} myName="Thomas" />
      <AddItem text="Rory" myName="Thomas" />
    </div>
  );
}

export default App;
