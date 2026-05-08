import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Top Fashion Trends 2026",
      short: "Discover the latest fashion trends that are taking over this year.",
      full: "In 2026, bold colors, oversized jackets, and sustainable fabrics are dominating the fashion scene. Learn how to style them and stay trendy all year round.",
      img: "/TT.jpg",
    },
    {
      id: 2,
      title: "Best Beauty Products",
      short: "Check out the must-have beauty products for glowing skin.",
      full: "From serums to sunscreens, these beauty products will give your skin a radiant glow. Discover top brands, tips for application, and why they work best.",
      img: "/BB.jpg",
    },
    {
      id: 3,
      title: "Summer Outfit Ideas",
      short: "Easy and stylish outfit ideas for summer season.",
      full: "Keep cool and stylish with summer-friendly fabrics and bright colors. Mix and match tops, shorts, and accessories to create effortless summer looks.",
      img: "/SS.jpg",
    },
    {
      id: 4,
      title: "Shopping Tips & Tricks",
      short: "Smart shopping tips to save money and buy better.",
      full: "Learn how to identify quality products, find hidden discounts, and plan your shopping trips for maximum savings while still enjoying your favorite brands.",
      img: "/SP.jpg",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="mb-8 text-2xl font-bold">From The Blog</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <img
                src={blog.img}
                className="h-[200px] w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">{blog.title}</h3>

                <AnimatePresence>
                  <motion.p
                    key={expanded === blog.id ? "full" : "short"}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4 overflow-hidden text-sm text-gray-600"
                  >
                    {expanded === blog.id ? blog.full : blog.short}
                  </motion.p>
                </AnimatePresence>

                <button
                  onClick={() =>
                    setExpanded(expanded === blog.id ? null : blog.id)
                  }
                  className="font-semibold text-[#ff5252] transition-all duration-300 hover:underline"
                >
                  {expanded === blog.id ? "Show Less ↑" : "Read More →"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
