import axiosInstance from "./config/AxiosConfig";

export const ProductAPI = {
  trending: async function () {
    try {
      const response = await axiosInstance.get("products/trending");
      return response;
    } catch (error) {
      return error.response;
    }
  },
  getProductDetails: async function (productId) {
    try {
      const response = await axiosInstance.get(`products/${productId}`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  searchProduct: async function (dataFilter, page) {
    try {
      const response = await axiosInstance.get(
        `products/all?page=${page}`,
        dataFilter
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
};
