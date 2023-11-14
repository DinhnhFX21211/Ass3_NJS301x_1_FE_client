import React from "react";

const ProductDetailContext = React.createContext({
  productDetail: {},
  relatedProducts: [],
});

export default ProductDetailContext;
