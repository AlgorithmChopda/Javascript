import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

type TodoProp = {
  addTodo: (title: string) => void;
};

export const Todo = ({ addTodo }: TodoProp) => {
  const [todoTitle, setTodoTitle] = useState("");

  return (
    <div className="mx-auto w-80 mt-5">
      <div className="row justify-content-center mb-5">
        <div className="col-md-5 d-flex gap-2">
          <input
            id="todo"
            className="form-control mb-3 flex-grow-1"
            style={{ height: "38px" }}
            placeholder="Enter todo..."
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <button
            className="btn btn-primary col-md-3 ml-2 flex-grow-1"
            style={{ height: "38px" }}
            onClick={() => addTodo(todoTitle)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
