import BambooLampshade from "@/assets/images/bamboo-lampshade.jpg";
import CandleHolderBambooBasket from "@/assets/images/candle-holder-bamboo-basket.jpg";
import BambooHangingLampshade from "@/assets/images/bamboo-hanging-lampshade.jpg";
import RattanFruitBowl from "@/assets/images/spun-bamboo-with-rattan-bowl.jpg";
import WovenRattan from "@/assets/images/woven-rattan-and-fern-baske.jpg";
import WovenRattanBox from "@/assets/images/woven-rattan-box.jpg";
import WovenStorageBasket from "@/assets/images/woven-storage-basket-made-of-seagrass.jpg";
import PetHouse from "@/assets/images/pet-house-made-of-water-hyacinthynth.jpg";
import StorageBasket from "@/assets/images/storage-basket-from-water-hyacinth.jpg";
import TissueBox from "@/assets/images/tissue-box-made-of-pine-wood.jpg";
import ServingTray from "@/assets/images/serving-tray-made-of-rattan-and-wood.jpg";
import TissueBoxRattan from "@/assets/images/tissue-box-made-of-rattan-and-wood.jpg";

export type ProductType = {
  name: string;
  material: string[];
  category: string;
  url: string;
  images: {
    src: string;
  };
  featured?: boolean;
  new?: boolean;
};
const useProducts = () => {
  const products = [
    {
      name: "Vietnam bamboo lampshade",
      slug: "vietnam-bamboo-lampshade",
      description:
        "A handcrafted woven bamboo hanging lampshade from Vietnam, made of natural materials for a warm and eco-friendly lighting solution.",
      material: ["bamboo"],
      category: "home-decor",
      url: "/product/bamboo-lampshade",
      images: BambooLampshade,
      featured: true,
      new: true,
    },
    {
      name: "Bamboo candle holder manufactured in Vietnam",
      slug: "bamboo-candle-holder-manufactured",
      description:
        "Handwoven bamboo candle holder from Vietnam Handicraft company, made by skilled artisans using eco-friendly natural bamboo.",
      material: ["bamboo"],
      category: "home-decor",
      url: "/product/bamboo-candle-holder-manufactured",
      images: CandleHolderBambooBasket,
      featured: true,
      new: true,
    },
    {
      name: "Lampshade made of bamboo from Vietnam",
      slug: "bamboo-hanging-lampshade",
      description:
        "Handcrafted bamboo lampshade made in Vietnam by skilled artisans. This eco-friendly lampshade showcases the natural beauty of bamboo, providing a warm and inviting light while adding a touch of rustic charm to any room.",
      material: ["bamboo"],
      category: "home-decor",
      url: "/product/bamboo-hanging-lampshade",
      images: BambooHangingLampshade,
      featured: true,
      new: true,
    },
    {
      name: "Fruit bowl made of spun bamboo with rattan",
      slug: "bamboo-fruits-bowl",
      description:
        "Handcrafted fruit bowl made from spun bamboo with a rattan accent, perfect for holding fruit or as a decorative piece. Made in Vietnam.",
      material: ["bamboo"],
      category: "kitchen-dinning",
      url: "/product/bamboo-fruits-bowl",
      images: RattanFruitBowl,
      featured: true,
    },
    {
      name: "Woven rattan and fern basket",
      slug: "woven-rattan-and-fern-basket",
      description:
        "Eco-friendly woven basket made of rattan and fern. Crafted by local Vietnamese artisans to support rural livelihoods after the harvest season.",
      material: ["rattan"],
      category: "kitchen-dinning",
      url: "/product/woven-rattan-and-fern-basket",
      images: WovenRattan,
      featured: true,
    },
    {
      name: "Woven rattan box made in Vietnam",
      slug: "woven-rattan-box",
      description:
        "Handcrafted woven rattan box made in Vietnam from natural rattan and fern, perfect for stylish storage.",
      material: ["rattan"],
      category: "home-decor",
      url: "/product/woven-rattan-box",
      images: WovenRattanBox,
      featured: true,
    },
    {
      name: "Woven storage basket made of seagrass from Vietnam",
      slug: "woven-storage-basket-made-of-seagrass",
      description:
        "Handcrafted seagrass storage basket from Vietnam, offering eco-friendly and stylish organization for any space.",
      material: ["seagrass"],
      category: "gift-fashion",
      url: "/product/woven-storage-basket-made-of-seagrass",
      images: WovenStorageBasket,
      featured: true,
    },
    {
      name: "Pet house made of water-hyacinth in Vietnam",
      slug: "pet-house-made-of-water-hyacinth",
      description:
        "Handwoven water hyacinth pet house from Vietnam Handicraft company. Made from natural, eco-friendly materials, providing a safe and cozy space for pets while supporting local artisans.",
      material: ["water-hyacinth"],
      category: "outdoor-garden",
      url: "/product/pet-house-made-of-water-hyacinth",
      images: PetHouse,
      new: true,
    },
    {
      name: "Storage basket from water-hyacinth in Vietnam",
      slug: "storage-basket-from-water-hyacinth",
      description:
        "Organize your home in style with our Water Hyacinth Storage Basket from Vietnam Handicraft Company. Handcrafted in Vietnam using natural water hyacinth and a sturdy metal frame, this basket is perfect for storing blankets, towels, toys, and more. Add a touch of rustic charm to any room while reducing your environmental footprint.",
      material: ["water-hyacinth"],
      category: "bathroom-laundry",
      url: "/product/storage-basket-from-water-hyacinth",
      images: StorageBasket,
      featured: true,
      new: true,
    },
    {
      name: "Tissue box made of pine wood in Vietnam",
      slug: "tissue-box-made-of-pine-wood",
      description:
        "This tissue box is made of high-quality pine wood, crafted by skilled artisans from Vietnam Handicraft. Its minimalist design adds a natural and stylish touch to any space while providing a practical and eco-friendly solution for holding tissues. Durable and sustainable, this tissue box reflects a commitment to quality and craftsmanship.",
      material: ["wood"],
      category: "kitchen-dinning",
      url: "/product/tissue-box-made-of-pine-wood",
      images: TissueBox,
      new: true,
    },
    {
      name: "Serving tray made of rattan and wood from Vietnam",
      slug: "serving-tray-made-of-rattan-and-wood",
      description:
        "Handcrafted serving tray made from pine wood and rattan cane webbing by Vietnam Handicraft company in Vietnam. A perfect blend of style and functionality for serving or decor.",
      material: ["wood"],
      category: "kitchen-dinning",
      url: "/product/serving-tray-made-of-rattan-and-wood",
      images: ServingTray,
    },
    {
      name: "Tissue box made of rattan and pine wood in Vietnam",
      slug: "tissue-box-made-of-rattan-and-wood",
      description:
        "Rattan and pine wood tissue box, handcrafted in Vietnam by skilled artisans. This eco-friendly, durable tissue box adds a touch of natural elegance to any space.",
      material: ["wood"],
      category: "kitchen-dinning",
      url: "/product/tissue-box-made-of-rattan-and-wood",
      images: TissueBoxRattan,
      new: true,
    },
  ];
  return { products };
};

export default useProducts;
