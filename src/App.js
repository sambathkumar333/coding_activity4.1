import "./styles.css";
import { useState } from "react";
export default function App() {
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    return strTime;
  }
  //console.log(formatAMPM(new Date));
  const [tasks, setTasks] = useState([
    //{ text: `Get Groceries - ${formatAMPM(new Date())}` }
  ]);
  const [value, setValues] = useState("");
  function addItem(e) {
    e.preventDefault();
    if (!value) return;
    const newTask = [
      ...tasks,
      { text: `${value} - ${formatAMPM(new Date())} (-)` }
    ];
    setTasks(newTask);
    setValues("");
  }
  function removeItem(e) {
    var index = Number(e.target.id);
    let temp = [...tasks];
    temp.splice(index, 1);
    setTasks(temp);
  }
  return (
    <>
      <h1>ToDo List</h1>
      <h3>Input List</h3>
      <div id="tasktrack">
        {tasks.map((item, i) => (
          <div className="task" key={i} id={i} onClick={removeItem}>
            {item.text}
          </div>
        ))}
        <form className="form" onSubmit={addItem}>
          <br />
          <input
            type="text"
            className="input"
            placeholder="Add List..."
            value={value}
            onChange={(e) => setValues(e.target.value)}
          />
          <br />
          <br />
          <button className="sj1">Press Enter to Submit</button>
        </form>
      </div>
    </>
  );
}
