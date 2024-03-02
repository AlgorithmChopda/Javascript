import { useState } from "react";
import { todo } from "../../types/todo";
import { TodoDisplay } from "../tododisplay/tododisplay";
import "bootstrap/dist/css/bootstrap.min.css";

export const Todo = () => {
  const [todoList, setTodo] = useState<todo[]>([]);
  const [todoTitle, setTodoTitle] = useState("");

  const addTodoHandler = () => {
    setTodo([
      ...todoList,
      {
        title: todoTitle,
        isCompleted: false,
      },
    ]);
  };

  const updateTodoHandler = (index: number) => {
    setTodo(
      todoList.map((todoItem, i) => {
        if (i === index) {
          return { title: todoItem.title, isCompleted: !todoItem.isCompleted };
        }
        return todoItem;
      })
    );
  };

  const deleteTodoHandler = (index: number) => {
    setTodo(todoList.filter((todoItem, i) => i !== index));
  };

  return (
    <div className="mx-auto w-80 mt-5">
      <div className="row justify-content-center mb-5">
        <div className="col-md-5 d-flex gap-2">
          <input
            id="todo"
            className="form-control mb-3 flex-grow-1"
            style={{ height: "38px" }} // Adjust the height as needed
            placeholder="Enter todo..."
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <button
            className="btn btn-primary col-md-3 ml-2 flex-grow-1"
            style={{ height: "38px" }} // Adjust the height as needed
            onClick={addTodoHandler}
          >
            Add
          </button>
        </div>
      </div>
      {todoList?.map((todoItem: todo, index: number) => (
        <TodoDisplay
          key={index}
          id={index}
          title={todoItem.title}
          isCompleted={todoItem.isCompleted}
          todoUpdateHandler={updateTodoHandler}
          todoDeleteHandler={deleteTodoHandler}
        />
      ))}
    </div>
  );
};

export default Todo;
