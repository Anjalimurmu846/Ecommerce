import React from "react";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({name,search, setSearch}) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">

      
        <Link to="/" className="flex title-font font-medium items-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
          </svg>
          <span className="ml-3 text-xl">{name}</span>
        </Link>

        
        <nav className="hidden md:flex gap-5 text-gray-700">
          <Link to="/Men" className="hover:text-pink-500">Men</Link>
          <Link to="/Women" className="hover:text-pink-500">Women</Link>
          <Link to="/Kids" className="hover:text-pink-500">Kids</Link>
          <Link to="/Homes" className="hover:text-pink-500">Home</Link>
        </nav>

      
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="bg-transparent outline-none w-full text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-6 text-gray-700 text-sm">

          <Link to="/Profile" className="flex flex-col items-center hover:text-pink-500">
            <FaUser />
            <span>Profile</span>
          </Link>

          <Link to="/Wishlist" className="flex flex-col items-center hover:text-pink-500">
            <FaHeart />
            <span>Wishlist</span>
          </Link>

          <Link to="/Bag" className="flex flex-col items-center hover:text-pink-500">
            <FaShoppingBag />
            <span>Bag</span>
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Navbar;