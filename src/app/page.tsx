import { getRestaurants } from "@/lib/data";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

async function RestaurantGrid() {
  const allRestaurants = await getRestaurants();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {allRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

function RestaurantGridSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-[200px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary animate-fade-in-down">
          Find Your Next Craving
        </h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in-up">
          From local favorites to exotic cuisines, Indian Food Hub brings the
          best food right to your doorstep.
        </p>
        <div className="mt-8 max-w-lg mx-auto relative">
          <Input
            placeholder="Search for restaurants or dishes..."
            className="h-14 pl-12 text-md border-2 focus:border-primary focus:ring-primary/20"
            aria-label="Search for restaurants or dishes"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold font-headline mb-8">
          Popular Near You
        </h2>
        <Suspense fallback={<RestaurantGridSkeleton />}>
            <RestaurantGrid />
        </Suspense>
      </section>
    </div>
  );
}
