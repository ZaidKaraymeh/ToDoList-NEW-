import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function SideBarModal({ sidebarPages, setSidebarPages }) {
  const [show, setShow] = useState(false);
  const [pageName, setPageName] = useState({
    name: "",
    id: "",
  });
  const handleChange = (e) => {
    setPageName({ ...pageName, name: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pageName.name.trim()) {
      setPageName({
        ...pageName,
        id: "_" + Math.random().toString(36).substr(2, 9),
      });
      setSidebarPages([...sidebarPages, pageName]);
    }
  };
  return (
    <>
      <Button
        className="create-page-btn"
        variant="primary"
        onClick={() => setShow(true)}
      >
        Create New Page
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header className="modal-style " closeButton>
          <Modal.Title className="font-link font-weight-thick">
            Create New Page
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-style font-weight-thick">
          <Form>
            <Form.Group controlId="formGroupPageName">
              <Form.Label>Page Name</Form.Label>
              <Form.Control
                className="modal-style"
                value={pageName.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter page name..."
              />
            </Form.Group>
            <Button
              onClick={handleSubmit}
              className="create-page-btn"
              type="submit"
            >
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SideBarModal;
