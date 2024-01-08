import React, { useContext, useState, useEffect } from "react";

import "../../styles/index.css";
import { Context } from "../store/appContext.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams, Link } from "react-router-dom"

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  const [currentContact, setCurrentContact] = useState(
    store.contacts?.find((contact) => contact.id == params.id)
  );
  console.log(currentContact);
  const [newContact, setNewContact] = useState({
    full_name: "",
    address: "",
    email: "",
    phone: "",
    agenda_slug: "Agenda_Cardona",
  });

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newContact);
    if (params.id) {
      actions.updateContact(newContact, params.id);
    } else {
      actions.addContact(newContact);
    }
    navigate("/");
  };
  useEffect(() => {
    if (params.id) {
      setNewContact({
        full_name: currentContact?.full_name,
        address: currentContact?.address,
        email: currentContact?.email,
        phone: currentContact?.phone,
        agenda_slug: "Agenda_Cardona",
      });
    }
  }, [currentContact]);
  console.log(newContact);
  return (
    <>
      <div className="container pt-5">
        <h1 className="text-center"> Add a new Contact</h1>
        {/* Formulario */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full name"
              name="full_name"
              onChange={handleChange}
              value={newContact.full_name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter mail"
              name="email"
              onChange={handleChange}
              value={newContact.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone"
              name="phone"
              onChange={handleChange}
              value={newContact.phone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAdress">
            <Form.Label>Adress</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              name="address"
              onChange={handleChange}
              value={newContact.address}
            />
          </Form.Group>
        </Form>

        <Button variant="primary" onClick={handleSubmit} className="w-100">
          Save Changes
        </Button>
        <Link to={"/"}>or get back to contacts</Link> 
      </div>
    </>
  );
};

export default AddContact;
