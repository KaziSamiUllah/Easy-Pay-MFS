import { Link } from "react-router-dom";

const UserHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Welcome to EasyPAY</h1>
        <div className="grid grid-cols-3 text-center sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link to="/sendMoney">
            <div className="bg-white h-28 lg:h-48 flex justify-center items-center text-gray-800 text-lg font-semibold lg:font-bold lg:text-2xl rounded-2xl shadow-md hover:bg-secondary hover:scale-105 transform transition duration-300">
              <h1>Send Money</h1>
            </div>
          </Link>
          <Link to="/recharge">
            <div className="bg-white h-28 lg:h-48 flex justify-center items-center text-gray-800 text-lg font-semibold lg:font-bold lg:text-2xl rounded-2xl shadow-md hover:bg-secondary hover:scale-105 transform transition duration-300">
              <h1>Mobile Recharge</h1>
            </div>
          </Link>
          <Link to="/cashOut">
            <div className="bg-white h-28 lg:h-48 flex justify-center items-center text-gray-800 text-lg font-semibold lg:font-bold lg:text-2xl rounded-2xl shadow-md hover:bg-secondary hover:scale-105 transform transition duration-300">
              <h1>Cash-Out</h1>
            </div>
          </Link>
          <Link to="/cashIn">
            <div className="bg-white h-28 lg:h-48 flex justify-center items-center text-gray-800 text-lg font-semibold lg:font-bold lg:text-2xl rounded-2xl shadow-md hover:bg-secondary hover:scale-105 transform transition duration-300">
              <h1>Cash-In</h1>
            </div>
          </Link>
          <Link to="/checkBalance">
            <div className="bg-white h-28 lg:h-48 flex justify-center items-center text-gray-800 text-lg font-semibold lg:font-bold lg:text-2xl rounded-2xl shadow-md hover:bg-secondary hover:scale-105 transform transition duration-300">
              <h1>Check Balance</h1>
            </div>
          </Link>
        
          <Link to="/userTransactions">
            <div className="bg-white h-28 lg:h-48 flex justify-center items-center text-gray-800 text-lg font-semibold lg:font-bold lg:text-2xl rounded-2xl shadow-md hover:bg-secondary hover:scale-105 transform transition duration-300">
              <h1>Transaction History</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
