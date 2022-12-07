import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="flex mx-auto items-center justify-around bg-red-700 text-white h-12">
        <div>
          <h1 className="font-bold text-2xl">
            React<span className="text-cyan-500">Practice</span>
          </h1>
        </div>
        <div className="flex">
          <ul className="flex items-center justify-between">
            <li className="ml-4">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-4">
              <Link to="/about">About</Link>
            </li>
            <li className="ml-4">
              <Link to="/products">Products</Link>
            </li>
            <li className="ml-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="ml-4">
              <Link to="/user">User</Link>
            </li>
          </ul>
          <button className="rounded-full bg-cyan-600 px-3 py-1 text-white ml-16"><Link to='/login'>UserLogin</Link></button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
