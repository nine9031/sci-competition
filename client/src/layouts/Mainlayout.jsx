import React from "react";
import { Link } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white">
        <div className="navbar container mx-auto px-6 py-4">
          <div className="flex-1">
            <Link to="/" className="text-2xl font-bold text-primary">
              MyApp
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/" className="btn btn-ghost btn-sm rounded-lg">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 pt-32 container mx-auto px-6">
        <div className="card bg-base-100 shadow-xl p-8 rounded-xl">
          <h1 className="text-4xl font-extrabold text-primary mb-4">
            🏠 MainLayout Page
          </h1>
          <p className="text-lg text-base-content">
            นี่คือหน้าหลักที่แสดง MainLayout อย่างเดียว ตกแต่งด้วย TailwindCSS
            และ DaisyUI
          </p>
          <div className="mt-6">
            <Link to="/" className="btn btn-primary">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
