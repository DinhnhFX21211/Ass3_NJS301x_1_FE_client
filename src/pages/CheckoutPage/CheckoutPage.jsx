import React from "react";
import SimpleBanner from "../../UI/SimpleBanner/SimpleBanner";
import BillingDetail from "../../components/CheckoutPage/BillingDetail/BillingDetail";

function CheckoutPage(props) {
  return (
    <div>
      <SimpleBanner bannerName="Checkout" isCheckoutBanner={true} />
      <BillingDetail />
    </div>
  );
}

export default CheckoutPage;
