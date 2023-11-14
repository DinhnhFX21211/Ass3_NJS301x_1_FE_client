import axios from "axios";
import { URL } from "../../stores/deployUrl";

const axiosInstance = axios.create({
  baseURL: `${URL}/api`,
});

export default axiosInstance;
