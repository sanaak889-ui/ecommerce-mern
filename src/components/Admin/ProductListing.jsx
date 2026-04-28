import { useEffect, useState } from "react";
import api from "../../api/axios";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    countInStock: "",
    description: "",
    image: "",
  });

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (error) {
      alert("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  // Delete product
  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await api.delete(`/admin/products/${id}`);
      fetchProducts();
    }
  };

  // Update product
  const updateHandler = async () => {
    try {
      await api.put(`/admin/products/${editingProduct._id}`, form);
      setEditingProduct(null);
      fetchProducts();
      alert("Product updated!");
    } catch (error) {
      alert("Failed to update product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h2>Products</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.countInStock}</td>
              <td>
                <button
                  onClick={() => {
                    setEditingProduct(p);
                    setForm({
                      name: p.name,
                      price: p.price,
                      countInStock: p.countInStock,
                      description: p.description,
                      image: p.image,
                    });
                  }}
                >
                  Edit
                </button>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => deleteHandler(p._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Form */}
      {editingProduct && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h3>Edit Product: {editingProduct.name}</h3>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input
            placeholder="Stock"
            value={form.countInStock}
            onChange={(e) =>
              setForm({ ...form, countInStock: e.target.value })
            }
          />
          <input
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
          <div style={{ marginTop: "10px" }}>
            <button onClick={updateHandler}>Update Product</button>
            <button
              onClick={() => setEditingProduct(null)}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;