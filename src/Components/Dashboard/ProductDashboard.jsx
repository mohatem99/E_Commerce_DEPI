import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import axios from "axios";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import AdminProductList from "./AdminProductList";

export default function ProductDashboard() {
  const { products, setProducts, loading } = useContext(Context);
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
    return <Loading />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Products Dashboard
      </h1>
      <div className="flex justify-end mb-6">
        <Link
          to="add-product"
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
        >
          Add Product
        </Link>
      </div>
      {/* Products Table */}
      <div className="overflow-x-auto">
        <AdminProductList products={products} />
      </div>
    </div>
  );
}
