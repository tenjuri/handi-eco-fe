const useOurProduct = () => {
  const ourProducts = [
    {
      name: "Home Decor & Living",
      slug: "home-decor",
      url: "/our-product/home-decor",
      content: [
        {
          title: "Household Basket",
          description: [
            "Our rattan, seagrass, water hyacinth, and bamboo products are collected naturally in their natural environment and are produced by hand without any processing for the sake of perfect appearance or without using any molds to obtain a fixed size.",
          ],
          url: "/",
          btnLabel: "BASKET CATALOGUE",
          banner: "https://media.handi-eco.vn/images/home-decor.jpg",
        },
        {
          title: "Baby Changing Basket",
          description: [
            "Our 'EcoCraft' baby change baskets are made with soft organic seagrass, with colors and patterns exclusive to The EcoCraft Collective, adding a unique touch to your home and nursery",
            "Make a great alternative to a traditional baby change table.",
            "Easily portable, allowing the basket to come to your baby.",
            "These baskets are lightweight, designed to move with ease from room to room, nappy change to nappy change.",
          ],
          url: "/",
          btnLabel: "BABY CHANGING BASKET CATALOGUE",
          banner: "https://media.handi-eco.vn/images/home-decor.jpg",
        },
        {
          title: "Hanging Basket",
          description: [
            "With materials like bamboo, rattan, seagrass, and water hyacinth, artisans have skillfully created beautiful, multi-functional hanging baskets for your living space.",
            "Plant ornamental plants, decorate your home and living space",
            "Store and organize food, utensils, save space and create order in the house",
          ],
          url: "/",
          btnLabel: "CANDLE HOLDER CATALOGUE",
          banner: "https://media.handi-eco.vn/images/home-decor.jpg",
        },
      ],
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
