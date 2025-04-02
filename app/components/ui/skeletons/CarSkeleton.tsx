import React from 'react'

const CarSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-light rounded-lg overflow-hidden shadow-lg animate-pulse">
    <div className="sm:w-[350px] h-[200px] md:h-[280px] bg-gray-300 dark:bg-gray-700 flex justify-center items-center">
    <svg
            className="w-12 h-12 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
    </div>
    <div className="p-5 flex flex-col gap-4 flex-1">
      <div className="w-1/3 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div className="w-1/3 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
  </div>
  )
}

export default CarSkeleton
