import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import { FiMenu } from "react-icons/fi";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed z-50 h-full bg-white shadow-lg transition-transform duration-300
          md:static md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <AdminSidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* MAIN AREA */}
      <div className="flex flex-1 flex-col">

        {/* HEADER */}
        <div className="flex items-center justify-between bg-white p-4 shadow md:p-6">

          {/* MOBILE MENU BUTTON */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu />
          </button>

          <div>
            <h1 className="text-lg font-bold text-[#ff5252] md:text-2xl">
              Admin Dashboard
            </h1>
            <p className="hidden text-gray-600 md:block">
              Manage products, orders & users
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600 md:px-4"
          >
            Logout
          </button>
        </div>

        {/* CONTENT */}
        <main className="flex-1 overflow-x-auto p-3 md:p-6">
          <Outlet />
        </main>
       
      </div>
    </div>
  );
};

export default AdminLayout;