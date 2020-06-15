import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/message";
const created_at = new Date().toString();

export async function sendMessage(to, content, status) {
  // "from", "to", "content", "status", "created_at"
  const from = jwtDecode(localStorage.getItem("token"))._id;

  http.post(apiEndpoint, {
    from,
    to,
    content,
    status,
    created_at,
  });
}
export async function read(_id) {
  return http.put(apiEndpoint + "/read/" + _id);
}

export async function deleteMessage(_id) {
  return http.delete(apiEndpoint + "/" + _id);
}

export async function getAll() {
  return http.get(apiEndpoint);
}

export async function message(_id) {
  return http.get(apiEndpoint + "/" + _id);
}
