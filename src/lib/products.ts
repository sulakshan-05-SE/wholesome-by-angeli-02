import fishpie from "@/assets/product-fishpie.jpg";
import moussaka from "@/assets/product-moussaka.jpg";
import granolaGhee from "@/assets/product-granola-ghee.jpg";
import fishpieBox from "@/assets/product-fishpie-box.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Ready Meals" | "Pantry" | "Breakfast" | "Essentials";
  image: string;
  badge?: string;
  description: string;
};

export const products: Product[] = [
  { id: "1", name: "Organic Fish Pie", tagline: "With wild salmon", price: 14, category: "Ready Meals", image: fishpie, badge: "Bestseller", description: "Naturally organic fish pie with wild salmon, undyed smoked haddock, leeks, parsley and organic cheddar." },
  { id: "2", name: "Organic Beef Moussaka", tagline: "Wholesome & hearty", price: 16, category: "Ready Meals", image: moussaka, badge: "New", description: "Grass-fed minced beef, aubergine, organic passata, layered with care. Utterly feel-good food." },
  { id: "3", name: "Organic Granola", tagline: "Naturally crunchy", price: 9, category: "Breakfast", image: granolaGhee, description: "Organic oats, raw honey, almonds, pumpkin seeds and flaxseeds. High fibre, no refined sugar." },
  { id: "4", name: "Organic Ghee 500ml", tagline: "Bilona method", price: 18, category: "Essentials", image: granolaGhee, badge: "Grass-fed", description: "Grass-fed, traditionally crafted ghee using the bilona method. Rich in nutrients, made with love." },
  { id: "5", name: "Fish Pie Gift Box", tagline: "Beautifully packaged", price: 22, category: "Ready Meals", image: fishpieBox, badge: "Limited", description: "Jar + presentation box. Perfect as a gift or for a special evening at home." },
  { id: "6", name: "Wholesome Hamper", tagline: "Curated selection", price: 64, category: "Pantry", image: granolaGhee, description: "A handpicked selection of Angeli essentials: granola, ghee and a ready meal of choice." },
  { id: "7", name: "Salmon Fish Pie Family", tagline: "Serves four", price: 26, category: "Ready Meals", image: fishpie, badge: "Family", description: "Larger format of our wild salmon fish pie — built for family dinners with zero compromise." },
  { id: "8", name: "Organic Moussaka Family", tagline: "Serves four", price: 28, category: "Ready Meals", image: moussaka, description: "Generous family-size moussaka, hearty and slow-layered with grass-fed beef." },
];

export const categories = ["All", "Ready Meals", "Pantry", "Breakfast", "Essentials"] as const;
