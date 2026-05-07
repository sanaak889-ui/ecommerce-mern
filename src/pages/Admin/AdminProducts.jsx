import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";

/* ================= CATEGORY RULES ================= */

const CATEGORY_MAP = {
  Fashion: {
    subcategories: ["Men", "Women", "Kids"],
    subSubcategories: {
      Men: ["T-Shirts", "Polos", "Hoodies&Sweatshirts", "Jackets&Coats", "Ethnic-Wear", "Pants", "Innerwear"],
      Women: ["Tops&Tees", "Dresses", "Kurtis&Ethnic", "Jeans&Pants", "Skirts", "Innerwear"],
      Kids: ["Boys-Clothing", "Girls-Clothing", "T-Shirts", "Shorts&Jeans", "Winter-Wear", "Summer-Wear"],
    },
  },

  Electronics: {
    subcategories: ["Laptops", "Phones", "SmartGadgets"],
    
  },

  Footwear: {
    subcategories: ["Men", "Women", "Kids"],
    
  },

  // No subcategories
  Bags: { subcategories: [], subSubcategories: {} },
  Accessories: { subcategories: [], subSubcategories: {} },
  Furniture: { subcategories: [], subSubcategories: {} },
  Perfumes: { subcategories: [], subSubcategories: {} },
  Jewellery: { subcategories: [], subSubcategories: {} },
  Beauty: { subcategories: [], subSubcategories: {} },
  Groceries: { subcategories: [], subSubcategories: {} },
};

const emptyProduct = {
  name: "",
  price: "",
  oldPrice: "",
  description: "",
  category: "Fashion",
  subcategory: "",
  subSubcategory: "",
  images: [],
  sizesStock: [
    { size: "S", qty: 0 },
    { size: "M", qty: 0 },
    { size: "L", qty: 0 },
  ],
};

/* ================= COMPONENT ================= */

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState(emptyProduct);
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [subCategories, setSubCategories] = useState([]);
  const [subSubCategories, setSubSubCategories] = useState([]);

  /* ================= FETCH ================= */

  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ================= CATEGORY CHANGE ================= */

  const handleCategoryChange = (value) => {
    setForm({
      ...form,
      category: value,
      subcategory: "",
      subSubcategory: "",
    });

    setSubCategories(CATEGORY_MAP[value]?.subcategories || []);
    setSubSubCategories([]);
  };

  const handleSubCategoryChange = (value) => {
    setForm({
      ...form,
      subcategory: value,
      subSubcategory: "",
    });

    setSubSubCategories(
      CATEGORY_MAP[form.category]?.subSubcategories?.[value] || []
    );
  };

  /* ================= SAVE ================= */

  const handleSave = async () => {
    try {
      if (editId) {
        await api.put(`/products/admin/${editId}`, form);
        toast.success("Product updated");
      } else {
        await api.post("/products/admin", form);
        toast.success("Product added");
      }

      setForm(emptyProduct);
      setEditId(null);
      setShowModal(false);
      fetchProducts();
    } catch {
      toast.error("Something went wrong");
    }
  };

  /* ================= DELETE ================= */

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await api.delete(`/products/admin/${id}`);
      toast.success("Deleted");
      fetchProducts();
    } catch {
      toast.error("Delete failed");
    }
  };

  /* ================= EDIT ================= */

  const handleEdit = (p) => {
    setEditId(p._id);

    setForm({
      name: p.name || "",
      price: p.price || "",
      oldPrice: p.oldPrice || "",
      description: p.description || "",
      category: p.category || "Fashion",
      subcategory: p.subcategory || "",
      subSubcategory: p.subSubcategory || "",
      images: p.images || [],
      sizesStock: p.sizesStock || [
        { size: "S", qty: 0 },
        { size: "M", qty: 0 },
        { size: "L", qty: 0 },
      ],
    });

    setSubCategories(
      CATEGORY_MAP[p.category]?.subcategories || []
    );

    setSubSubCategories(
      CATEGORY_MAP[p.category]?.subSubcategories?.[p.subcategory] || []
    );

    setShowModal(true);
  };

  /* ================= SIZE UPDATE ================= */

  const updateSize = (size, qty) => {
    const updated = form.sizesStock.map((s) =>
      s.size === size ? { ...s, qty: Number(qty) } : s
    );

    setForm({ ...form, sizesStock: updated });
  };

  /* ================= IMAGE REMOVE ================= */

  const removeImage = (index) => {
    setForm({
      ...form,
      images: form.images.filter((_, i) => i !== index),
    });
  };

  /* ================= UI ================= */

  if (loading)
    return <p className="mt-10 text-center">Loading...</p>;

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="mb-5 flex justify-between">
        <h2 className="text-xl font-bold text-[#ff5252]">
          Products
        </h2>

        <button
          onClick={() => {
            setForm(emptyProduct);
            setEditId(null);
            setShowModal(true);
          }}
          className="bg-[#ff5252] text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* PRODUCT CARDS */}
      <div className="grid gap-4 md:grid-cols-3">
        {products.map((p) => (
          <div key={p._id} className="rounded bg-white p-4 shadow">

           <img
              src={
                p.images && p.images.length > 0
                  ? p.images[0]
                  : "/shop.png"
              }
              className="h-40 w-full rounded object-cover"
            />

            <h3 className="mt-2 font-semibold">{p.name}</h3>

            <p className="font-bold text-[#ff5252]">
              ${p.price}
            </p>

            {p.oldPrice && (
              <p className="text-gray-400 line-through">
                ${p.oldPrice}
              </p>
            )}

            <p className="text-sm">
              Stock: {p.countInStock}
            </p>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => handleEdit(p)}
                className="bg-blue-500 px-3 py-1 text-white rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(p._id)}
                className="bg-red-500 px-3 py-1 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">

          <div className="max-h-[90vh] w-[600px] overflow-auto rounded bg-white p-6">

            <h2 className="mb-3 text-lg font-bold">
              {editId ? "Edit Product" : "Add Product"}
            </h2>

            {/* NAME */}
            <input
              className="mb-2 w-full border p-2"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            {/* PRICE */}
            <input
              className="mb-2 w-full border p-2"
              placeholder="Price"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
            />

            {/* OLD PRICE */}
            <input
              className="mb-2 w-full border p-2"
              placeholder="Old Price"
              value={form.oldPrice}
              onChange={(e) =>
                setForm({ ...form, oldPrice: e.target.value })
              }
            />

            {/* DESCRIPTION */}
            <textarea
              className="mb-2 w-full border p-2"
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            {/* CATEGORY */}
            <select
              className="mb-2 w-full border p-2"
              value={form.category}
              onChange={(e) =>
                handleCategoryChange(e.target.value)
              }
            >
              {Object.keys(CATEGORY_MAP).map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            {/* SUBCATEGORY */}
            {subCategories.length > 0 && (
              <select
                className="mb-2 w-full border p-2"
                value={form.subcategory}
                onChange={(e) =>
                  handleSubCategoryChange(e.target.value)
                }
              >
                <option value="">Select Subcategory</option>
                {subCategories.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            )}

            {/* SUB SUBCATEGORY */}
            {subSubCategories.length > 0 && (
              <select
                className="mb-2 w-full border p-2"
                value={form.subSubcategory}
                onChange={(e) =>
                  setForm({
                    ...form,
                    subSubcategory: e.target.value,
                  })
                }
              >
                <option value="">Select Sub Subcategory</option>
                {subSubCategories.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            )}

            {/* SIZE STOCK */}
            <div className="mb-2 flex gap-2">
              {form.sizesStock.map((s) => (
                <input
                  key={s.size}
                  className="w-16 border p-1"
                  value={s.qty}
                  onChange={(e) =>
                    updateSize(s.size, e.target.value)
                  }
                />
              ))}
            </div>

            {/* IMAGES */}
            <input
  type="file"
  multiple
  onChange={async (e) => {
    const files = Array.from(e.target.files);

    const fd = new FormData();

    // ✅ send ALL images in ONE request
    files.forEach((file) => {
      fd.append("images", file); // MUST match backend
    });

    try {
      const res = await api.post("/upload", fd);

      console.log("UPLOAD RESPONSE:", res.data); // debug

      setForm((prev) => ({
        ...prev,
        images: [...prev.images, ...(res.data.urls || [])],
      }));

    } catch (err) {
      console.error(err);
      toast.error("Image upload failed");
    }
  }}
/>

            {/* PREVIEW */}
            <div className="mt-2 flex gap-2">
              {form.images.map((img, i) => (
                <div key={i} className="relative">
                  <img
                      src={img}
                      className="h-16 w-16 rounded object-cover"
                    />
                  <button
                    onClick={() => removeImage(i)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white px-2 rounded"
                  >
                    x
                  </button>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-4 flex justify-end gap-2">

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="rounded bg-[#ff5252] px-3 py-1 text-white"
              >
                Save
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminProducts;