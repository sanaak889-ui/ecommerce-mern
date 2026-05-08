import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";

const Slideshow = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH SLIDES ================= */

  const fetchSlides = async () => {
    try {
      const { data } = await api.get("/slideshow");
      setSlides(data);
    } catch (err) {
      toast.error("Failed to fetch slides");
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  /* ================= UPLOAD SLIDES ================= */

  const uploadSlides = async (e) => {
    try {
      setLoading(true);

      const files = Array.from(e.target.files);
      if (files.length === 0) return;

      const fd = new FormData();

      files.forEach((file) => {
        fd.append("image", file); // MUST MATCH BACKEND
      });

      const uploadRes = await api.post("/upload", fd);

      const imageUrls = uploadRes.data.urls;

      await api.post("/slideshow", {
        images: imageUrls,
      });

      toast.success("Slides uploaded!");
      fetchSlides();

    } catch (err) {
      console.log(err);
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE ================= */

  const deleteSlide = async (id) => {
    try {
      await api.delete(`/slideshow/${id}`);

      toast.success("Slide deleted");
      fetchSlides();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Slideshow</h2>

      {/* UPLOAD */}
      <div className="mb-4 flex gap-2">
        <input
          type="file"
          multiple
          onChange={uploadSlides}
          className="flex-1 rounded border p-2"
        />

        <button
          className="rounded bg-[#ff5252] px-4 text-white"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* SLIDES */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {slides.map((slide) => (
          <div
            key={slide._id}
            className="rounded bg-white p-2 shadow"
          >
            <img
              src={
                slide.images && slide.images.length > 0
                  ? slide.images[0]
                  : "/shop.png"
              }
              alt="slide"
              className="h-40 w-full rounded object-cover"
            />

            <button
              onClick={() => deleteSlide(slide._id)}
              className="mt-2 w-full rounded bg-red-500 py-1 text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;