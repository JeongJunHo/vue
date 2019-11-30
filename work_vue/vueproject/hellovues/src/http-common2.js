import axios from "axios";

export default axios.create({
<<<<<<< HEAD
=======
  //baseURL: "http://192.168.28.129:8397/api/auth",
>>>>>>> 53aa048bf1c55ecca1a5695af6010047effedb98
  baseURL: "http://localhost:8397/api/auth",
  headers: {
    "Content-type": "application/json"
  }
});