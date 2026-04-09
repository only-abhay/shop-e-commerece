import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Categories({category}) {
    const {slug}=useParams()
  return (
      <div className="max-w-7xl mx-auto p-4">
      <div className="flex">
        {/* Sidebar */}
         <div className=" bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>

          <ul className="space-y-2 grid grid-cols-8">
            <Link to="/"><li
              
                className={`px-4 py-2 rounded-lg cursor-pointertransition hover:font-bold duration-200 flex start active:bg-[#ff7b00] font-bold items-center`}
              >
               All Products
              </li></Link>
            {category.map((cat, index) => (
             <Link   key={index} to={`/${cat.slug}`}>
              <li         
                className={`px-4 py-2 rounded-lg cursor-pointertransition hover:font-bold  flex start items-center ${slug==cat.slug? "bg-[#ff7b00] font-bold":""}`}
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
