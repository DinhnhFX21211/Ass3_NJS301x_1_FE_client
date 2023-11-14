import { io } from "socket.io-client";
import { URL } from "./stores/deployUrl";
export const socket = io(URL);
