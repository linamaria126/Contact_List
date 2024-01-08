import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-light  d-flex flex-row-reverse me-5 fondo container-fluid">
        <Button variant="success" onClick={() => navigate("/create")}>
          Add new contact
        </Button>
      </nav>
    </>
  );
};
