import { Button, Card } from "react-bootstrap";
import { todo } from "../../types/todo";
import { Link } from "react-router-dom";

type TodoListDisplayProp = {
  todoList: todo[];
};

export const TodoListDisplay = ({ todoList }: TodoListDisplayProp) => {
  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title className="mb-3">Todo List</Card.Title>
        {todoList.map((todo, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center mb-3"
          >
            <p className="m-0">
              {index + 1}. {todo.title}
            </p>

            <p className="m-0">{todo.dueDate}</p>
            <p
              className={`m-0 ${
                todo.isCompleted ? "text-success" : "text-warning"
              }`}
            >
              {todo.isCompleted ? "Done" : "Incomplete"}
            </p>
            <div className="d-flex align-items-center gap-2">
              <Link to={`/view/${index}`}>
                <Button variant="primary">View</Button>
              </Link>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};
