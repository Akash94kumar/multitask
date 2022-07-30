import React, { useEffect, useState } from "react";
import { ContactServices } from "./server/ContactService";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../spinner/Spinner";
const ViewContact = () => {
  let { contactId } = useParams();
  const [state, setState] = useState({
    loading: false,
    contact: {},
    errrorMessage: "",
    group: {},
  });
  useEffect(async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactServices.getContact(contactId);
      let groupResponse = await ContactServices.getGroup(response.data);
      setState({
        ...state,
        loading: false,
        contact: response.data,
        group: groupResponse.data,
      });
    } catch (error) {
      setState({ ...state, loading: false, errrorMessage: error.message });
    }
  }, [contactId]);
  let { loading, contact, errrorMessage, group } = state;
  return (
    <>
  
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">View Contact </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(contact).length > 0 && Object.keys(group).length > 0 && (
            <section className="view-contact mt-3">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <img src={contact.photo} alt="" className="contact-img" />
                  </div>
                  <div className="col-md-8">
                    <div className="list-group">
                      <ul>
                        <li className="list-group-item list-group-item-action">
                          Name : <span className="fw-bold">{contact.name}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobile :{" "}
                          <span className="fw-bold">{contact.mobile}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email :
                          <span className="fw-bold">{contact.email}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Company :
                          <span className="fw-bold">{contact.company}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Title :
                          <span className="fw-bold">{contact.title}</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Group :<span className="fw-bold">{group.name}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Link
                      to={"/contactmanager/list"}
                      className="btn btn-danger ms-2"
                    >
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default ViewContact;
