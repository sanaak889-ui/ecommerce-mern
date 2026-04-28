import React, { useState, useEffect } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";

const AdminLogo = () => {
  const [logo, setLogo] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLogo = async () => {
    try {
      const { data } = await api.get("/banners?type=logo");
      if (data.length > 0) setLogo(data[0]);
    } catch (err) {
      toast.error(err.response?.data.message || "Failed to fetch logo");
    }
  };

  useEffect(() => {
    fetchLogo();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return toast.error("Select an image");

    const formData = new FormData();
    formData.append("type", "logo");
    formData.append("image", file);

    setLoading(true);
    try {
      if (logo) {
        await api.put(`/banners/${logo._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Logo updated!");
      } else {
        await api.post("/banners", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Logo uploaded!");
      }
      setFile(null);
      fetchLogo();
    } catch (err) {
      toast.error(err.response?.data.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Logo</h2>

      <form onSubmit={handleUpload} className="mb-6 flex gap-2">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="border p-2 rounded" />
        <button
          type="submit"
          className="rounded bg-[#ff5252] px-4 text-white"
          disabled={loading}
        >
          {loading ? "Uploading..." : logo ? "Update Logo" : "Upload Logo"}
        </button>
      </form>

      {logo && (
        <div className="rounded bg-white p-4 shadow">
          <img src={logo.image} alt="Logo" className="h-32 object-contain" />
        </div>
      )}
    </div>
  );
};

export default AdminLogo;