import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Products from "../Products/Products";
import Loading from "../Loading/Loading";

export default function Home() {
  const { products, loading } = useContext(Context);
  function isEmpty() {
    return products.length == 0;
  }

  return <>{isEmpty() ? <Loading /> : <Products products={products} />}</>;
}
