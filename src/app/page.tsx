
"use client";

import { useState } from "react";
import { getRestaurants, getPopularDishes } from "@/lib/data";
import { DishCard } from "@/components/DishCard";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight, Utensils, Bike, Leaf, ShieldCheck, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge";
import type { Restaurant, MenuItem } from "@/lib/types";

const cuisineCategories = [
  { name: "South Indian", icon: "https://img.freepik.com/premium-photo/indian-cuisine-meals-served-banana-leaf-traditional-south-indian-cuisine_875825-50086.jpg?w=2000", emoji: "🥞" },
  { name: "North Indian", icon: "https://sukhis.com/app/uploads/2022/05/image2-3.jpg", emoji: "🍲" },
  { name: "Biryani", icon: "https://picsum.photos/seed/cat3/100", emoji: "🍗" },
  { name: "Street Food", icon: "https://picsum.photos/seed/cat4/100", emoji: "🌶️" },
  { name: "Snacks", icon: "https://picsum.photos/seed/cat5/100", emoji: "🍔" },
  { name: "Desserts", icon: "https://picsum.photos/seed/cat7/100", emoji: "🍰" },
];

const features = [
    { icon: Bike, title: "Fast Delivery", description: "Get your food delivered in minutes." },
    { icon: Leaf, title: "Fresh & Hygienic Food", description: "Prepared with the freshest ingredients." },
    { icon: Utensils, title: "Wide Variety", description: "Hundreds of dishes to choose from." },
    { icon: ShieldCheck, title: "Secure Payments", description: "Safe and easy online payments." },
];


function TopRestaurants() {
    const [restaurants, setRestaurants] = useState<Omit<Restaurant, 'menu'>[]>([]);

    useState(() => {
        async function fetchRestaurants() {
            const allRestaurants = await getRestaurants();
            setRestaurants(allRestaurants);
        }
        fetchRestaurants();
    });

  if (!restaurants.length) return null; // Or a loading skeleton

  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent>
        {restaurants.map((restaurant) => (
          <CarouselItem key={restaurant.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <RestaurantCard restaurant={restaurant} />
              </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
    </Carousel>
  );
}


export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [popularDishes, setPopularDishes] = useState<MenuItem[]>([]);

    useState(() => {
        async function fetchDishes() {
            const dishes = await getPopularDishes();
            setPopularDishes(dishes);
        }
        fetchDishes();
    });

    const handleCategorySelect = (categoryName: string) => {
        setSelectedCategory(categoryName);
    };

    const clearCategorySelection = () => {
        setSelectedCategory(null);
    };

    const getFilteredDishes = () => {
        if (!selectedCategory) {
            return popularDishes;
        }
        // This is a mock filter. In a real app, you'd fetch this data.
        // For now, it just filters the popular dishes based on some keywords.
        const lowerCaseCategory = selectedCategory.toLowerCase();
        
        // A more robust filtering logic
        if(lowerCaseCategory.includes('south indian')) return popularDishes.filter(d => d.id.startsWith('si-'));
        if(lowerCaseCategory.includes('north indian')) return popularDishes.filter(d => d.id.startsWith('ni-'));
        if(lowerCaseCategory.includes('biryani')) return popularDishes.filter(d => d.id.startsWith('b-'));
        if(lowerCaseCategory.includes('street food')) return popularDishes.filter(d => d.id.startsWith('sf-'));
        if(lowerCaseCategory.includes('snacks')) return popularDishes.filter(d => d.id.startsWith('sn-'));
        if(lowerCaseCategory.includes('desserts')) return popularDishes.filter(d => d.id.startsWith('d-'));

        return popularDishes.filter(dish => 
            dish.name.toLowerCase().includes(lowerCaseCategory) || 
            dish.description.toLowerCase().includes(lowerCaseCategory)
        );
    }
    
    const filteredDishes = getFilteredDishes();
    const selectedCategoryDetails = cuisineCategories.find(c => c.name === selectedCategory);


  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image 
          src="https://img.freepik.com/premium-photo/traditional-south-indian-meal-food-served-big-banana-leaf-food-platter-complete-thali-selective-focus_466689-50749.jpg?w=2000"
          alt="A delicious spread of Indian food"
          fill
          className="object-cover"
          priority
          data-ai-hint="south indian food"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-down">
            Order Authentic Indian Food Near You
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl animate-fade-in-up">
            From street food to royal biryanis — order your favorites anytime.
          </p>
          <div className="mt-8 flex w-full max-w-2xl flex-col sm:flex-row items-center gap-2 rounded-full bg-white p-2 shadow-lg">
            <div className="flex items-center w-full sm:w-auto flex-1 pl-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <Button variant="link" className="text-foreground font-semibold">
                Select Location
              </Button>
            </div>
            <div className="hidden sm:block h-8 border-l border-gray-200"></div>
            <div className="flex items-center w-full flex-[2]">
                <Input
                    placeholder="Search for dishes or cuisines..."
                    className="h-12 border-none text-md focus-visible:ring-0 focus-visible:ring-offset-0"
                    aria-label="Search for dishes or cuisines"
                />
                <Button size="icon" className="rounded-full w-10 h-10 mr-1 bg-primary">
                    <Search className="h-5 w-5 text-primary-foreground" />
                </Button>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-8">
        {/* Cuisine Categories Section */}
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">What's on your mind?</h2>
             <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                    {cuisineCategories.map((category) => (
                    <CarouselItem key={category.name} className="basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                        <button onClick={() => handleCategorySelect(category.name)} className="group flex flex-col items-center gap-2 text-center w-full">
                            <div className="relative h-24 w-24 overflow-hidden rounded-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                <Image
                                src={category.icon}
                                alt={category.name}
                                data-ai-hint="cuisine category"
                                fill
                                className="object-cover"
                                sizes="96px"
                                />
                            </div>
                            <span className="font-semibold text-foreground">{category.name}</span>
                        </button>
                    </CarouselItem>
                    ))}
                </CarouselContent>
             </Carousel>
        </section>

        {/* Popular Dishes Section */}
        <section className="py-12">
            {selectedCategory ? (
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">
                        {selectedCategoryDetails?.emoji} {selectedCategory}
                    </h2>
                    <Button variant="ghost" onClick={clearCategorySelection}>
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to all dishes
                    </Button>
                </div>
            ) : (
                <h2 className="text-3xl font-bold mb-8">Top Picks For You</h2>
            )}

            {filteredDishes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredDishes.map((dish) => (
                        <DishCard key={dish.id} item={dish} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-muted-foreground">No dishes found for this category. Try another!</p>
                </div>
            )}
        </section>

        {/* Top Restaurants Section */}
        <section className="py-12 bg-secondary/30 rounded-lg -mx-4 px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Top Restaurants Near You</h2>
            <Button variant="ghost" asChild>
                <Link href="#">See All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <TopRestaurants />
        </section>

        {/* Offers & Discounts Section */}
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Offers For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-8 text-white overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold">Flat 50% OFF</h3>
                        <p className="mt-2">On your first order. Use code: <Badge variant="secondary" className="text-orange-500 font-bold">FIRST50</Badge></p>
                        <Button variant="secondary" className="mt-4 text-orange-500">Order Now</Button>
                    </div>
                     <Utensils className="absolute -right-4 -bottom-4 h-32 w-32 text-white/20" />
                </div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 rounded-xl p-8 text-white overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold">Free Delivery</h3>
                        <p className="mt-2">On all orders above ₹299</p>
                        <Button variant="secondary" className="mt-4 text-teal-500">Explore Restaurants</Button>
                    </div>
                     <Bike className="absolute -right-4 -bottom-4 h-32 w-32 text-white/20" />
                </div>
            </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                            <feature.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="mt-2 text-muted-foreground">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}
