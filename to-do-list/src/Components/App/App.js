import "../List/List";
import "./App.css";

import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  let [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setTasks((prev) => {
      return [text, ...prev];
    });

    setText("");
  };

  console.log(tasks);
  return (
    <div className="App">
      <p className="title">To do</p>
      <div className="input-container">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleSubmit}>Ok</button>
      </div>
      <div className="list-container">
        <div className="task-list">
          {tasks.map((element) => {
            return <Task task={element} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Task(props) {
  const [line, setLine] = useState(false);
  const [del, setDel] = useState(false);

  return (
    <>
      {!del && (
        <div className="task">
          <p style={{ "text-decoration-line": line ? "line-through" : "none" }}>
            {props.task}
          </p>

          <button
            className="complete"
            onClick={() => {
              setLine(!line);
            }}
          >
            Complete
          </button>
          <button
            className="delete"
            onClick={() => {
              setDel(true);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default App;
