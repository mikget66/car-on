import { Suspense } from 'react';
import Filters from "@/app/components/ui/cars/Filters";
import ConditionFilter from "@/app/components/ui/cars/ConditionFilter";
import CarListWithSkeleton from "@/app/components/ui/cars/CarListWithSkeleton";
import CarListingHeader from "@/app/components/ui/cars/CarListingHeader";

// Define the page component with correct searchParams type
export default async function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  // Build the query string from searchParams
  const query = new URLSearchParams();

  // Process searchParams into query
  Object.entries(searchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => query.append(key, v));
    } else if (value) {
      query.append(key, value);
    }
  });

  return (
    <div className="Container">
      <Suspense fallback={<h2 className='font-caveatRegular text-brandColor my-3 text-4xl'>Loading cars...</h2>}>
        <CarListingHeader />
      </Suspense>

      <ConditionFilter />
      <div className="grid md:grid-cols-[25%_75%] py-3">
        <div>
          <Filters />
        </div>
        <CarListWithSkeleton query={query.toString()} />
      </div>
    </div>
  );
}