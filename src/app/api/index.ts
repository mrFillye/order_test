import axios from 'axios';
import { io } from 'socket.io-client';

const baseURL = 'http://localhost:3000';

export const api = axios.create({ baseURL });

export const socket = io(baseURL);
