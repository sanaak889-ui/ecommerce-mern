import React from "react";
import { NavLink } from "react-router-dom";
import { FaBox, FaUsers, FaShoppingCart, FaTags, FaImage, FaFlag } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const AdminSidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <MdDashboard /> },
    { name: "Orders", path: "/admin/orders", icon: <FaShoppingCart /> },
    { name: "Products", path: "/admin/products", icon: <FaBox /> },
    { name: "Users", path: "/admin/users", icon: <FaUsers /> },
    { name: "Slideshow", path: "/admin/slideshow", icon: <FaTags /> },
    { name: "Banner", path: "/admin/banner", icon: <FaImage /> },
    { name: "Logo", path: "/admin/logo", icon: <FaFlag /> },
  ];

  return (
    <div className="min-h-screen w-64 bg-white shadow-md">
      {/* Logo / Brand */}
      <div className="flex items-center justify-center border-b p-6">
        <h2 className="text-xl font-bold text-[#ff5252]">Admin Panel</h2>
      </div>

      {/* Sidebar Menu */}
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#ff5252] text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
