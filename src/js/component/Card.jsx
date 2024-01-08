import React, { useContext } from "react";
import jake from "../../img/jake.jpg";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  //console.log(store.contacts);

  //Función para Borrar contacto
  const deleteContact = (id) => {};

  return (
    <div>
      {store.contacts.map((item) => {
        return (
          <div className="container mx-auto px-4 py-1" key={item.id}>
            <div className="card mb-3 bg-light">
              <div className="row g-0 flex-row">
                <div className="col-md-3 rounded-circle">
                  <img
                    src={jake}
                    className="imagenRedonda"
                    alt="Foto de Jake"
                  />
                </div>
                <div className="col-md-9 d-flex align-items-center">
                  <div className="card-body d-flex px-3 ms-5">
                    <div className="flex-grow">
                      <div className="text-primary_emphasis pb-3 fs-3 pt-2">
                        {item.full_name}
                      </div>
                      <div className="text-secondary fs-5">
                        <i className="fas fa-map-marker-alt"></i>
                        {item.address}
                      </div>
                      <div className="text-secondary fs-5 pt-2">
                        <i className="fas fa-phone"></i> {item.phone}
                      </div>
                      <div className="text-secondary fs-5 pt-2">
                        <i className="fas fa-envelope"></i> {item.email}
                      </div>
                    </div>
                    <div className="ms-auto pe-5 pt-4">
                      <button
                        className="text-primary_emphasis m-2 border border-0 bg-transparent"
                        onClick={() => navigate("/update/" + item.id)}
                      >
                        <i className="fas fa-pencil-alt fs-4 mx-4"></i>
                      </button>

                      <button
                        type="button"
                        className="text-primary_emphasis m-2 border border-0 bg-transparent"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fas fa-trash fs-4 p-1"></i>
                      </button>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Deletion confirmation
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              Are you sure you want to delete this contact?
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => actions.deleteContact(item.id)}
                                data-bs-dismiss="modal"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
