import Bamboo from "@/assets/images/material/bamboo.png";
import Rattan from "@/assets/images/material/rattan.png";
import Seagrass from "@/assets/images/material/seagrass.png";
import WaterHyacinth from "@/assets/images/material/water-hyacinth.png";

const useMaterial = () => {
  const materials = [
    {
      name: "Bamboo",
      key: "bamboo",
      slug: "bamboo",
      url: "/category/bamboo",
      image: Bamboo,
      amount: 4,
    },
    {
      name: "Rattan",
      key: "rattan",
      slug: "rattan",
      url: "/category/rattan",
      image: Rattan,
      amount: 4,
    },
    {
      name: "Seagrass",
      key: "seagrass",
      slug: "seagrass",
      url: "/category/seagrass",
      image: Seagrass,
      amount: 4,
    },
    {
      name: "Water Hyacinth",
      key: "waterHyacinth",
      slug: "water-hyacinth",
      url: "/category/water-hyacinth",
      image: WaterHyacinth,
      amount: 4,
    },
    {
      name: "Loofah",
      key: "loofah",
      slug: "loofah",
      url: "/category/loofah",
      image: Rattan,
      amount: 4,
    },
    {
      name: "Wood",
      key: "wood",
      slug: "wood",
      url: "/category/wood",
      image: Bamboo,
      amount: 4,
    },
  ];
  return { materials };
};
export default useMaterial;
