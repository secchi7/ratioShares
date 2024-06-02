import axios from "axios";

const API = "http://localhost:8080/api";

export const sendDataRequest = (share) => axios.post(`${API}/ratio`, share);
