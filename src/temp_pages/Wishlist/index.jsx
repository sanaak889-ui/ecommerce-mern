import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import { FaTrashAlt } from "react-icons/fa";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        Your wishlist is empty
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-2xl font-bold">My Wishlist</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((item) => (
          <div
            key={item._id}
            className="group relative rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-lg"
          >
            <button
              onClick={() => removeFromWishlist(item._id)}
              className="absolute right-3 top-3 text-gray-400 transition hover:text-red-600"
            >
              <FaTrashAlt />
            </button>

            {/* Main Image */}
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-44 w-full object-contain"
            />

            {/* Thumbnails */}
            {item.images.length > 1 && (
              <div className="mt-2 flex gap-2">
                {item.images.slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="h-10 w-10 rounded border object-contain"
                  />
                ))}
              </div>
            )}

            <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
            <p className="mt-1 font-bold text-red-600">${item.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={clearWishlist}
          className="rounded bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          Clear Wishlist
        </button>
      </div>
    </div>
  );
};

export default Wishlist;