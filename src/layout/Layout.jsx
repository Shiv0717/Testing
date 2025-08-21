import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
