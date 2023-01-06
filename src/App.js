import "../node_modules/bootstrap/dist/css/bootstrap.css";
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
import SampleComponent from "./HOC/SampleComponent";
import ColorChanges from "./USE_REFS/ColorChanges";

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
          <Route path="/hoc" element={<SampleComponent />} />
          <Route path="/use_ref_color" element={<ColorChanges />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
