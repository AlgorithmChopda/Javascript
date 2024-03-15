import { useEffect, useReducer, useState } from "react";
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
import {
  actionTypes,
  paginationInitialState,
  paginationReducer,
} from "./reducer/pagination";
import { QueryClient, useQuery, useQueryClient } from "react-query";

function App() {
  const limit = 2;
  const [todoList, setTodo] = useState<todo[]>([]);
  const [key, setKey] = useState("");

  const queryClient = useQueryClient();

  const [pagination, paginationDispatch] = useReducer(
    paginationReducer,
    paginationInitialState
  );

  const url = `http://localhost:8000/todos?_page=${pagination.page}&_per_page=${limit}&_sort=${key}`;
  const { data } = useFetch(url);

  useEffect(() => {
    if (!data) return;
    setTodo(data.data);
  }, [data]);

  const nextPage = () => {
    if (data?.next == null) return;
    paginationDispatch({ type: actionTypes.NEXT_PAGE });
  };

  const prevPage = () => {
    paginationDispatch({ type: actionTypes.PREV_PAGE });
  };

  const handleSort = (key: string) => {
    setKey(key);
  };

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
        queryClient.invalidateQueries([url]);
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
          <Route
            path="view"
            element={
              <TodoDetail
                todoList={todoList}
                prevPage={prevPage}
                nextPage={nextPage}
                handleSort={handleSort}
              />
            }
          />
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
