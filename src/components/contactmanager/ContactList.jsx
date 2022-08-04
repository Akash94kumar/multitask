import React, { useEffect, useState } from "react";
import { ContactServices } from "./server/ContactService";
import {
  BsFillEyeFill,
  BsFillPlusSquareFill,
  BsFillPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";

import { Link } from "react-router-dom";
import Spinner from "../../spinner/Spinner";
const ContactList = () => {
  let [query, setQuery] = useState({
    text: "",
  });

  const [state, setState] = useState({
    loading: false,
    contacts: [],
    filterContacts: [],
    errrorMessage: "",
  });

  useEffect(async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactServices.getAllContacts();
      console.log(response.data);
      setState({
        ...state,
        loading: false,
        contacts: response.data,
        filterContacts: response.data,
      });
    } catch (error) {
      setState({ ...state, loading: false, errrorMessage: error.message });
    }
  }, []);
  // Delete Function
  let clickDelete = async (deleteId) => {
    try {
      let response = await ContactServices.deleteContact(deleteId);
      if (response) {
        setState({ ...state, loading: true });
        let response = await ContactServices.getAllContacts();
        console.log(response.data);
        setState({
          ...state,
          loading: false,
          contacts: response.data,
          filterContacts: response.data,
        });
      }
    } catch (error) {
      setState({ ...state, loading: false, errrorMessage: error.message });
    }
  };
  let searchContact = (event) => {
    setQuery({ ...query, text: event.target.value });
    let theContacts = state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setState({
      ...state,
      filterContacts: theContacts,
    });
  };
  let { loading, contacts, filterContacts, errrorMessage } = state;

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
                        name="text"
                        value={query.text}
                        onChange={searchContact}
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

      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="contact-list">
            <div className="container">
              <div className="row ">
                {filterContacts.length > 0 &&
                  filterContacts.map((contact) => {
                    return (
                      <>
                        <div className="col-md-6" key={contact.id}>
                          <div className="card my-2">
                            <div className="card-body">
                              <div className="row align-items-center">
                                <div className="col-md-4">
                                  <img
                                    src={contact.photo}
                                    alt=""
                                    className="contact-img"
                                  />
                                </div>
                                <div className="col-md-7">
                                  <div className="list-group">
                                    <ul>
                                      <li className="list-group-item list-group-item-action">
                                        Name :&nbsp;
                                        <span className="fw-bold">
                                          {contact.name}
                                        </span>
                                      </li>
                                      <li className="list-group-item list-group-item-action">
                                        Mobile : &nbsp;
                                        <span className="fw-bold">
                                          {contact.mobile}
                                        </span>
                                      </li>
                                      <li className="list-group-item list-group-item-action">
                                        Email : &nbsp;
                                        <span className="fw-bold">
                                          {contact.email}
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="col-md-1"
                                  style={{ paddingLeft: 3 }}
                                >
                                  <Link
                                    to={`/contactmanager/view/${contact.id}`}
                                    className="btn btn-warning"
                                    style={{ marginBottom: 4 }}
                                  >
                                    <BsFillEyeFill />
                                  </Link>
                                  <Link
                                    to={`/contactmanager/edit/${contact.id}`}
                                    className="btn btn-primary"
                                    style={{ marginBottom: 4 }}
                                  >
                                    <BsFillPencilFill />
                                  </Link>
                                  <button
                                    onClick={() => clickDelete(contact.id)}
                                    className="btn btn-danger"
                                    style={{ marginBottom: 4 }}
                                  >
                                    <BsFillTrashFill />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ContactList;
