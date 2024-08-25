import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../utils/axios";

export default function EditProduct() {
  //   const { id } = useParams();
  //   const navigate = useNavigate();
  //   const [product, setProduct] = useState({ title: "", body: "" });

  //   useEffect(() => {
  //     const fetchProduct = async () => {
  //       try {
  //         const response = await api.get(`${id}`);
  //         setPost(response.data);
  //       } catch (error) {
  //         console.error("Error fetching product:", error);
  //       }
  //     };

  //     fetchProduct();
  //   }, [id]);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setProduct((prevPost) => ({
  //       ...prevPost,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       let response = await api.put(`${id}`, product);
  //       console.log(response);

  //       navigate(`${id}`);
  //     } catch (error) {
  //       console.error("Error updating product:", error);
  //     }
  //   };
  return (
    <>
      <div>Product Edit</div>
    </>
  );
}
