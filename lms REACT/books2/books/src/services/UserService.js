import axios from 'axios'

import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/");
  }

  getbyname(name){
    return http.get(`/getbyname/${name}`);
  }

  create(data) {
    return http.post("/register", data);
  }

  update(data) {
    console.log(data);
    return http.put("/updateDetails", data);
  }

  delete(id) {
    return http.delete(`/Delete/${id}`);
  }

  login(username,password){
    return http.get(`/LoginValidation/${username}/${password}`);
  }

  
}

export default new UserService();