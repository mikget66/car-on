import { Suspense } from 'react';
import Filters from "@/app/components/ui/cars/Filters";
import ConditionFilter from "@/app/components/ui/cars/ConditionFilter";
import CarListWithSkeleton from "@/app/components/ui/cars/CarListWithSkeleton";
import CarListingHeader from "@/app/components/ui/cars/CarListingHeader";

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;

  const query = new URLSearchParams();
  Object.entries(params || {}).forEach(([key, value]) => {
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