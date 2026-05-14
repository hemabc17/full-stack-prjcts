// eslint-disable-next-line
import React, { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import SimpleCounter from "./components/SimpleCounter";
import ProductList from "./components/ProductList";
import QuotesGenerator from "./components/QuotesGenerator";
import ClockApp from "./components/ClockApp";
import TemperatureConverter from "./components/TemperatureConverter";
import HOCounter from "./components/HOCounter";
import RenderPropsCounter from "./components/RenderPropsCounter";
import ThemeChanger from "./components/ThemeChanger";
import "./index.css";

function App() {
  const [selectedTask, setSelectedTask] = useState(null);

  const tasks = [
    { id: 1, name: "Hello World App" },
    { id: 2, name: "Simple Counter" },
    { id: 3, name: "Product List App" },
    { id: 4, name: "Simple Quotes Generator" },
    { id: 5, name: "ClockApp" },
    { id: 6, name: "Temperature Converter" },
    { id: 7, name: "Counter and Hover using HOC" },
    { id: 8, name: "Counter and Hover using Render Props" },
    { id: 9, name: "Theme Changer with Context API Concept" }
  ];

  return (
    <div className="container">
      <h1>React-JS Task List</h1>

      <table className="task-table">
        <thead>
          <tr>
            <th>Task No</th>
            <th>Task Name</th>
            <th>Demo Link</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>
                <button onClick={() => setSelectedTask(task.id)}>
                  Demo
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="demo-section">
        {selectedTask === 1 && <HelloWorld />}
        {selectedTask === 2 && <CounterApp />}
        {selectedTask === 3 && <ProductList />}
        {selectedTask === 4 && <QuotesGenerator />}
        {selectedTask === 5 && <ClockApp />}
        {selectedTask === 6 && <TemperatureConverter />}
        {selectedTask === 7 && <HOCounter />}
        {selectedTask === 8 && <RenderPropsCounter />}
        {selectedTask === 9 && <ThemeChanger />}
      </div>
    </div>
  );
}

export default App;