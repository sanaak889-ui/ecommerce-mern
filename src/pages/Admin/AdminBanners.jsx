import React, { useState, useEffect } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";

const AdminBanner = () => {
  const [banners, setBanners] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  // FETCH EXISTING BANNERS
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await api.get("/home-content");
      setBanners(res.data?.adsBanner || []);
    } catch (err) {
      toast.error("Failed to load banners");
    }
  };

  // MULTIPLE UPLOAD FUNCTION
  const uploadImage = async () => {
    if (!files.length) {
      toast.error("Please select images first");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("images", file); // 🔥 IMPORTANT: "images"
      });

      const res = await api.post("/upload", formData);

      const urls = res.data?.urls;

      if (!urls || urls.length === 0) {
        toast.error("Upload failed");
        return;
      }

      const updated = [...banners, ...urls];

      await api.put("/home-content", {
        adsBanner: updated,
      });

      setBanners(updated);
      setFiles([]);

      // reset input
      const input = document.querySelector('input[type="file"]');
      if (input) input.value = "";

      toast.success("Banners uploaded!");
    } catch (err) {
      console.log("UPLOAD ERROR:", err?.response?.data || err);
      toast.error(err?.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // DELETE BANNER
  const deleteBanner = async (index) => {
    try {
      const updated = banners.filter((_, i) => i !== index);

      await api.put("/home-content", {
        adsBanner: updated,
      });

      setBanners(updated);
      toast.success("Banner deleted");
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-[#ff5252]">
        Upload Banners (Multiple Allowed)
      </h2>

      {/* UPLOAD SECTION */}
      <div className="mt-4 flex items-center gap-3">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files))}
        />

        <button
          onClick={uploadImage}
          disabled={loading}
          className="bg-[#ff5252] px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* PREVIEW SELECTED FILES */}
      {files.length > 0 && (
        <p className="mt-2 text-sm text-gray-500">
          {files.length} file(s) selected
        </p>
      )}

      {/* BANNERS GRID */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {banners.length > 0 ? (
          banners.map((img, i) => (
            <div key={i} className="relative">
              <img
                src={img}
                alt="banner"
                className="h-40 w-full rounded object-cover"
              />

              <button
                onClick={() => deleteBanner(i)}
                className="absolute right-2 top-2 rounded bg-red-500 px-2 text-white"
              >
                X
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No banners found</p>
        )}
      </div>
    </div>
  );
};

export default AdminBanner;