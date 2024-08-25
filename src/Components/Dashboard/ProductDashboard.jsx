import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Context/ProductsContext";

import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import AdminProductList from "./AdminProductList";

export default function ProductDashboard() {
  const { products, setProducts, loading } = useContext(ProductsContext);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit product with id: ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("https://dummyjson.com/products/${id}");
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://dummyjson.com/products/add",
        newProduct
      );
      setProducts([...products, data]);
      setNewProduct({ title: "", price: "", description: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Products Dashboard
      </h1>
      <div className="flex justify-end mb-6">
        <Link
          to="add"
          className="rounded-lg bg-cyan-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-900 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-700 dark:hover:bg-cyan-800 dark:focus:ring-cyan-900"
        >
          Add New Product
        </Link>
      </div>
      {/* Products Table */}
      <div className="overflow-x-auto">
        <AdminProductList products={products} />
      </div>
    </div>
  );
}
