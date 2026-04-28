import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
    } catch (err) {
      toast.error(err.response?.data.message || "Failed to fetch categories");
    }
  };

  const createCategory = async () => {
    try {
      const { data } = await api.post("/categories", { name });
      toast.success("Category created!");
      setName("");
      fetchCategories();
    } catch (err) {
      toast.error(err.response?.data.message || "Failed to create category");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Categories</h2>
      <div className="mb-4 flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Category Name"
          className="border p-2 rounded flex-1"
        />
        <button onClick={createCategory} className="rounded bg-[#ff5252] px-4 text-white">
          Add
        </button>
      </div>

      <ul className="rounded bg-white p-4 shadow">
        {categories.map((cat) => (
          <li key={cat._id} className="border-b py-2">
            {cat.name}
            {/* You can add sub-category management buttons here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCategories;
