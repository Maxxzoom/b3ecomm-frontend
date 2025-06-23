import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import API from "../utils/axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (error) {
      alert("Failed to load products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.length === 0 && loading ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>₹ {product.price} </strong>{" "}
              </p>
              {product.image && (
                <img src={product.image} alt={product.name} width="100" />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
