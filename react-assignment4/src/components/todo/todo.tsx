import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

type TodoProp = {
  addTodo: (title: string, dueDate: string) => void;
};

export const Todo = ({ addTodo }: TodoProp) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <div className="mx-auto w-80 mt-5">
      <div className="row justify-content-center mb-5">
        <div className="col-md-5">
          <input
            id="todo"
            className="form-control mb-3 flex-grow-1"
            style={{ height: "38px" }}
            placeholder="Enter title..."
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <input
            id="duedate"
            className="form-control mb-3 flex-grow-1"
            style={{ height: "38px" }}
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button
            className="btn btn-primary col-md-3 ml-2 flex-grow-1"
            style={{ height: "38px" }}
            onClick={() => addTodo(todoTitle, dueDate)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
