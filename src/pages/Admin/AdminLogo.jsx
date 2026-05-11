import React, { useState, useEffect } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";

const AdminLogo = () => {
  const [logo, setLogo] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH LOGO ================= */
  const fetchLogo = async () => {
    try {
      const { data } = await api.get("/logo");
      setLogo(data || null);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch logo");
    }
  };

  useEffect(() => {
    fetchLogo();
  }, []);

  /* ================= DELETE LOGO ================= */
  const handleDelete = async () => {
    if (!logo?._id) return;

    try {
      await api.delete(`/logo/${logo._id}`);
      setLogo(null);
      setFile(null);
      toast.success("Logo deleted!");
    } catch (err) {
      console.log(err);
      toast.error("Delete failed");
    }
  };

  /* ================= UPLOAD / UPDATE ================= */
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Select an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", file);

      let res;

      if (logo?._id) {
        // UPDATE
        res = await api.put(`/logo/${logo._id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        toast.success("Logo updated!");
      } else {
        // CREATE
        res = await api.post("/logo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        toast.success("Logo uploaded!");
      }

      setLogo(res.data);
      setFile(null);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Logo</h2>

      {/* UPLOAD FORM */}
      <form onSubmit={handleUpload} className="mb-6 flex gap-2">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="rounded bg-[#ff5252] px-4 text-white"
          disabled={loading}
        >
          {loading ? "Uploading..." : logo ? "Update Logo" : "Upload Logo"}
        </button>
      </form>

      {/* PREVIEW */}
      {logo?.image && (
        <div className="flex flex-col items-center gap-3 rounded bg-white p-4 shadow">
          <img
            src={logo.image}
            alt="Logo"
            className="h-16 object-contain"
          />

          <button
            onClick={handleDelete}
            className="rounded bg-red-500 px-4 py-1 text-white"
          >
            Delete Logo
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminLogo;