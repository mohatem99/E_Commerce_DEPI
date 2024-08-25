import { createContext, useEffect, useState } from "react";
import { api } from "../Api/axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");

      setProducts(res.data.products);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const filterComponetOrders = async (val) => {
    try {
      console.log(orderBy);
      const res = await api.get(`/products?sortBy=title&order=${val}`);
      console.log(res);
      setProducts(res.data.products);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsSearch = async (query) => {
    try {
      const res = await api.get(`/products/search?q=${query}`);

      setProducts(res.data.products);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    fetchProductsSearch(query);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        orderBy,
        setOrderBy,
        filterComponetOrders,
        loading,
        handleSearch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
