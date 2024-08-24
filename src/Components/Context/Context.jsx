import React, { createContext, useState, useEffect } from "react";
import { api } from "../utils/axios";
import axios from "axios";

export const Context = createContext();

export function ContextProvioder({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCounts, setTotalCounts] = useState(0);

  async function getProducts() {
    try {
      let { data } = await axios.get("https://dummyjson.com/products");

      console.log(data.products);
      setProducts(data.products);
      setTotalCounts(data.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        loading,
        totalCounts,
      }}
    >
      {children}
    </Context.Provider>
  );
}
