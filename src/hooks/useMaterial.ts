import Bamboo from "@/assets/images/material/bamboo.png";
import Rattan from "@/assets/images/material/rattan.png";
import Seagrass from "@/assets/images/material/seagrass.png";
import WaterHyacinth from "@/assets/images/material/water-hyacinth.png";

const useMaterial = () => {
  const materials = [
    {
      name: "Bamboo",
      slug: "bamboo",
      url: "/category/bamboo",
      image: Bamboo,
    },
    {
      name: "Rattan",
      slug: "rattan",
      url: "/category/rattan",
      image: Rattan,
    },
    {
      name: "Seagrass",
      slug: "seagrass",
      url: "/category/seagrass",
      image: Seagrass,
    },
    {
      name: "Water Hyacinth",
      slug: "water-hyacinth",
      url: "/category/water-hyacinth",
      image: WaterHyacinth,
    },
    {
      name: "Loofah",
      slug: "loofah",
      url: "/category/loofah",
      image: Rattan,
    },
    {
      name: "Wood",
      slug: "wood",
      url: "/category/wood",
      image: Bamboo,
    },
  ];
  return { materials };
};
export default useMaterial;
