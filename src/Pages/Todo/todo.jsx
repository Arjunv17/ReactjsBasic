import axios from "axios";
import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const token = false;

  const todoList = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/todos", {
        headers: {
          Authorization: token,
        },
      });
      setTodo(response.data.todos)
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  useEffect(() => {
    todoList();
  }, []);

  return (
    <>

    


      <h1>Todo List</h1>
      <ul>
        {todo.map((val)=>(
            <li key={val.id}>
                <p>Todo :{val.todo}</p>
                <p>Complete :{val.completed ? "Yes" : "No"}</p>
                <p>userId :{val.userId}</p>
            </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
