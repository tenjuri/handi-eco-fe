import React from "react";
import { Drawer } from "antd";
import Link from "next/link";

type PropType = {
  open: boolean;
  setOpenMenu: (open: boolean) => void;
};
const MobileMenu: React.FC<PropType> = ({ open, setOpenMenu }) => {
  const onClose = () => {
    setOpenMenu(false);
  };
  const products = [
    {
      name: "Home Decor & Living",
      url: "/our-product/home-decor",
    },
    {
      name: "Kitchen & Dinning",
      url: "/our-product/kitchen-dinning",
    },
    {
      name: "Outdoor & Garden",
      url: "/our-product/outdoor-garden",
    },
    {
      name: "Gift & Fashion Accessories",
      url: "/our-product/gift-fashion",
    },
    {
      name: "Bathroom & Laundry",
      url: "/our-product/bathroom-laundry",
    },
  ];

  const materials = [
    {
      name: "Bamboo",
      url: "/material/bamboo",
    },
    {
      name: "Rattan",
      url: "/material/rattan",
    },
    {
      name: "Seagrass",
      url: "/material/seagrass",
    },
    {
      name: "Water Hyacinth",
      url: "/material/water-hyacinth",
    },
    {
      name: "Loofah",
      url: "/material/loofah",
    },
    {
      name: "Wood",
      url: "/material/wood",
    },
  ];
  return (
    <div>
      <Drawer onClose={onClose} open={open} closeIcon={false} width={300}>
        <p className="text-xl text-gold-app font-bold">PRODUCT</p>
        {products.map((product) => (
          <Link href={product.url} key={product.name} onClick={onClose}>
            <p>{product.name}</p>
          </Link>
        ))}
        <p className="text-xl text-gold-app font-bold">MATERIAL</p>
        {materials.map((material) => (
          <Link href={material.url} key={material.name} onClick={onClose}>
            <p>{material.name}</p>
          </Link>
        ))}
        <Link href="/about-us" onClick={onClose}>
          <p className="text-xl text-gold-app font-bold">ABOUT US</p>
        </Link>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
