import React from "react";
import SimpleBanner from "../../UI/SimpleBanner/SimpleBanner";
import ShoppingCart from "../../components/CartPage/ShoppingCart/ShoppingCart";

function CartPage(props) {
  return (
    <>
      <SimpleBanner bannerName="Cart" />
      <ShoppingCart />
    </>
  );
}

export default CartPage;
