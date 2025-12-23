
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
    id: "south-indian-house",
    name: "South Indian House",
    cuisine: "South Indian",
    rating: 4.8,
    deliveryTime: "20-30 min",
    coverImage: getImage('restaurant-south-indian'),
    menu: [
      {
        title: "Breakfast",
        items: [
          { id: "sih1", name: "Masala Dosa", description: "Crispy crepe with spiced potato filling.", price: 120.00, image: getImage('menu-dosa') },
          { id: "sih2", name: "Idli Sambar", description: "Steamed rice cakes with lentil soup.", price: 80.00, image: getImage('menu-idli') },
          { id: "sih3", name: "Medu Vada", description: "Crispy savory doughnuts.", price: 90.00, image: getImage('menu-vada') },
        ],
      },
      {
        title: "Main Course",
        items: [
          { id: "sih4", name: "Lemon Rice", description: "Flavorful rice with lemon and peanuts.", price: 150.00, image: getImage('menu-lemon-rice') },
        ],
      },
    ],
  },
  {
    id: "biryani-palace",
    name: "Biryani Palace",
    cuisine: "Mughlai",
    rating: 4.9,
    deliveryTime: "35-45 min",
    coverImage: getImage('restaurant-biryani-palace'),
    menu: [
      {
        title: "Biryanis",
        items: [
          { id: "bp1", name: "Chicken Dum Biryani", description: "Aromatic rice and chicken cooked in a sealed pot.", price: 350.00, image: getImage('menu-chicken-biryani') },
          { id: "bp2", name: "Mutton Biryani", description: "Succulent mutton pieces in fragrant rice.", price: 450.00, image: getImage('menu-mutton-biryani') },
          { id: "bp3", name: "Vegetable Biryani", description: "A medley of vegetables and basmati rice.", price: 280.00, image: getImage('menu-veg-biryani') },
        ],
      },
      {
        title: "Kebabs",
        items: [
          { id: "bp4", name: "Chicken Seekh Kebab", description: "Minced chicken skewers.", price: 250.00, image: getImage('menu-chicken-kebab') },
        ],
      },
    ],
  },
  {
    id: "punjabi-dhaba",
    name: "Punjabi Dhaba",
    cuisine: "North Indian",
    rating: 4.7,
    deliveryTime: "30-40 min",
    coverImage: getImage('restaurant-punjabi-dhaba'),
    menu: [
        {
            title: "Curries",
            items: [
                { id: "pd1", name: "Paneer Butter Masala", description: "Cottage cheese in a creamy tomato gravy.", price: 320.00, image: getImage('menu-paneer-butter-masala') },
                { id: "pd2", name: "Dal Makhani", description: "Black lentils simmered in a rich gravy.", price: 280.00, image: getImage('menu-dal-makhani') },
                { id: "pd3", name: "Butter Chicken", description: "Tender chicken in a velvety tomato sauce.", price: 380.00, image: getImage('menu-butter-chicken') },
            ]
        },
        {
          title: "Breads",
          items: [
              { id: "pd4", name: "Garlic Naan", description: "Soft leavened bread with garlic.", price: 60.00, image: getImage('menu-naan') },
          ]
      }
    ]
  },
  {
    id: "chaat-corner",
    name: "Chaat Corner",
    cuisine: "Street Food",
    rating: 4.6,
    deliveryTime: "15-25 min",
    coverImage: getImage('restaurant-chaat-corner'),
    menu: [
        {
            title: "Chaat",
            items: [
                { id: "cc1", name: "Pani Puri", description: "Hollow crisps filled with tangy water.", price: 70.00, image: getImage('menu-pani-puri') },
                { id: "cc2", name: "Samosa Chaat", description: "Crushed samosas topped with yogurt and chutneys.", price: 90.00, image: getImage('menu-samosa-chaat') },
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
