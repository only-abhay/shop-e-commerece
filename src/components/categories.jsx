import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Categories({category}) {
    const {slug}=useParams()
  return (
    <div className="max-w-7xl mx-auto p-4">
  <div className="flex flex-col md:flex-row gap-4">
    
    {/* Sidebar */}
    <div className="bg-white shadow-lg rounded-2xl p-4 w-full ">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full">

        {/* All Products */}
        <Link to="/">
          <li
            className={`px-4 py-2 rounded-lg cursor-pointer transition duration-200 
            hover:font-bold flex items-center 
            ${!slug ? "bg-[#ff7b00] font-bold text-white" : ""}`}
          >
            All Products
          </li>
        </Link>

        {/* Categories */}
        {category.map((cat, index) => (
          <Link key={index} to={`/${cat.slug}`}>
            <li
              className={`px-4 py-2 rounded-lg cursor-pointer transition duration-200 
              hover:font-bold flex items-center
              ${slug === cat.slug ? "bg-[#ff7b00] font-bold text-white" : ""}`}
            >
              {cat.name}
            </li>
          </Link>
        ))}
        
      </ul>
    </div>

  </div>
</div>
  )
}
