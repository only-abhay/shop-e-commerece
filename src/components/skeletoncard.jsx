import React from 'react'

export default function SkeletonCard() {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl animate-pulse">
      
      {/* Image Skeleton */}
      <div className="h-40 w-full bg-gray-300 rounded-lg"></div>

      {/* Title Skeleton */}
      <div className="h-4 bg-gray-300 rounded mt-3 w-3/4"></div>

      {/* Price Skeleton */}
      <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>

      {/* Button Skeleton */}
      <div className="h-8 bg-gray-300 rounded mt-3 w-full"></div>

    </div>
  )
}
