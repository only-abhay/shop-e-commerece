import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import DynamicSkeleton from './DynamicSkeletan';
import { AddtoCart } from '../context/Context';


export default function Dynamic() {
  const {id} = useParams();
  const {getProducts}= useContext(AddtoCart)


  const [value, setValue] = useState({})
  const [loading, setLoading] = useState(false)

  function getProduct() {
    setLoading(true)
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setValue(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getProduct()
  }, [id])

  // ✅ Loading UI
  if (loading) {
  <  DynamicSkeleton/>
  }

  return (
    <div className="max-w-300 mx-auto p-4">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Image */}
        <div>
          <img
            src={value.thumbnail}
            alt={value.title}
            className="w-full h-100 object-cover rounded-xl shadow"
          />

          {/* Extra Images */}
          <div className="flex gap-2 mt-3">
            {value?.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-20 h-20 object-cover rounded border"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{value.title}</h1>

          <p className="text-gray-500 mt-2">{value.brand}</p>

          <p className="mt-4 text-lg">{value.description}</p>

          {/* Price */}
          <div className="mt-4">
            <span className="text-2xl font-bold text-green-600">
              ${value.price}
            </span>
            <span className="ml-3 text-sm text-red-500">
              -{value.discountPercentage}%
            </span>
          </div>

          {/* Stock */}
          <p className="mt-2 text-sm">
            Stock: {value.stock} ({value.availabilityStatus})
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button onClick={()=>{
        getProducts({
          id:value.id,
          title: value.title,
          thumbnail:value.thumbnail,
          price: value.price,
          qty:1,
        })
      }} className="bg-green-500 text-white px-6 py-2 cursor-pointer active:scale-95 rounded-lg">
              Add to Cart
            </button>
            <button className="bg-black cursor-pointer active:scale-95 text-white px-6 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>

        {value?.reviews?.map((r, i) => (
          <div key={i} className="border p-3 rounded-lg mb-3">
            <p className="font-semibold">{r.reviewerName}</p>
            <p className="text-yellow-500">⭐ {r.rating}</p>
            <p className="text-gray-600">{r.comment}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
