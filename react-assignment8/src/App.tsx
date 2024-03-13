import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Todo from "./components/addtodo/todo";
import TodoDetail from "./components/todocontrols/todocontrols";
import { TodoDisplay } from "./components/tododisplay/tododisplay";
import Home from "./pages/home/home";
import { todo } from "./types/todo";
import axios from "axios";
import useFetch from "./Hooks/useFetch";

function App() {
  const url = "http://localhost:8000/todos";
  const { data } = useFetch(url);

  const [todoList, setTodo] = useState<todo[]>([]);

  useEffect(() => {
    if (data) setTodo(data);
  }, [data]);

  const addTodoHandler = async (
    todoTitle: string,
    desc: string,
    assignedTo: string,
    dueDate: string
  ) => {
    // mock api call to add todo
    axios
      .post("http://localhost:8000/todos", {
        title: todoTitle,
        isCompleted: false,
        dueDate,
        assignedTo,
        description: desc,
      })
      .then(() => {
        // update state
        setTodo([
          ...todoList,
          {
            title: todoTitle,
            description: desc,
            assignedTo,
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
            ...todoItem,
            isCompleted: !todoItem.isCompleted,
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
