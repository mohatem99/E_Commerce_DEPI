import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { api } from "../utils/axios";
import Loading from "../Loading/Loading";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, loading] = useFetch(id);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await api.delete(`products/${id}`);
      navigate("/products");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          {product.images && product.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ))}
            </div>
          ) : (
            <p>No images available</p>
          )}
        </div>
        <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-gray-500 mb-4">Price: ${product.price}</p>
        <p className="text-gray-500 mb-4">Category: {product.category}</p>

        <div className="flex space-x-4 mt-6">
          <Link
            to={`/admin-dashboard/edit/${product.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <i className="fas fa-edit mr-1"></i>
            Edit Product
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            <i className="fas fa-trash mr-1"></i>
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
}
