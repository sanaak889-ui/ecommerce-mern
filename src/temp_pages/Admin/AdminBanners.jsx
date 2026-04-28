import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";

const AdminBanners = () => {
  const [banners, setBanners] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("banner"); // banner, slide, logo
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBanners = async () => {
    try {
      const { data } = await api.get("/banners");
      setBanners(data);
    } catch (err) {
      toast.error(err.response?.data.message || "Failed to fetch banners");
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return toast.error("Select an image");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("image", image);

    setLoading(true);
    try {
      await api.post("/banners", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Banner uploaded!");
      setTitle("");
      setType("banner");
      setImage(null);
      fetchBanners();
    } catch (err) {
      toast.error(err.response?.data.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Banners / Slides</h2>

      <form onSubmit={handleUpload} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="banner">Banner</option>
          <option value="slide">Slide</option>
        </select>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="rounded bg-[#ff5252] px-4 text-white"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      <div className="grid grid-cols-3 gap-4">
        {banners.map((b) => (
          <div key={b._id} className="rounded bg-white p-2 shadow">
            <img src={b.image} alt={b.title} className="mb-2 h-32 w-full rounded object-cover" />
            <p className="text-sm font-semibold">{b.title}</p>
            <p className="text-xs text-gray-500">{b.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBanners;
