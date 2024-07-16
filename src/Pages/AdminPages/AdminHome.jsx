import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Welcome to EasyPAY
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
          <Link to="/userManagement">
            <div className="bg-white h-20 lg:h-48 flex justify-center items-center text-gray-800 font-bold text-2xl rounded-2xl shadow-md hover:bg-secondary hover:scale-105 transform transition duration-300">
              <h1>User Management</h1>
            </div>
          </Link>
          <Link to="/systemMonitoring">
            <div className="bg-white h-20 lg:h-48 flex justify-center items-center text-gray-800 font-bold text-2xl rounded-2xl shadow-md hover:bg-secondary hover:scale-105 transform transition duration-300">
              <h1>System Monitoring</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
