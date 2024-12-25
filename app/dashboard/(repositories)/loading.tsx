export default function Loading() {
  return (
    <div className="h-screen">
      <div className="lg:mx-6 mt-16 lg:my-6 lg:border md:rounded-lg lg:h-[calc(100vh-3rem)]">
        <div className="px-4 md:px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse mb-2" />

              <div className="h-4 w-36 bg-gray-200 rounded-md animate-pulse" />
            </div>

            <div className="flex items-center gap-3">
              {/* Refresh button skeleton */}
              <div
                className="h-12 w-32 bg-gray-200 rounded-lg animateplu
              "
              />

              {/* Add button skeleton */}
              <div
                className="h-12 w-40 bg-gray-200 rounded-lg animateplu
              "
              />
            </div>
          </div>

          {/* Search box skeleton */}
          <div className="mt-6">
            <div className="h-8 w-full md:w-[366px] bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Repository list skeleton */}
        <div>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="py-4 px-4 md:px-6 border-t border-b">
              <div className="flex items-center justify-start gap-2">
                {/* repository name skeleton */}
                <div className="h-5 w-48 bg-gray-200 rounded-md animate-pulse" />

                {/* repository visibility skeleton */}
                <div className="h-5 w-14 border rounded-full bg-gray-200 animate-pulse" />
              </div>

              {/* language, size, & last updated skeleton */}
              <div className="flex items-center justify-start gap-6 mt-2">
                {/* programming language */}
                <div className="flex items-center gap-2">
                  <div className="h-4 w-20 rounded-md bg-gray-200 animate-pulse" />
                  <div className="h-3 w-3 rounded-full bg-gray-200 animate-pulse" />
                </div>

                {/* repository size */}
                <div className="h-4 w-20 rounded-md bg-gray-200 animate-pulse" />

                {/* last updated */}
                <div className="h-4 w-36 rounded-md bg-gray-200 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
