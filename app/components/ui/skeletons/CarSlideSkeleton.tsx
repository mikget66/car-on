const CarSlideSkeleton = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <div className="animate-pulse">
          <div className="card bg-background rounded-2xl overflow-hidden">
            <div className="h-80 bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
              <div className="absolute top-5 right-5 h-8 w-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
              <div className="absolute top-5 left-0 h-6 w-24 bg-gray-200 dark:bg-gray-600 ml-2"></div>
              <svg
                className="w-12 h-12 text-gray-200 dark:text-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="p-4 space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-1/3"></div>
              <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-2/3"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
            </div>
          </div>
        </div>
        <div className="animate-pulse hidden xl:block">
          <div className="card bg-background rounded-2xl overflow-hidden ">
            <div className="h-80 bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
              <div className="absolute top-5 right-5 h-8 w-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
              <div className="absolute top-5 left-0 h-6 w-24 bg-gray-200 dark:bg-gray-600 ml-2"></div>
              <svg
                className="w-12 h-12 text-gray-200 dark:text-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="p-4 space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-1/3"></div>
              <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-2/3"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
            </div>
          </div>
        </div>{" "}
        <div className="animate-pulse hidden md:block">
          <div className="card bg-background rounded-2xl overflow-hidden">
            <div className="h-80 bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
              <div className="absolute top-5 right-5 h-8 w-8 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
              <div className="absolute top-5 left-0 h-6 w-24 bg-gray-200 dark:bg-gray-600 ml-2"></div>
              <svg
                className="w-12 h-12 text-gray-200 dark:text-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="p-4 space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-1/3"></div>
              <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-2/3"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSlideSkeleton;
