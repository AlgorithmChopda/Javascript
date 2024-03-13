import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { todo } from "../../types/todo";

type TodoProp = {
  addTodo: (
    title: string,
    desc: string,
    assignedTo: string,
    dueDate: string
  ) => void;
};

const todoSchema = yup.object({
  title: yup
    .string()
    .required("title is required")
    .max(50, "title cannot exceed 50"),
  description: yup
    .string()
    .required("desc is required")
    .max(100, "title cannot exceed 100"),
  assignedTo: yup.string().required("assignee is required"),
  dueDate: yup
    .date()
    .required("duedate is required")
    .min(new Date(), "due date cannot be less than today"),
});

export const Todo = ({ addTodo }: TodoProp) => {
  const todoInitialValues: todo = {
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
    isCompleted: false,
  };

  const handleAddTodo = (values: todo) => {
    addTodo(
      values.title,
      values.description,
      values.assignedTo,
      values.dueDate
    );
  };

  const formik = useFormik({
    initialValues: todoInitialValues,
    validationSchema: todoSchema,
    onSubmit: (values) => {
      handleAddTodo(values);
    },
    validateOnChange: false,
  });

  return (
    <div className="mx-auto w-80 mt-5">
      <div className="row justify-content-center mb-5">
        <div className="col-md-5">
          <form onSubmit={formik.handleSubmit} className="">
            <div className="mb-3">
              <input
                id="title"
                className="form-control flex-grow-1"
                style={{ height: "38px" }}
                placeholder="Enter title..."
                type="text"
                value={formik.values.title}
                onChange={(e) => {
                  formik.setErrors({ ...formik.errors, title: "" });
                  formik.handleChange(e);
                }}
              />
              <span className="text-danger"> {formik.errors.title} </span>
            </div>

            <div className="mb-3">
              <input
                id="description"
                className="form-control flex-grow-1"
                style={{ height: "38px" }}
                placeholder="Description..."
                type="desc"
                value={formik.values.description}
                onChange={(e) => {
                  formik.setErrors({ ...formik.errors, description: "" });
                  formik.handleChange(e);
                }}
              />
              <span className="text-danger"> {formik.errors.description} </span>
            </div>

            <div className="mb-3">
              <input
                id="assignedTo"
                className="form-control flex-grow-1"
                style={{ height: "38px" }}
                placeholder="Assigned to..."
                type="assignedTo"
                value={formik.values.assignedTo}
                onChange={(e) => {
                  formik.setErrors({ ...formik.errors, assignedTo: "" });
                  formik.handleChange(e);
                }}
              />
              <span className="text-danger"> {formik.errors.assignedTo} </span>
            </div>

            <div className="mb-3">
              <input
                id="dueDate"
                className="form-control flex-grow-1"
                style={{ height: "38px" }}
                type="date"
                onChange={(e) => {
                  formik.setErrors({ ...formik.errors, dueDate: "" });
                  formik.handleChange(e);
                }}
              />
              <span className="text-danger"> {formik.errors.dueDate} </span>
            </div>

            <button
              className="btn btn-primary col-md-3 ml-2 flex-grow-1"
              style={{ height: "38px" }}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todo;
