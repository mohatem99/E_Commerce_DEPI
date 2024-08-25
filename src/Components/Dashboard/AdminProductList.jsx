import React from "react";
import { Link } from "react-router-dom";

export default function AdminProductList({ products }) {
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="px-4 py-2">{product.id}</td>
              <td className="px-4 py-2">
                <strong>{product.title}</strong>
              </td>
              <td className="px-4 py-2">${product.price}</td>
              <td className="px-4 py-2">
                {product.description.substring(0, 100)}...
              </td>
              <td className="px-4 py-2 flex space-x-2">
                <Link
                  to={`${product.id}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
