import React, { useEffect, useState } from "react";
import { ContactServices } from "./server/ContactService";
import { Link, useParams } from "react-router-dom";
const ViewContact = () => {
  let { contactId } = useParams();
  const [state, setState] = useState({
    loading: false,
    contacts: {},
    errrorMessage: "",
  });
  useEffect(async () => {
    try {
      let response = await ContactServices.getContact(contactId);
      console.log(response.data);
    } catch (error) {}
  }, [contactId]);
  return (
    <>
      <h2>{contactId}</h2>
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
      <section className="view-contact mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
                className="contact-img"
              />
            </div>
            <div className="col-md-8">
              <div className="list-group">
                <ul>
                  <li className="list-group-item list-group-item-action">
                    Name : <span className="fw-bold">Rajan</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Mobile : <span className="fw-bold">8777878</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Email :<span className="fw-bold">Rajdemo@.coman</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Company :<span className="fw-bold">Rajdemo@.coman</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Youtuber :<span className="fw-bold">Rajdemo@.coman</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Group :<span className="fw-bold">Rajdemo@.coman</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={"/contactmanager/list"} className="btn btn-danger ms-2">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewContact;
