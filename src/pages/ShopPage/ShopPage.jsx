import React from "react";
import SimpleBanner from "../../UI/SimpleBanner/SimpleBanner";
import ContainerSearch from "../../components/ShopPage/ContainerSearch/ContainerSearch";

function ShopPage(props) {
  return (
    <>
      <SimpleBanner bannerName="Shop" />
      <ContainerSearch />
    </>
  );
}

export default ShopPage;
