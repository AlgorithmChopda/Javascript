import { useEffect, useState } from "react";
import { todo } from "../../types/todo";
import { TodoDisplay } from "../tododisplay/tododisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "../../Hooks/useFetch";
import { Toaster } from "react-hot-toast";

export const Todo = () => {
  const url = "http://localhost:8000/todos";
  const { data, isLoading } = useFetch(url);

  const [todoList, setTodo] = useState<todo[]>([]);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    if (data) setTodo(data);
  }, [data]);

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
            style={{ height: "38px" }}
            placeholder="Enter todo..."
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <button
            className="btn btn-primary col-md-3 ml-2 flex-grow-1"
            style={{ height: "38px" }}
            onClick={addTodoHandler}
          >
            Add
          </button>
        </div>
      </div>

      {isLoading && <p> loading... </p>}

      {!isLoading &&
        todoList?.map((todoItem: todo, index: number) => (
          <TodoDisplay
            key={index}
            id={index}
            title={todoItem.title}
            isCompleted={todoItem.isCompleted}
            todoUpdateHandler={updateTodoHandler}
            todoDeleteHandler={deleteTodoHandler}
          />
        ))}
      <Toaster />
    </div>
  );
};

export default Todo;
