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
      material: ["bamboo"],
      category: "home-decor",
      url: "/product/bamboo-lampshade",
      images: BambooLampshade,
      featured: true,
      new: true,
    },
    {
      name: "Bamboo candle holder manufactured in Vietnam",
      material: ["bamboo"],
      category: "home-decor",
      url: "/product/bamboo-candle-holder-manufactured",
      images: CandleHolderBambooBasket,
      featured: true,
      new: true,
    },
    {
      name: "Lampshade made of bamboo from Vietnam",
      material: ["bamboo"],
      category: "home-decor",
      url: "/product/bamboo-hanging-lampshade",
      images: BambooHangingLampshade,
      featured: true,
      new: true,
    },
    {
      name: "Fruit bowl made of spun bamboo with rattan",
      material: ["bamboo"],
      category: "kitchen-dinning",
      url: "/product/bamboo-fruits-bowl",
      images: RattanFruitBowl,
      featured: true,
    },
    {
      name: "Woven rattan and fern basket",
      material: ["rattan"],
      category: "kitchen-dinning",
      url: "/product/woven-rattan-and-fern-basket",
      images: WovenRattan,
      featured: true,
    },
    {
      name: "Woven rattan box made in Vietnam",
      material: ["rattan"],
      category: "home-decor",
      url: "/product/woven-rattan-box",
      images: WovenRattanBox,
      featured: true,
    },
    {
      name: "Woven storage basket made of seagrass from Vietnam",
      material: ["seagrass"],
      category: "gift-fashion",
      url: "/product/woven-storage-basket-made-of-seagrass",
      images: WovenStorageBasket,
      featured: true,
    },
    {
      name: "Pet house made of water-hyacinth in Vietnam",
      material: ["water-hyacinth"],
      category: "outdoor-garden",
      url: "/product/pet-house-made-of-water-hyacinth",
      images: PetHouse,
      new: true,
    },
    {
      name: "Storage basket from water-hyacinth in Vietnam",
      material: ["water-hyacinth"],
      category: "bathroom-laundry",
      url: "/product/storage-basket-from-water-hyacinth",
      images: StorageBasket,
      featured: true,
      new: true,
    },
    {
      name: "Tissue box made of pine wood in Vietnam",
      material: ["wood"],
      category: "kitchen-dinning",
      url: "/product/tissue-box-made-of-pine-wood",
      images: TissueBox,
      new: true,
    },
    {
      name: "Serving tray made of rattan and wood from Vietnam",
      material: ["wood"],
      category: "kitchen-dinning",
      url: "/product/serving-tray-made-of-rattan-and-wood",
      images: ServingTray,
    },
    {
      name: "Tissue box made of rattan and pine wood in Vietnam",
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
