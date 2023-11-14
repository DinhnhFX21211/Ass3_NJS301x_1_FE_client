import React from "react";
import SimpleBanner from "../../UI/SimpleBanner/SimpleBanner";
import HistoryTable from "../../components/HistoryPage/HistoryTable/HistoryTable";
import { useLoaderData } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { ShopAPI } from "../../apis/shopAPIs";

function HistoryOrder(props) {
  const data = useLoaderData();
  return (
    <div>
      <SimpleBanner bannerName="History" />
      <HistoryTable data={data} />
    </div>
  );
}

export default HistoryOrder;

export const loader = async () => {
  const res = await ShopAPI.getOrders();
  if (res.status === 200) {
    return res.data;
  } else {
    enqueueSnackbar("Load History Order fail!", { variant: "error" });
    return null;
  }
};
