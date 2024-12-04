import React, { useState, useEffect } from "react";
import Layout from "../Layouts/Layouts";

const crud = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ title: "", price: "", description: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newProduct) => {
        setProducts([...products, newProduct]);
        setFormData({ title: "", price: "", description: "" });
      });
  };

  const handleDelete = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })
      .then(() => setProducts(products.filter((product) => product.id !== id)));
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
    setCurrentId(product.id);
  };

  const handleUpdate = () => {
    fetch(`https://fakestoreapi.com/products/${currentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((updatedProduct) => {
        setProducts(
          products.map((product) => (product.id === currentId ? updatedProduct : product))
        );
        setFormData({ title: "", price: "", description: "" });
        setIsEditing(false);
        setCurrentId(null);
      });
  };

  return (
    <Layout>
    <div style={styles.container}>
      <h1 style={styles.header}>Fake Store CRUD</h1>
      <div style={styles.form}>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={formData.price}
          onChange={handleInputChange}
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          style={styles.textarea}
        />
        {isEditing ? (
          <button onClick={handleUpdate} style={styles.button}>
            Update
          </button>
        ) : (
          <button onClick={handleCreate} style={styles.button}>
            Create
          </button>
        )}
      </div>
      <ul style={styles.list}>
        {products.map((product) => (
          <li key={product.id} style={styles.card}>
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.price}>${product.price}</p>
            <p style={styles.description}>{product.description}</p>
            <div style={styles.actions}>
              <button onClick={() => handleEdit(product)} style={styles.editButton}>
                Edit
              </button>
              <button onClick={() => handleDelete(product.id)} style={styles.deleteButton}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "20px auto",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    resize: "none",
    height: "80px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "15px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  title: {
    margin: 0,
    fontSize: "18px",
    color: "#333",
  },
  price: {
    fontSize: "16px",
    color: "#007BFF",
  },
  description: {
    margin: "10px 0",
    color: "#666",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#FFC107",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#DC3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default crud;
