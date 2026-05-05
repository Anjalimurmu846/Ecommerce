import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="text-center mt-10">
        <h2>Please login first</h2>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 bg-pink-500 text-white px-4 py-2 rounded"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl">Welcome</h2>
      <p className="mt-2">{user.email}</p>

      <button
        onClick={handleLogout}
        className="mt-5 bg-pink-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;