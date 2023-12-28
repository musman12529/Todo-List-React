import React, {useState} from "react";
import Todo from "./todo";

function App() {
  const [inputText, setInputText] = useState("");

  const [items, setItems] = useState([]);

  function handle(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function add() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handle} type="text" value={inputText}/>
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          
            {items.map(item =>
             <Todo
              text={item}
             />
             )}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
