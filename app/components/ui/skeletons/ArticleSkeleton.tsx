import React from 'react'

const ArticleSkeleton = () => {
  return (
    <div className="bg-light p-8 rounded-xl grid grid-cols-1 gap-4 animate-pulse">
      <div className="flex justify-end items-start relative">
        <div className="h-[180px] lg:h-[300px] w-full bg-gray-300 rounded-xl"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      <div className="space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-[40px] w-[40px] bg-gray-300 rounded-full"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  )
}

export default ArticleSkeleton