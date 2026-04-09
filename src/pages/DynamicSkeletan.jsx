import React from 'react'

export default function DynamicSkeleton() {
  return (
    <div className="max-w-300 mx-auto p-4 animate-pulse">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Image Skeleton */}
        <div>
          <div className="w-full h-100 bg-gray-300 rounded-xl"></div>

          {/* Extra Images */}
          <div className="flex gap-2 mt-3">
            {Array(4).fill().map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-gray-300 rounded"
              ></div>
            ))}
          </div>
        </div>

        {/* Product Info Skeleton */}
        <div>
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>

          <div className="h-4 bg-gray-300 rounded w-1/2 mt-3"></div>

          <div className="h-4 bg-gray-300 rounded w-full mt-4"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>

          {/* Price */}
          <div className="flex gap-3 mt-4">
            <div className="h-6 w-24 bg-gray-300 rounded"></div>
            <div className="h-6 w-16 bg-gray-300 rounded"></div>
          </div>

          {/* Stock */}
          <div className="h-4 w-40 bg-gray-300 rounded mt-3"></div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
            <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Reviews Skeleton */}
      <div className="mt-10">
        <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>

        {Array(3).fill().map((_, i) => (
          <div key={i} className="border p-3 rounded-lg mb-3">
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded mt-2"></div>
            <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
          </div>
        ))}
      </div>

    </div>
  )
}