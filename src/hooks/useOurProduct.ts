const useOurProduct = () => {
  const ourProducts = [
    {
      name: "Home Decor & Living",
      slug: "home-decor",
      url: "/our-product/home-decor",
    },
    {
      name: "Kitchen & Dinning",
      slug: "kitchen-dinning",
      url: "/our-product/kitchen-dinning",
    },
    {
      name: "Outdoor & Garden",
      slug: "outdoor-garden",
      url: "/our-product/outdoor-garden",
    },
    {
      name: "Gift & Fashion Accessories",
      slug: "gift-fashion",
      url: "/our-product/gift-fashion",
    },
    {
      name: "Bathroom & Laundry",
      slug: "bathroom-laundry",
      url: "/our-product/bathroom-laundry",
    },
  ];
  return { ourProducts };
};
export default useOurProduct;
