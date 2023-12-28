import React,{useState} from "react";

function Todo(p) {

    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        setIsDone(prevValue => {
            return !prevValue;
        });
    }

    return (
        <div onClick={handleClick}>
        <li style={{textDecoration: isDone ? "line-through" : "none"}}
        >{p.text}</li>
        </div>
    );
    }

export default Todo;