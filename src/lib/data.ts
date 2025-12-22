import { PlaceHolderImages } from "./placeholder-images";
import type { Restaurant } from "./types";

const getImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        // Fallback or error
        return {
            id: 'fallback',
            description: 'fallback image',
            imageUrl: 'https://picsum.photos/seed/fallback/600/400',
            imageHint: 'food'
        }
    }
    return img;
}

const mockRestaurants: Restaurant[] = [
  {
    id: "sushi-place",
    name: "The Sushi Place",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "25-35 min",
    coverImage: getImage('restaurant-cover-sushi'),
    menu: [
      {
        title: "Appetizers",
        items: [
          { id: "sp1", name: "Edamame", description: "Steamed and salted soybeans.", price: 5.99, image: getImage('menu-sushi-roll') },
          { id: "sp2", name: "Gyoza", description: "Pan-fried pork dumplings.", price: 7.99, image: getImage('menu-sushi-roll') },
        ],
      },
      {
        title: "Classic Rolls",
        items: [
          { id: "sp3", name: "California Roll", description: "Crab, avocado, cucumber.", price: 8.99, image: getImage('menu-sushi-roll') },
          { id: "sp4", name: "Spicy Tuna Roll", description: "Tuna, spicy mayo, cucumber.", price: 9.99, image: getImage('menu-sushi-roll') },
          { id: "sp5", name: "Dragon Roll", description: "Eel, crab, avocado.", price: 14.99, image: getImage('menu-sushi-roll') },
        ],
      },
    ],
  },
  {
    id: "pizza-den",
    name: "Pizza Den",
    cuisine: "Italian",
    rating: 4.6,
    deliveryTime: "30-40 min",
    coverImage: getImage('restaurant-cover-pizza'),
    menu: [
      {
        title: "Pizzas",
        items: [
          { id: "pd1", name: "Margherita", description: "Tomato, mozzarella, basil.", price: 12.99, image: getImage('menu-margherita-pizza') },
          { id: "pd2", name: "Pepperoni", description: "Classic pepperoni and cheese.", price: 14.99, image: getImage('menu-margherita-pizza') },
          { id: "pd3", name: "Veggie Supreme", description: "All the veggies.", price: 15.99, image: getImage('menu-margherita-pizza') },
        ],
      },
      {
        title: "Sides",
        items: [
          { id: "pd4", name: "Garlic Bread", description: "With marinara sauce.", price: 6.99, image: getImage('menu-margherita-pizza') },
        ],
      },
    ],
  },
  {
    id: "taco-town",
    name: "Taco Town",
    cuisine: "Mexican",
    rating: 4.7,
    deliveryTime: "20-30 min",
    coverImage: getImage('restaurant-taco-town'),
    menu: [
        {
            title: "Tacos",
            items: [
                { id: "tt1", name: "Carne Asada", description: "Grilled steak tacos.", price: 4.50, image: getImage('menu-street-tacos') },
                { id: "tt2", name: "Al Pastor", description: "Marinated pork tacos.", price: 4.00, image: getImage('menu-street-tacos') },
                { id: "tt3", name: "Fish Tacos", description: "Battered fish with slaw.", price: 5.00, image: getImage('menu-street-tacos') },
            ]
        }
    ]
  },
  {
    id: "burger-hub",
    name: "Burger Hub",
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "25-35 min",
    coverImage: getImage('restaurant-burger-hub'),
    menu: [
        {
            title: "Burgers",
            items: [
                { id: "bh1", name: "Classic Cheeseburger", description: "Beef patty, cheese, lettuce, tomato.", price: 10.99, image: getImage('menu-cheeseburger') },
                { id: "bh2", name: "Bacon Burger", description: "With crispy bacon and BBQ sauce.", price: 12.99, image: getImage('menu-cheeseburger') },
            ]
        }
    ]
  },
    {
    id: "curry-house",
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.9,
    deliveryTime: "35-45 min",
    coverImage: getImage('restaurant-curry-house'),
    menu: [
        {
            title: "Curries",
            items: [
                { id: "ch1", name: "Chicken Tikka Masala", description: "Creamy tomato-based curry.", price: 15.99, image: getImage('menu-chicken-curry') },
                { id: "ch2", name: "Paneer Butter Masala", description: "Vegetarian delight.", price: 14.99, image: getImage('menu-chicken-curry') },
            ]
        }
    ]
  },
  {
    id: "pho-king",
    name: "Pho King",
    cuisine: "Vietnamese",
    rating: 4.7,
    deliveryTime: "30-40 min",
    coverImage: getImage('restaurant-pho-king'),
    menu: [
        {
            title: "Noodle Soups",
            items: [
                { id: "pk1", name: "Pho Dac Biet", description: "Combination beef noodle soup.", price: 13.99, image: getImage('menu-pho-soup') },
            ]
        }
    ]
  },
  {
    id: "pasta-palace",
    name: "Pasta Palace",
    cuisine: "Italian",
    rating: 4.6,
    deliveryTime: "30-40 min",
    coverImage: getImage('restaurant-pasta-palace'),
    menu: [
        {
            title: "Pasta",
            items: [
                { id: "pp1", name: "Spaghetti Carbonara", description: "Creamy pasta with pancetta.", price: 16.99, image: getImage('menu-spaghetti-carbonara') },
            ]
        }
    ]
  },
  {
    id: "bbq-shack",
    name: "BBQ Shack",
    cuisine: "American",
    rating: 4.8,
    deliveryTime: "40-50 min",
    coverImage: getImage('restaurant-bbq-shack'),
    menu: [
        {
            title: "BBQ",
            items: [
                { id: "bs1", name: "BBQ Ribs", description: "Full rack of fall-off-the-bone ribs.", price: 24.99, image: getImage('menu-bbq-ribs') },
            ]
        }
    ]
  }
];

// Simulate API call
export async function getRestaurants() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockRestaurants.map(({ menu, ...restaurant }) => {
    // We don't need the full menu on the list page
    return { ...restaurant, coverImage: getImage(`restaurant-${restaurant.id}`) || restaurant.coverImage };
  });
}

export async function getRestaurantById(id: string) {
  await new Promise(resolve => setTimeout(resolve, 300));
  const restaurant = mockRestaurants.find(r => r.id === id);
  return restaurant;
}
