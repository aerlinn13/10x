import axios from 'axios';
import { User } from '../state/slice';
import { normaliseUsers } from './normalisers';

const API_URL = 'https://reqres.in/api/users';

export const requestUsers = () =>  axios.get(API_URL).then(response => normaliseUsers(response.data.data));

export const requestCreateUser = (user: Partial<User>) => axios.post(API_URL, user).then(response => response.data);

export const requestUpdateUser = (user: Partial<User>) => axios.put(API_URL, user).then(response => response.data);

export const requestDeleteUser = (userId: string) => axios.delete(`${API_URL}/${userId}`).then(() => userId);
