import React, { useState } from "react";
import "../../styles/Admin.css";
import API from "../../utils/axios";
import { useEffect } from "react";
const AdminUpload = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [dataUpdated, setDataUpdated] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  console.log(form);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (error) {
      alert("Failed to load products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [dataUpdated]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.price || !form.category) {
      alert("Please fill all required fields");
      return;
    }

    try {
      if (isEditing) {
        await API.put(`/products/${editId}`, form);
        alert("product updated!");
        setDataUpdated(true);
        //  put = update  = it will update entire data
        //  patch = update = it will update appropriate field
      } else {
        await API.post("/products", form);
        alert("Product added");
      }
    } catch (error) {
      console.log("Save failed", error);
      alert("Failed to save product");
    }
  };

  const handleEdit = (product) => {
    setForm(product);
    setIsEditing(true);
    setEditId(product._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product")) return;
    try {
      await API.delete(`/products/${id} `);
      alert("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      console.log("Delete failed", error);
      alert("Failed to delete product");
    }
  };

  return (
    <div className="admin-upload-container container">
      <h2>{isEditing ? "Edit Product" : "Add Product"} </h2>
      <div className="form">
        <input
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Product Name"
        />
        <input
          name="description"
          onChange={handleChange}
          value={form.description}
          placeholder="Description"
        />
        <input
          name="price"
          onChange={handleChange}
          value={form.price}
          placeholder="Price"
        />
        <input
          name="category"
          onChange={handleChange}
          value={form.category}
          placeholder="Category"
        />
        <input
          name="image"
          onChange={handleChange}
          value={form.image}
          placeholder="Image URL"
        />
        <button onClick={handleSubmit}>
          {isEditing ? "Update Product" : "Add Product"}
        </button>
      </div>

      <h3>Product List</h3>
      <div className="product-list">
        {products.map((prod) => (
          <div className="product-card">
            <h4>{prod.name}</h4>
            <p>{prod.description}</p>
            <p>
              <strong>₹ {prod.price} </strong>{" "}
            </p>
            {prod.image && <img src={prod.image} alt={prod.name} width="100" />}

            <div className="actions">
              <button onClick={() => handleEdit(prod)}>Edit</button>
              <button onClick={() => handleDelete(prod._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUpload;
