import React from "react";
import { ShopAPI } from "../../apis/shopAPIs";
import { useLoaderData } from "react-router-dom";
import OrderDetails from "../../components/OrderDetailPage/OrderDetails/OrderDetails";

function OrderDetailPage(props) {
  const data = useLoaderData();
  return (
    <div>
      <OrderDetails order={data} />
    </div>
  );
}

export default OrderDetailPage;

export const loader = async ({ params }) => {
  const orderId = params.orderId;
  const res = await ShopAPI.getOrderDetail(orderId);
  if (res.status === 200) {
    return res.data;
  }
  return null;
};
