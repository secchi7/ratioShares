import axios from "axios";

const API = "http://127.0.0.1:5000/api";

export const sendDataRequest = (share) => axios.post(`${API}/ratio`, share);
