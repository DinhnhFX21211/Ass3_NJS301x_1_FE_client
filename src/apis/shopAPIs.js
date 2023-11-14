import axiosInstance from "./config/AxiosConfig";

export const ShopAPI = {
  addToCart: async function (data) {
    try {
      const response = await axiosInstance.post("/shop/add-to-cart", data, {
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  getCartItem: async function () {
    try {
      const response = await axiosInstance.get("/shop/user/cart", {
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  updateItemQuantity: async function (data) {
    try {
      const response = await axiosInstance.post(
        "/shop/user/change-item-quantity",
        data,
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  removeItemFromCart: async function (data) {
    try {
      const response = await axiosInstance.post(
        "/shop/user/cart/remove",
        data,
        {
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  order: async function (data) {
    try {
      const response = await axiosInstance.post("/shop/orders", data, {
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  getOrders: async function () {
    try {
      const response = await axiosInstance.get("/shop/user/orders", {
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  getOrderDetail: async function (orderId) {
    try {
      const response = await axiosInstance.get(`/shop/orders/${orderId}`, {
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
};
