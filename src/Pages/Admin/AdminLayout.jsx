import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const adminInfo = localStorage.getItem("adminToken"); // use the token saved on login
    if (!adminInfo) {
      navigate("/admin/login"); // redirect to admin login if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    // Remove admin token
    localStorage.removeItem("adminToken");
    // Redirect to login page
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Header with welcome + logout */}
        <div className="mb-6 flex items-center justify-between rounded-lg bg-white p-6 shadow">
          <div>
            <h1 className="text-2xl font-bold text-[#ff5252]">Welcome Admin</h1>
            <p className="mt-1 text-gray-600">Here is your dashboard overview</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Child pages */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
