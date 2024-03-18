import { useState } from "react";
import { Dropdown, DropdownButton, FormControl } from "react-bootstrap";
import { todo } from "../../types/todo";
import { TodoListDisplay } from "../todolistdisplay/todolistdisplay";

type TodoDisplayProp = {
  todoList: todo[];
};

export const TodoDetail = ({ todoList }: TodoDisplayProp) => {
  const [todoListCopy, setTodoListCopy] = useState<todo[]>(todoList);
  const [statusSelected, setStatusSelected] = useState("status");
  const [sortSelected, setSortSelected] = useState("sort by");

  const handleSearch = (search: string) => {
    let searchLower = search.toLocaleLowerCase();
    setTodoListCopy(
      todoList?.filter((todo) =>
        todo.title.toLocaleLowerCase().includes(searchLower)
      )
    );
  };

  const handleStatusSort = (sortValue: string | null) => {
    if (!sortValue) return;
    if (sortValue === "default") {
      setStatusSelected("status");
      setTodoListCopy(todoList);
      return;
    }

    if (sortValue === "true") setStatusSelected("completed");
    else setStatusSelected("todo");

    setTodoListCopy(
      todoList.filter((todo) => todo.isCompleted + "" === sortValue)
    );
  };

  const handleSortByNameOrDueDate = (sortValue: string | null) => {
    if (
      !sortValue ||
      (sortValue !== "title" &&
        sortValue !== "dueDate" &&
        sortValue !== "default")
    )
      return;

    if (sortValue === "default") {
      setTodoListCopy([...todoList]);
      setSortSelected("sort by");
      return;
    }

    if (sortValue === "title") setSortSelected("title");
    else setSortSelected("due date");

    setTodoListCopy(
      todoListCopy.sort((a, b) => {
        if (a[sortValue] < b[sortValue]) return -1;
        if (a[sortValue] > b[sortValue]) return 1;
        return 0;
      })
    );
  };

  return (
    <div className="mx-auto w-50 mt-5">
      <form className="d-flex gap-2 mb-3">
        <FormControl
          type="text"
          placeholder="search"
          className="mr-sm-2"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Dropdown
          onSelect={(event) => {
            handleStatusSort(event);
          }}
          id="statussort"
        >
          <Dropdown.Toggle variant="primary" id="status-sort">
            {statusSelected}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="default">status</Dropdown.Item>
            <Dropdown.Item eventKey="true">completed</Dropdown.Item>
            <Dropdown.Item eventKey="false">todo</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown
          onSelect={(event) => {
            handleSortByNameOrDueDate(event);
          }}
          id="sortby"
        >
          <Dropdown.Toggle variant="primary" id="status-sort">
            {sortSelected}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="default">sort by</Dropdown.Item>
            <Dropdown.Item eventKey="title">title</Dropdown.Item>
            <Dropdown.Item eventKey="dueDate">due date</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </form>

      <TodoListDisplay todoList={todoListCopy} />
    </div>
  );
};

export default TodoDetail;
