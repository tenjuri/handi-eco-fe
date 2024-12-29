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
    },
    {
      name: "Rattan",
      key: "rattan",
      slug: "rattan",
      url: "/category/rattan",
      image: Rattan,
    },
    {
      name: "Seagrass",
      key: "seagrass",
      slug: "seagrass",
      url: "/category/seagrass",
      image: Seagrass,
    },
    {
      name: "Water Hyacinth",
      key: "waterHyacinth",
      slug: "water-hyacinth",
      url: "/category/water-hyacinth",
      image: WaterHyacinth,
    },
    {
      name: "Loofah",
      key: "loofah",
      slug: "loofah",
      url: "/category/loofah",
      image: Rattan,
    },
    {
      name: "Wood",
      key: "wood",
      slug: "wood",
      url: "/category/wood",
      image: Bamboo,
    },
  ];
  return { materials };
};
export default useMaterial;
