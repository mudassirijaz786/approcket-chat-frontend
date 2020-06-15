import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export async function register(user) {
  return await http.post(apiEndpoint + "/register", {
    username: user.username,
    password: user.password,
  });
}
