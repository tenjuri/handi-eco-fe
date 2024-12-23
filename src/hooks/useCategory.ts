const useCategory = () => {
  const categories = [
    {
      name: "Home Decor & Living",
      slug: "home-decor",
      url: "/category/home-decor",
    },
    {
      name: "Kitchen & Dinning",
      slug: "kitchen-dinning",
      url: "/category/kitchen-dinning",
    },
    {
      name: "Outdoor & Garden",
      slug: "outdoor-garden",
      url: "/category/outdoor-garden",
    },
    {
      name: "Gift & Fashion Accessories",
      slug: "gift-fashion",
      url: "/category/gift-fashion",
    },
    {
      name: "Bathroom & Laundry",
      slug: "bathroom-laundry",
      url: "/category/bathroom-laundry",
    },
  ];
  return { categories };
};
export default useCategory;
