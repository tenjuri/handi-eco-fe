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
          banner: "https://media.handi-eco.vn/images/product/home-1.png",
        },
        {
          title: "Baby Changing Basket",
          description: [
            "Our 'Handi&Eco' baby change baskets are made with soft organic seagrass, with colors and patterns exclusive to The Handi&Eco Collective, adding a unique touch to your home and nursery",
            "Make a great alternative to a traditional baby change table.",
            "Easily portable, allowing the basket to come to your baby.",
            "These baskets are lightweight, designed to move with ease from room to room, nappy change to nappy change.",
          ],
          url: "/",
          btnLabel: "BABY CHANGING BASKET CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/home-2.png",
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
          banner: "https://media.handi-eco.vn/images/product/home-3.png",
        },
      ],
    },
    {
      name: "Kitchen & Dinning",
      slug: "kitchen-dinning",
      url: "/our-product/kitchen-dinning",
      content: [
        {
          title: "Tray",
          description: [
            "Add Handi&Eco's handcrafted Trays to create a highlight to make your space more sophisticated. Not only in the kitchen or living room, this type of tray is very popular for storing food and fruits at parties, serving food on the beach, and on picnics.",
          ],
          url: "/",
          btnLabel: "TRAY CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/kit-1.png",
        },
        {
          title: "Placemat",
          description: [
            "Placemat at Handi&Eco is a unique, creative handmade work from natural materials such as rattan, seagrass, water hyacinth, and bamboo. With its natural beauty and delicate combination of natural materials, placemat not only protects your dining table and coffee table from scratches and stains, but also makes your meals and afternoon tea more enjoyable. you become beautiful and unique. Therefore, placemats are often used in formal meetings, wedding parties or served in natural-style restaurants, prairies or coastal restaurants. People who really know how to enjoy life often use this type of placemat.",
          ],
          url: "/",
          btnLabel: "PLACEMAT CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/kit-2.png",
        },
        {
          title: "Tissue Box",
          description: [
            "Tissue boxes at Handi&Eco are designed to keep the tissues inside always dry and mold-free. It can be applied in many office spaces, living rooms, dining rooms, bedrooms, or at parties, restaurants,...",
          ],
          url: "/",
          btnLabel: "TISSUE BOX CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/kit-3.png",
        },
      ],
    },
    {
      name: "Outdoor & Garden",
      slug: "outdoor-garden",
      url: "/our-product/outdoor-garden",
      content: [
        {
          title: "Picnic Basket",
          description: [
            "Enjoy a fun weekend with your family, friends or loved ones with a picnic with a picnic basket from Handi&Eco. Carrying food in baskets made from bamboo, rattan, and water hyacinth in this green space and mild sunny weather will make you feel like you have returned to Europe of the 18th - 19th centuries.",
          ],
          url: "/",
          btnLabel: "PICNIC BASKET",
          banner: "https://media.handi-eco.vn/images/product/out-1.png",
        },
        {
          title: "Planter",
          description: [
            "Add a little green to your home with Handi&Eco's Planter. Made from ECOCAFT's familiar natural materials in different shapes and sizes, Planter is not only an ideal place to grow plants, but also a unique work of art in your space. At the same time, it is a great way for you to connect with the natural environment.",
          ],
          url: "/",
          btnLabel: "PLANTER CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/out-2.png",
        },
        {
          title: "Vase",
          description: [
            "Add warmth and rustic elegance to your space with Handi&Eco's vases made from bamboo and seagrass. With their sturdy construction, these vases are guaranteed to hold your favorite flowers or decorative branches with ease, adding life and vitality to your home.",
          ],
          url: "/",
          btnLabel: "VASE CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/out-3.png",
        },
      ],
    },
    {
      name: "Gift & Fashion Accessories",
      slug: "gift-fashion",
      url: "/our-product/gift-fashion",
      content: [
        {
          title: "Gift Box",
          description: [
            "Box made from bamboo, rattan is a beautiful and functional natural handmade product. You can use it to store gifts that are both elegant and luxurious, or you can store other food boxes in it. Choosing this material is also a way of loving and respecting the environment.",
          ],
          url: "/",
          btnLabel: "GIFT BOX CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/gift-1.png",
        },
        {
          title: "HandBag",
          description: [
            "With materials like rattan, cotton, banana pulp, and natural water hyacinth, our handbags are like creative and elegant works of art. Featuring natural beauty and warm colors, it conveys closeness to nature and a graceful style. These bags are the perfect combination of artistry and durability, and are a great choice for those looking for a unique and fun fashion item.",
          ],
          url: "/",
          btnLabel: "HANDBAG CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/gift-2.png",
        },
        {
          title: "Flower Basket",
          description: [
            "Not just pleasant on the outside, our Pleasant baskets are especially popular among families.",
            "Made from natural sundried elephant grass, colored with traditional plant and mineral dyes and non-toxic fabric dyes to produce contemporary colors, our baskets are completely sustainable and eco-friendly.",
            "Double woven 100% leather trim handles provide strength and durability.",
          ],
          url: "/",
          btnLabel: "BASKET CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/gift-3.png",
        },
      ],
    },
    {
      name: "Bathroom & Laundry",
      slug: "bathroom-laundry",
      url: "/our-product/bathroom-laundry",
      content: [
        {
          title: "Hanging Shelf",
          description: [
            "Hanging shelves at Handi&Eco have a unique structure created from natural materials, bringing organic and sustainable beauty to any space. Handi&Eco's Hanging shelft creates a rustic feel, with natural colors, they also bring a warm feeling. There are many different types of Hanging shelves and they can be used as book shelves in the office, as display shelves in the living room, as fruit shelves in the kitchen, as makeup shelves in the bedroom or as shelves leave things in the bathroom.",
          ],
          url: "/",
          btnLabel: "HANGING SHELF CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/bath-1.png",
        },
        {
          title: "Household Basket",
          description: [
            "Our rattan, seagrass, water hyacinth, and bamboo products are collected naturally in their natural environment and are produced by hand without any processing for the sake of perfect appearance or without using any molds to obtain a fixed size.",
          ],
          url: "/",
          btnLabel: "BASKET CATALOGUE",
          banner: "https://media.handi-eco.vn/images/product/bath-2.png",
        },
      ],
    },
  ];
  return { ourProducts };
};
export default useOurProduct;
