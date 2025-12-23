
import { PlaceHolderImages } from "./placeholder-images";
import type { Restaurant, MenuItem } from "./types";

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
      id: "REST_SOUTH_01",
      name: "South Indian Corner",
      cuisine: "South Indian",
      rating: 4.8,
      deliveryTime: "20-30 min",
      coverImage: getImage('restaurant-rest_south_01'),
      menu: [
        {
          title: "South Indian",
          items: [
            { id: "si-1", name: "Masala Dosa", description: "Crispy dosa with spiced potato filling", price: 120, image: getImage('menu-dosa'), type: 'veg' },
            { id: "si-2", name: "Plain Dosa", description: "Classic thin crispy dosa", price: 90, image: getImage('menu-dosa'), type: 'veg' },
            { id: "si-3", name: "Idli Sambar", description: "Soft idlis served with hot sambar", price: 60, image: getImage('menu-idli'), type: 'veg' },
            { id: "si-4", name: "Vada", description: "Crispy fried lentil donuts", price: 50, image: getImage('menu-vada'), type: 'veg' },
            { id: "si-5", name: "Pongal", description: "Rice and dal cooked with pepper and ghee", price: 80, image: getImage('menu-pongal'), type: 'veg' },
            { id: "si-6", name: "Uttapam", description: "Thick dosa topped with vegetables", price: 100, image: getImage('menu-uttapam'), type: 'veg' }
          ]
        }
      ]
    },
    {
      id: "REST_NORTH_01",
      name: "North Indian Tadka",
      cuisine: "North Indian",
      rating: 4.7,
      deliveryTime: "30-40 min",
      coverImage: getImage('restaurant-rest_north_01'),
      menu: [
        {
          title: "North Indian",
          items: [
            { id: "ni-1", name: "Paneer Butter Masala", description: "Paneer cooked in rich tomato gravy", price: 180, image: getImage('menu-paneer-butter-masala'), type: 'veg' },
            { id: "ni-2", name: "Butter Naan", description: "Soft naan with butter", price: 40, image: getImage('menu-naan'), type: 'veg' },
            { id: "ni-3", name: "Dal Tadka", description: "Yellow dal tempered with spices", price: 140, image: getImage('menu-dal-makhani'), type: 'veg' },
            { id: "ni-4", name: "Chole Bhature", description: "Spicy chickpeas with fried bread", price: 150, image: getImage('menu-chole-bhature'), type: 'veg' },
            { id: "ni-5", name: "Rajma Chawal", description: "Red kidney beans with rice", price: 130, image: getImage('menu-rajma-chawal'), type: 'veg' }
          ]
        }
      ]
    },
    {
      id: "REST_BIRYANI_01",
      name: "Biryani House",
      cuisine: "Biryani",
      rating: 4.9,
      deliveryTime: "35-45 min",
      coverImage: getImage('restaurant-rest_biryani_01'),
      menu: [
        {
          title: "Biryani",
          items: [
            { id: "b-1", name: "Chicken Biryani", description: "Aromatic basmati rice with chicken", price: 220, image: getImage('menu-chicken-biryani'), type: 'non-veg' },
            { id: "b-2", name: "Mutton Biryani", description: "Slow cooked mutton with spices", price: 280, image: getImage('menu-mutton-biryani'), type: 'non-veg' },
            { id: "b-3", name: "Veg Biryani", description: "Vegetable biryani with raita", price: 180, image: getImage('menu-veg-biryani'), type: 'veg' },
            { id: "b-4", name: "Hyderabadi Dum Biryani", description: "Traditional dum style biryani", price: 260, image: getImage('menu-chicken-biryani'), type: 'non-veg' }
          ]
        }
      ]
    },
    {
      id: "REST_STREET_01",
      name: "Street Food Junction",
      cuisine: "Street Food",
      rating: 4.6,
      deliveryTime: "15-25 min",
      coverImage: getImage('restaurant-rest_street_01'),
      menu: [
        {
          title: "Street Food",
          items: [
            { id: "sf-1", name: "Pani Puri", description: "Crispy puris with tangy water", price: 40, image: getImage('menu-pani-puri'), type: 'veg' },
            { id: "sf-2", name: "Bhel Puri", description: "Puffed rice with chutneys", price: 50, image: getImage('menu-bhel-puri'), type: 'veg' },
            { id: "sf-3", name: "Vada Pav", description: "Mumbai style vada pav", price: 35, image: getImage('menu-vada-pav'), type: 'veg' },
            { id: "sf-4", name: "Samosa", description: "Crispy fried potato samosa", price: 25, image: getImage('menu-samosa-chaat'), type: 'veg' },
            { id: "sf-5", name: "Kathi Roll", description: "Stuffed flatbread roll", price: 90, image: getImage('menu-kathi-roll'), type: 'veg' }
          ]
        }
      ]
    },
    {
      id: "REST_SNACKS_01",
      name: "Snack Attack",
      cuisine: "Snacks",
      rating: 4.4,
      deliveryTime: "20-30 min",
      coverImage: getImage('restaurant-rest_snacks_01'),
      menu: [
        {
          title: "Snacks",
          items: [
            { id: "sn-1", name: "French Fries", description: "Crispy salted fries", price: 90, image: getImage('menu-french-fries'), type: 'veg' },
            { id: "sn-2", name: "Veg Sandwich", description: "Fresh vegetable sandwich", price: 80, image: getImage('menu-sandwich'), type: 'veg' },
            { id: "sn-3", name: "Chicken Burger", description: "Juicy chicken patty burger", price: 150, image: getImage('menu-burger'), type: 'non-veg' },
            { id: "sn-4", name: "Cheese Pizza", description: "Classic cheese pizza", price: 200, image: getImage('menu-pizza'), type: 'veg' }
          ]
        }
      ]
    },
    {
      id: "REST_DESSERT_01",
      name: "Dessert Island",
      cuisine: "Desserts",
      rating: 4.9,
      deliveryTime: "20-30 min",
      coverImage: getImage('restaurant-rest_dessert_01'),
      menu: [
        {
          title: "Desserts",
          items: [
            { id: "d-1", name: "Gulab Jamun", description: "Soft milk dumplings in syrup", price: 60, image: getImage('menu-gulab-jamun'), type: 'veg' },
            { id: "d-2", name: "Rasgulla", description: "Spongy cottage cheese balls", price: 60, image: getImage('menu-rasgulla'), type: 'veg' },
            { id: "d-3", name: "Ice Cream", description: "Vanilla ice cream scoop", price: 80, image: getImage('menu-ice-cream'), type: 'veg' },
            { id: "d-4", name: "Falooda", description: "Rose flavored dessert drink", price: 120, image: getImage('menu-falooda'), type: 'veg' }
          ]
        }
      ]
    }
  ];

// Simulate API call
export async function getRestaurants(): Promise<Omit<Restaurant, 'menu'>[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockRestaurants.map(({ menu, ...restaurant }) => {
    // We don't need the full menu on the list page
    return { ...restaurant, coverImage: getImage(`restaurant-${restaurant.id.toLowerCase()}`) || restaurant.coverImage };
  });
}

export async function getRestaurantById(id: string): Promise<Restaurant | undefined> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const restaurant = mockRestaurants.find(r => r.id === id);
  return restaurant;
}

export async function getPopularDishes(): Promise<MenuItem[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    // Return a selection of popular dishes from various restaurants
    const popular: MenuItem[] = [
        mockRestaurants[0].menu[0].items[0], // Masala Dosa
        mockRestaurants[2].menu[0].items[0], // Chicken Biryani
        mockRestaurants[1].menu[0].items[0], // Paneer Butter Masala
        mockRestaurants[3].menu[0].items[0], // Pani Puri
    ];
    return popular;
}
