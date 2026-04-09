
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mt-10">
      <div className="grid md:grid-cols-2 items-center gap-10 mt-10">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover the Latest <span className="text-orange-500">Trendy Products</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Upgrade your lifestyle with our premium collection. 
            Best quality products at unbeatable prices.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition">
              Shop Now
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              See Details
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
            alt="shopping"
            className="w-full h-100 object-cover rounded-2xl shadow-lg"
          />

          {/* Small floating card */}
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
            <FaShoppingCart className="text-orange-500 text-xl" />
            <div>
              <p className="font-semibold">50% OFF</p>
              <p className="text-sm text-gray-500">Limited Time</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}