import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#F6F5FF] py-10 px-5 md:px-20 lg:px-28 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
    
        <div className="flex flex-col">
          <h2 className="text-[24px] font-[Josefin Sans] font-bold text-[#151875]">
            Hekto
          </h2>
          <div className="flex mt-5">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="border border-[#C2C5E1] rounded-l-lg px-4 py-2 text-sm w-full"
            />
            <button className="bg-[#FB2E86] text-white rounded-r-lg px-6 py-2 text-sm">
              Sign Up
            </button>
          </div>
          <p className="text-[#8A8FB9] text-sm mt-5">
            Contact Info<br />17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        
        <div>
          <h3 className="text-[18px] font-bold text-[#151875]">Categories</h3>
          <ul className="text-[#8A8FB9] mt-3 space-y-2">
            <li className="hover:text-[#FB2E86]">Laptops & Computers</li>
            <li className="hover:text-[#FB2E86]">Cameras & Photography</li>
            <li className="hover:text-[#FB2E86]">Smart Phones & Tablets</li>
            <li className="hover:text-[#FB2E86]">Video Games & Consoles</li>
            <li className="hover:text-[#FB2E86]">Waterproof Headphones</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-[18px] font-bold text-[#151875]">Customer Care</h3>
          <ul className="text-[#8A8FB9] mt-3 space-y-2">
            <li className="hover:text-[#FB2E86]">My Account</li>
            <li className="hover:text-[#FB2E86]">Discount</li>
            <li className="hover:text-[#FB2E86]">Returns</li>
            <li className="hover:text-[#FB2E86]">Orders History</li>
            <li className="hover:text-[#FB2E86]">Order Tracking</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-[18px] font-bold text-[#151875]">Pages</h3>
          <ul className="text-[#8A8FB9] mt-3 space-y-2">
            <li className="hover:text-[#FB2E86]">Blog</li>
            <li className="hover:text-[#FB2E86]">Browse the Shop</li>
            <li className="hover:text-[#FB2E86]">Category</li>
            <li className="hover:text-[#FB2E86]">Pre-Built Pages</li>
            <li className="hover:text-[#FB2E86]">Visual Composer Elements</li>
            <li className="hover:text-[#FB2E86]">WooCommerce Pages</li>
          </ul>
        </div>
      </div>

    </footer>
  );
};