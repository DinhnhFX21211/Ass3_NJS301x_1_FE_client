import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ProductDetailContext from "../../stores/productDetailContext";
import ProductDetail from "../../components/ProductDetailPage/ProductDetail/ProductDetail";
import { ProductAPI } from "../../apis/productAPIs";

function DetailPage(props) {
  const { product, relatedProduct } = useLoaderData();
  return (
    <ProductDetailContext.Provider
      value={{ productDetail: product, relatedProducts: relatedProduct }}
    >
      <ProductDetail />
    </ProductDetailContext.Provider>
  );
}

export default DetailPage;

export const loader = async ({ params }) => {
  const id = params.productId;
  const response = await ProductAPI.getProductDetails(id);

  if (response.status !== 200) {
    throw json({ message: "Something went wrong" }, { status: 500 });
  }

  return response.data;
};
