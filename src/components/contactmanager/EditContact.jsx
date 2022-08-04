import { useState, useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { ContactServices } from "./server/ContactService";
const EditContact = () => {
  let { contactId } = useParams();
  let navigate = useNavigate();

  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      email: "",
      company: "",
      title: "",
      groupId: "",
    },
    groups: [],
    errorMessage: "",
  });

  useEffect(async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactServices.getContact(contactId);
      let groupResponse = await ContactServices.getGroups();
      setState({
        ...state,
        loading: true,
        contact: response.data,
        groups: groupResponse.data,
      });
    } catch (error) {
      setState({ ...state, loading: false, errorMessage: error.message });
    }
  }, [contactId]);
  let updateInput = (event) => [
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    }),
  ];
  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactServices.updateContact(
        state.contact,
        contactId
      );
      if (response) {
        navigate("../contactmanager/list", { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.messages });
      navigate(`../contactmanager/edit/${contactId}`, { replace: false });
    }
  };
  let { loading, contact, groups, errorMessage } = state;
  return (
    <>
      <pre>{JSON.stringify(contact)}</pre>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Edit Contact </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={submitForm}>
                <div className="mb-2">
                  <input
                    type="text"
                    required="true"
                    name="name"
                    onChange={updateInput}
                    value={contact.name}
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    required="true"
                    name="photo"
                    onChange={updateInput}
                    value={contact.photo}
                    className="form-control"
                    placeholder="Photo URL"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    required="true"
                    name="email"
                    onChange={updateInput}
                    value={contact.email}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    required="true"
                    name="mobile"
                    onChange={updateInput}
                    value={contact.mobile}
                    className="form-control"
                    placeholder="Mobile No"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    required="true"
                    name="company"
                    onChange={updateInput}
                    value={contact.company}
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    required="true"
                    name="title"
                    onChange={updateInput}
                    value={contact.title}
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <select
                    className="form-control"
                    required="true"
                    name="groupId"
                    onChange={updateInput}
                    value={contact.groupId}
                  >
                    <option value=""> Select a group</option>
                    {groups.length > 0 &&
                      groups.map((group) => {
                        return (
                          <option key={group.id} value={group.id}>
                            {group.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Edit"
                  />

                  <Link
                    className="btn btn-danger ms-2"
                    to={"/contactmanager/list"}
                  >
                    cancel
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <img src={contact.photo} alt="" className="contact-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditContact;
