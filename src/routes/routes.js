import ShopPage from "../pages/ShopPage/ShopPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MainLayout from "../components/Layout/MainLayout/MainLayout";
import { loader as homePageProductsLoader } from "../components/HomePage/Products/Products";
import { loader as detailPageProductsLoader } from "../pages/DetailPage/DetailPage";
import { loader as ordersHistoryLoader } from "../pages/HistoryOrder/HistoryOrder";
import { loader as ordersDetailLoader } from "../pages/OrderDetailPage/OrderDetailPage";
import SomethingWrong from "../components/ErrorPage/SomethingWrong";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HistoryOrder from "../pages/HistoryOrder/HistoryOrder";
import OrderDetailPage from "../pages/OrderDetailPage/OrderDetailPage";
import ProtectionRoute from "../components/ProtectionRoute/ProtectionRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <SomethingWrong />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homePageProductsLoader,
      },
      {
        path: "shoppage",
        element: <ShopPage />,
      },
      {
        path: "products/:productId",
        element: <DetailPage />,
        loader: detailPageProductsLoader,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: (
          <ProtectionRoute>
            <CheckoutPage />
          </ProtectionRoute>
        ),
      },
      {
        path: "history",
        element: (
          <ProtectionRoute>
            <HistoryOrder />
          </ProtectionRoute>
        ),
        loader: ordersHistoryLoader,
      },
      {
        path: "history/:orderId",
        element: (
          <ProtectionRoute>
            <OrderDetailPage />
          </ProtectionRoute>
        ),
        loader: ordersDetailLoader,
      },
    ],
  },
  {
    path: "/login",
    element: <RegisterPage />,
  },
  {
    path: "/logout",
  },
]);
