import axios from 'axios';

const url = 'http://localhost:4008/'

export const fetchUsers = () => axios.get(url);

export const createUser = (newUser) => axios.user(url, newUser)