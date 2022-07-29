import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./layout/Navbars.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import ContactList from "./components/contactmanager/ContactList";
import AddContact from "./components/contactmanager/AddContact";
import ViewContact from "./components/contactmanager/ViewContact";
import EditContact from "./components/contactmanager/EditContact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/" element={<Navigate to="/contactmanager/list"/>} /> */}
          <Route path={"/contactmanager/list"} element={<ContactList />} />
          <Route path={"/contactmanager/add"} element={<AddContact />} />
          <Route
            path={"/contactmanager/view/:contactId"}
            element={<ViewContact />}
          />
          <Route
            path={"/contactmanager/edit/:contactId"}
            element={<EditContact />}
          />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
