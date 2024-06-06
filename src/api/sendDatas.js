import axios from "axios";

const API = "https://ratiosharesbackend.onrender.com/api";

export const sendDataRequest = (share) => axios.post(`${API}/ratio`, share);
