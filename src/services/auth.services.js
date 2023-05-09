import axios from 'axios';
import jwt_decode from "jwt-decode";

// change url in large project
const authUrl = 'http://localhost:5000/api/login';

export async function login(email, password) {
    let response = await axios.post(authUrl, { email, password });
    let { token } = response.data;
    let { authenticatedUser: currentUser }= jwt_decode(token);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

export function getCurrentUser() {
    let loggedInUser = localStorage.getItem('currentUser')
    loggedInUser = JSON.parse(loggedInUser);
    return loggedInUser;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login
}