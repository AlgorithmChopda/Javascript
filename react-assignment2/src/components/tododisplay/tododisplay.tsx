import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

type TodoDisplayProp = {
  id: number;
  title: string;
  isCompleted: boolean;
  todoUpdateHandler: (index: number) => void;
  todoDeleteHandler: (index: number) => void;
};

export function TodoDisplay({
  id,
  title,
  isCompleted,
  todoUpdateHandler,
  todoDeleteHandler,
}: TodoDisplayProp) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteOpen = () => setIsDeleteModalOpen(true);
  const handleDeleteClose = () => setIsDeleteModalOpen(false);

  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const handleStatusOpen = () => setIsStatusModalOpen(true);
  const handleStatusClose = () => setIsStatusModalOpen(false);

  return (
    <div className="mx-auto w-50">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="m-0">
          {id + 1}. {title}
        </p>
        <div className="d-flex align-items-center gap-2">
          <button
            className={`btn ${
              isCompleted ? "btn-success" : "btn-warning"
            } mr-2`}
            onClick={() => handleStatusOpen()}
          >
            {isCompleted ? "Done" : "Incomplete"}
          </button>

          <button className="btn btn-danger" onClick={() => handleDeleteOpen()}>
            Delete
          </button>
        </div>
      </div>

      <Modal show={isDeleteModalOpen} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure you want to delete todo ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              todoDeleteHandler(id);
              handleDeleteClose();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isStatusModalOpen} onHide={handleStatusClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          are you sure you want to Update Status of todo ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleStatusClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={() => {
              todoUpdateHandler(id);
              handleStatusClose();
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
