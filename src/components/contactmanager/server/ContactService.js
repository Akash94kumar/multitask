import axios from "axios";

export class ContactServices {
  static serverURL = `http://localhost:9000`;

  static getAllContacts() {
    let dataURL = `${this.serverURL}/contacts`;
    return axios.get(dataURL);
  }
}
