import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v4';
const COMPANY = '/company';
const LAUNCHES = '/launches';
const ROCKETS = '/rockets';
const CREW = '/crew';

export const getAllUsers = () => axios.get('https://my-json-server.typicode.com/BogdanVulic/json_server/users')
export const registerUser = (username,email,password) => axios.post('https://my-json-server.typicode.com/BogdanVulic/json_server/users',{username,email,password})

export const getCompany = () => axios.get(`${BASE_URL}${COMPANY}`);
export const getLaunches = () => axios.get(`${BASE_URL}${LAUNCHES}`);
export const getRockets = () => axios.get(`${BASE_URL}${ROCKETS}`);
export const getCrew = () => axios.get(`${BASE_URL}${CREW}`);