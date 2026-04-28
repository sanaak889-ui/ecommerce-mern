import ProductListing from "../components/Admin/ProductListing";
import OrderListing from "../components/Admin/OrderListing";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-3xl font-bold text-[#ff5252]">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Products Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-semibold text-[#ff5252]">
            Products
          </h2>
          <ProductListing />
        </div>

        {/* Orders Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-semibold text-[#ff5252]">
            Orders
          </h2>
          <OrderListing />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;