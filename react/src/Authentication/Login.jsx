import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = { email };
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/profile"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 to-white">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-87.5">

        <h2 className="text-xl font-semibold text-center text-gray-700">
          Welcome to StyleKart!
        </h2>

        <p className="text-sm text-gray-400 text-center mb-6">
          Your ultimate shopping destination
        </p>

       
        <form onSubmit={handleLogin}>

        
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 mb-4 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

       
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 mb-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        
          <p className="text-right text-xs text-gray-400 mb-4 cursor-pointer hover:text-pink-500">
            Forgot Password?
          </p>

      
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-full shadow-md hover:bg-pink-600 transition"
          >
            Continue
          </button>

        </form>

    
        <p className="text-center text-gray-400 text-sm my-4">
          or sign up with
        </p>

   
        <div className="flex justify-center gap-4 mb-4">

          <button className="p-3 border rounded-lg hover:bg-gray-100">
            <FaGoogle />
          </button>

          <button className="p-3 border rounded-lg hover:bg-gray-100">
            <FaApple />
          </button>

          <button className="p-3 border rounded-lg hover:bg-gray-100">
            <FaFacebook />
          </button>

        </div>

    
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link to="/register" className="text-pink-500 font-medium">
            Signup
          </Link>
        </p>

        {/* TERMS */}
        <p className="text-[10px] text-gray-400 text-center mt-4">
          By continuing you agree to StyleKart's{" "}
          <span className="text-pink-500">Terms</span> &{" "}
          <span className="text-pink-500">Privacy Policy</span>
        </p>

      </div>
    </div>
  );
}

export default Login;