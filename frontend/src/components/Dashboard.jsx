import React from "react";
import axios from "axios";

const Dashboard = ({ user, onLogout }) => {
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4000/api/logout");
      onLogout();
    } catch (error) {
      console.error("Logout failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-10 shadow-xl w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🎉 Welcome to Dashboard</h1>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl mb-6">
          <p className="text-xl text-gray-800 mb-2 font-semibold">Hello, {user?.name}! 👋</p>
          <p className="text-gray-600">📧 {user?.email}</p>
          <p className="text-gray-500 text-sm mt-2">ID: {user?.id || user?._id}</p>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;