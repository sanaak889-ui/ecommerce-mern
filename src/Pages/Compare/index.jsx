import React from "react";
import { useCompare } from "../../context/CompareContext";
import { FaTrashAlt } from "react-icons/fa";

const Compare = () => {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();

  if (compareItems.length === 0) {
    return <div className="p-10 text-center">No products to compare</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-2xl font-bold">Compare Products</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {compareItems.map((item) => (
          <div
            key={item._id}
            className="relative rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-lg"
          >
            <button
              onClick={() => removeFromCompare(item._id)}
              className="absolute right-3 top-3 text-gray-400 hover:text-red-600"
            >
              <FaTrashAlt />
            </button>

            <img
              src={item.images[0]}
              alt={item.title}
              className="h-40 w-full object-contain"
            />

            <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
            <p className="mt-1 font-bold text-red-600">${item.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={clearCompare}
          className="rounded bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Clear Compare
        </button>
      </div>
    </div>
  );
};

export default Compare;