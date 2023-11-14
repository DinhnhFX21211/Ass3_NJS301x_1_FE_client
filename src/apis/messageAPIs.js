import axiosInstance from "./config/AxiosConfig";

export const MessageAPI = {
  getMessageUser: async function (userId) {
    try {
      const response = await axiosInstance.get(`message/${userId}`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};
