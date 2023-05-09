import axios from "axios";
import jwt_decode from "jwt-decode";
// change url in large project
const authUrl = `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/api/login`;

export async function login(email, password) {
  const response = await axios.post(authUrl, { email, password });
  const { token } = response.data;
  const { authenticatedUser: currentUser } = jwt_decode(token);
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
};
