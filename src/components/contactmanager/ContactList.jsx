import React, { useEffect, useState } from "react";
import { ContactServices } from "./server/ContactService";
import {
  BsFillEyeFill,
  BsFillPlusSquareFill,
  BsFillPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";

import { Link } from "react-router-dom";
const ContactList = () => {
  const [state, setState] = useState({
    loading: false,
    contact: [],
    errrorMessage: "",
  });
  useEffect(async () => {
    try {
      let response = await ContactServices.getAllContacts();
      console.log(response.data);
    } catch (error) {}
  }, []);

  return (
    <>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager&nbsp;
                  <Link
                    to="/contactmanager/add"
                    className="btn btn-outline-dark"
                  >
                    <BsFillPlusSquareFill className="text-danger" /> ADD
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="search Name"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt=""
                        className="contact-img"
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="list-group">
                        <ul>
                          <li className="list-group-item list-group-item-action">
                            Name : <span className="fw-bold">Rajan</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Mobile : <span className="fw-bold">8777878</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                            Email :
                            <span className="fw-bold">Rajdemo@.coman</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-1" style={{ paddingLeft: 3 }}>
                      <Link
                        to="/contactmanager/view/"
                        className="btn btn-warning"
                        style={{ marginBottom: 4 }}
                      >
                        <BsFillEyeFill />
                      </Link>
                      <Link
                        to="/contactmanager/edit"
                        className="btn btn-primary"
                        style={{ marginBottom: 4 }}
                      >
                        <BsFillPencilFill />
                      </Link>
                      <Link
                        to="/contactmanager/view"
                        className="btn btn-danger"
                        style={{ marginBottom: 4 }}
                      >
                        <BsFillTrashFill />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactList;
