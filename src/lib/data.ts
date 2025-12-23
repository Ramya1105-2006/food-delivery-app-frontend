
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
          { id: "sih1", name: "Masala Dosa", description: "Crispy crepe with spiced potato filling.", price: 120.00, image: getImage('menu-dosa'), type: 'veg' },
          { id: "sih2", name: "Idli Sambar", description: "Steamed rice cakes with lentil soup.", price: 80.00, image: getImage('menu-idli'), type: 'veg' },
          { id: "sih3", name: "Medu Vada", description: "Crispy savory doughnuts.", price: 90.00, image: getImage('menu-vada'), type: 'veg' },
        ],
      },
      {
        title: "Main Course",
        items: [
          { id: "sih4", name: "Lemon Rice", description: "Flavorful rice with lemon and peanuts.", price: 150.00, image: getImage('menu-lemon-rice'), type: 'veg' },
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
          { id: "bp1", name: "Chicken Dum Biryani", description: "Aromatic rice and chicken cooked in a sealed pot.", price: 350.00, image: getImage('menu-chicken-biryani'), type: 'non-veg' },
          { id: "bp2", name: "Mutton Biryani", description: "Succulent mutton pieces in fragrant rice.", price: 450.00, image: getImage('menu-mutton-biryani'), type: 'non-veg' },
          { id: "bp3", name: "Vegetable Biryani", description: "A medley of vegetables and basmati rice.", price: 280.00, image: getImage('menu-veg-biryani'), type: 'veg' },
        ],
      },
      {
        title: "Kebabs",
        items: [
          { id: "bp4", name: "Chicken Seekh Kebab", description: "Minced chicken skewers.", price: 250.00, image: getImage('menu-chicken-kebab'), type: 'non-veg' },
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
                { id: "pd1", name: "Paneer Butter Masala", description: "Cottage cheese in a creamy tomato gravy.", price: 320.00, image: getImage('menu-paneer-butter-masala'), type: 'veg' },
                { id: "pd2", name: "Dal Makhani", description: "Black lentils simmered in a rich gravy.", price: 280.00, image: getImage('menu-dal-makhani'), type: 'veg' },
                { id: "pd3", name: "Butter Chicken", description: "Tender chicken in a velvety tomato sauce.", price: 380.00, image: getImage('menu-butter-chicken'), type: 'non-veg' },
            ]
        },
        {
          title: "Breads",
          items: [
              { id: "pd4", name: "Garlic Naan", description: "Soft leavened bread with garlic.", price: 60.00, image: getImage('menu-naan'), type: 'veg' },
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
                { id: "cc1", name: "Pani Puri", description: "Hollow crisps filled with tangy water.", price: 70.00, image: getImage('menu-pani-puri'), type: 'veg' },
                { id: "cc2", name: "Samosa Chaat", description: "Crushed samosas topped with yogurt and chutneys.", price: 90.00, image: getImage('menu-samosa-chaat'), type: 'veg' },
            ]
        }
    ]
  },
  {
    id: "wok-express",
    name: "Wok Express",
    cuisine: "Chinese",
    rating: 4.5,
    deliveryTime: "25-35 min",
    coverImage: getImage('restaurant-wok-express'),
    menu: [
      {
        title: "Noodles & Rice",
        items: [
          { id: "we1", name: "Hakka Noodles", description: "Stir-fried noodles with vegetables.", price: 220.00, image: getImage('menu-hakka-noodles'), type: 'veg' },
          { id: "we2", name: "Schezwan Fried Rice", description: "Spicy fried rice with schezwan sauce.", price: 240.00, image: getImage('menu-schezwan-rice'), type: 'veg' },
        ],
      },
      {
        title: "Starters",
        items: [
          { id: "we3", name: "Gobi Manchurian", description: "Crispy cauliflower in a tangy sauce.", price: 200.00, image: getImage('menu-gobi-manchurian'), type: 'veg' },
          { id: "we4", name: "Chilli Chicken", description: "Spicy and tangy chicken appetizer.", price: 280.00, image: getImage('menu-chilli-chicken'), type: 'non-veg' },
        ],
      },
    ],
  },
  {
    id: "sweet-delights",
    name: "Sweet Delights",
    cuisine: "Desserts",
    rating: 4.9,
    deliveryTime: "20-30 min",
    coverImage: getImage('restaurant-sweet-delights'),
    menu: [
        {
            title: "Indian Sweets",
            items: [
                { id: "sd1", name: "Gulab Jamun", description: "Soft, spongy balls soaked in sugar syrup.", price: 100.00, image: getImage('menu-gulab-jamun'), type: 'veg' },
                { id: "sd2", name: "Rasmalai", description: "Creamy and spongy cottage cheese dessert.", price: 150.00, image: getImage('menu-rasmalai'), type: 'veg' },
            ]
        },
        {
            title: "Cakes & Pastries",
            items: [
                { id: "sd3", name: "Chocolate Truffle Cake (Slice)", description: "Rich and decadent chocolate cake.", price: 180.00, image: getImage('menu-choco-truffle'), type: 'veg' },
            ]
        }
    ]
  },
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
