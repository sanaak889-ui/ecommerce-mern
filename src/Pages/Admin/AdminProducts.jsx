import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editProductId, setEditProductId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", price: "", countInStock: "", description: "", image: "" });

  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", countInStock: "", description: "", image: "" });
  const [adding, setAdding] = useState(false);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("adminToken");
        if (!token) {
          setError("Unauthorized! Please login as admin.");
          setProducts([]);
          setLoading(false);
          return;
        }

        const res = await axios.get("http://localhost:5000/api/products", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProducts(res.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.response?.data?.message || "Failed to fetch products.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      const token = localStorage.getItem("adminToken");
      await axios.delete(`http://localhost:5000/api/admin/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Product deleted successfully!");
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to delete product.");
    }
  };

  // Start editing a product
  const handleEdit = (product) => {
    setEditProductId(product._id);
    setEditForm({
      name: product.name,
      price: product.price,
      countInStock: product.countInStock,
      description: product.description,
      image: product.image,
    });
  };

  // Save edited product
  const handleSave = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await axios.put(
        `http://localhost:5000/api/admin/products/${id}`,
        editForm,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Product updated successfully!");
      setProducts(products.map((p) => (p._id === id ? res.data : p)));
      setEditProductId(null);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to update product.");
    }
  };

  // Add new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setAdding(true);
    try {
      const token = localStorage.getItem("adminToken");
      const res = await axios.post(
        "http://localhost:5000/api/admin/products",
        newProduct,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Product added successfully!");
      setProducts([res.data, ...products]);
      setNewProduct({ name: "", price: "", countInStock: "", description: "", image: "" });
      setShowAddModal(false);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to add product.");
    } finally {
      setAdding(false);
    }
  };

  if (loading)
    return (
      <p className="mt-10 text-center text-lg font-medium text-gray-500">
        Loading products...
      </p>
    );
  if (error)
    return (
      <p className="mt-10 text-center text-lg font-medium text-red-500">{error}</p>
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#ff5252]">Admin Products</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#ff5252] text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Add New Product
        </button>
      </div>

      {products.length > 0 ? (
        <div className="overflow-x-auto rounded-lg bg-white p-6 shadow">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Product ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Stock</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{prod._id.slice(-6).toUpperCase()}</td>

                  {/* Editable fields */}
                  <td className="border px-4 py-2">
                    {editProductId === prod._id ? (
                      <input
                        type="text"
                        className="w-full rounded border px-2 py-1"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      />
                    ) : (
                      prod.name
                    )}
                  </td>

                  <td className="border px-4 py-2">
                    {editProductId === prod._id ? (
                      <input
                        type="number"
                        className="w-full rounded border px-2 py-1"
                        value={editForm.price}
                        onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                      />
                    ) : (
                      `$${prod.price?.toFixed(2)}`
                    )}
                  </td>

                  <td className="border px-4 py-2">
                    {editProductId === prod._id ? (
                      <input
                        type="number"
                        className="w-full rounded border px-2 py-1"
                        value={editForm.countInStock}
                        onChange={(e) => setEditForm({ ...editForm, countInStock: e.target.value })}
                      />
                    ) : (
                      prod.countInStock
                    )}
                  </td>

                  <td className="flex gap-2 border px-4 py-2">
                    {editProductId === prod._id ? (
                      <>
                        <button
                          onClick={() => handleSave(prod._id)}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditProductId(null)}
                          className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(prod)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(prod._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}

      {/* Add New Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-[#ff5252]">Add New Product</h2>
            <form className="space-y-3" onSubmit={handleAddProduct}>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded border px-3 py-2"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Price"
                className="w-full rounded border px-3 py-2"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Stock"
                className="w-full rounded border px-3 py-2"
                value={newProduct.countInStock}
                onChange={(e) => setNewProduct({ ...newProduct, countInStock: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Description"
                className="w-full rounded border px-3 py-2"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Image URL"
                className="w-full rounded border px-3 py-2"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />

              <div className="mt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={adding}
                  className="rounded bg-[#ff5252] px-4 py-2 text-white hover:bg-red-600"
                >
                  {adding ? "Adding..." : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
