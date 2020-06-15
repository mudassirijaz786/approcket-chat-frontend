import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/room";
const created_at = new Date().toString();

export async function rooms() {
  return http.get(apiEndpoint);
}

export async function message(_id) {
  return http.get(apiEndpoint + "/" + _id);
}
export async function deleteRoom(_id) {
  return http.delete(apiEndpoint + "/" + _id);
}
export async function createRoom(name) {
  return http.post(apiEndpoint, {
    name,
    created_at,
  });
}
export async function joinRoom(room_id, member_id) {
  return http.put(apiEndpoint + "/joinRoom/" + room_id, {
    member_id,
  });
}
export async function leaveRoom(room_id, _id) {
  return http.put(apiEndpoint + "/leaveRoom/" + room_id, {
    _id,
  });
}

export async function sendMessage(room_id, message_id) {
  return http.put(apiEndpoint + "/sendMessage/" + room_id, {
    message_id,
  });
}

// export async function sendMessage
