import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Todo from "./components/todo/todo";
import TodoDetail from "./components/tododetail/todolist";
import { TodoDisplay } from "./components/tododisplay/tododisplay";
import Home from "./pages/home/home";
import { todo } from "./types/todo";
import axios from "axios";

function App() {
  const [todoList, setTodo] = useState<todo[]>([]);

  const addTodoHandler = async (todoTitle: string, dueDate: string) => {
    // mock api call to add todo
    axios
      .post("http://localhost:8000/todos", {
        todo: todoTitle,
        completed: false,
        dueDate,
      })
      .then(() => {
        // update state
        setTodo([
          ...todoList,
          {
            title: todoTitle,
            dueDate,
            isCompleted: false,
          },
        ]);
        toast.success("todo added successfully");
      })
      .catch((error) => {
        toast.error("error adding todo");
        console.log(error);
      });
  };

  const updateTodoHandler = (index: number) => {
    setTodo(
      todoList.map((todoItem, i) => {
        if (i === index) {
          return {
            title: todoItem.title,
            isCompleted: !todoItem.isCompleted,
            dueDate: todoItem.dueDate,
          };
        }
        return todoItem;
      })
    );
  };

  const deleteTodoHandler = (index: number) => {
    setTodo(todoList.filter((todoItem, i) => i !== index));
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<Todo addTodo={addTodoHandler} />} />
          <Route path="view" element={<TodoDetail todoList={todoList} />} />
          <Route
            path="view/:id"
            element={
              <TodoDisplay
                todoList={todoList}
                todoUpdateHandler={updateTodoHandler}
                todoDeleteHandler={deleteTodoHandler}
              />
            }
          />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  );
}

export default App;
