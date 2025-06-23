import React, { useState } from "react";
import "../../styles/Admin.css";
import API from "../../utils/axios";
const AdminUpload = () => {

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  console.log(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.price || !form.category) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await API.post("/products", form);
      alert("Product added");
    } catch (error) {
      console.log("Save failed", error);
      alert("Failed to save product");
    }
  };

  return (
    <div className="admin-upload-container container">
      <h2> Add Product</h2>
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
        <button onClick={handleSubmit}>Add Product</button>
      </div>
    </div>
  );
};

export default AdminUpload;
