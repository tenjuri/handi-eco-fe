export type ProductType = {
  name: string;
  material: string[];
  category: string;
  url: string;
  images: string;
  featured?: boolean;
  new?: boolean;
};
const useProducts = () => {
  const products = [
    {
      name: "Wooden Table",
      slug: "wooden-table",
      description:
        "To guarantee safety for users, all products undergo strict quality checks and are crafted using non-toxic, eco-friendly finishes. Additionally, we embrace waste minimization by repurposing offcuts and leftovers into smaller accessories, maximizing the utility of each material.",
      material: ["wood"],
      category: "home-decor",
      url: "/product/wooden-table",
      images:
        "https://media.handi-eco.vn/images/material/all-product/wooden-table.jpg",
    },
    {
      name: "Wooden and Rattan Table",
      slug: "wooden-and-rattan-table",
      description:
        "To guarantee safety for users, all products undergo strict quality checks and are crafted using non-toxic, eco-friendly finishes. Additionally, we embrace waste minimization by repurposing offcuts and leftovers into smaller accessories, maximizing the utility of each material.",
      material: ["wood"],
      category: "home-decor",
      url: "/product/wooden-and-rattan-table",
      images:
        "https://media.handi-eco.vn/images/material/all-product/wooden-and-rattan-table.jpg",
    },
    {
      name: "Wooden Rattan Decorative Coffee Table",
      slug: "wooden-rattan-decorative-coffee-table",
      description:
        "To guarantee safety for users, all products undergo strict quality checks and are crafted using non-toxic, eco-friendly finishes. Additionally, we embrace waste minimization by repurposing offcuts and leftovers into smaller accessories, maximizing the utility of each material.",
      material: ["wood", "rattan"],
      category: "home-decor",
      url: "/product/wooden-rattan-decorative-coffee-table",
      images:
        "https://media.handi-eco.vn/images/material/all-product/wooden-rattan-decorative-coffee-table.jpg",
    },
    {
      name: "Decorative Coffee Table",
      slug: "decorative-coffee-table",
      description:
        "To guarantee safety for users, all products undergo strict quality checks and are crafted using non-toxic, eco-friendly finishes. Additionally, we embrace waste minimization by repurposing offcuts and leftovers into smaller accessories, maximizing the utility of each material.",
      material: ["rattan"],
      category: "home-decor",
      url: "/product/decorative-coffee-table",
      images:
        "https://media.handi-eco.vn/images/material/all-product/decorative-coffee-table.jpg",
    },
    {
      name: "Decorative Coffee Table 2",
      slug: "decorative-coffee-table-2",
      description:
        "To guarantee safety for users, all products undergo strict quality checks and are crafted using non-toxic, eco-friendly finishes. Additionally, we embrace waste minimization by repurposing offcuts and leftovers into smaller accessories, maximizing the utility of each material.",
      material: ["rattan"],
      category: "home-decor",
      url: "/product/decorative-coffee-table-2",
      images:
        "https://media.handi-eco.vn/images/material/all-product/decorative-coffee-table-2.jpg",
    },
    {
      name: "Water Hyacinth Table With Wooden Legs",
      slug: "water-hyacinth-table-with-wooden-legs",
      description:
        "To guarantee safety for users, all products undergo strict quality checks and are crafted using non-toxic, eco-friendly finishes. Additionally, we embrace waste minimization by repurposing offcuts and leftovers into smaller accessories, maximizing the utility of each material.",
      material: ["water-hyacinth", "wood"],
      category: "home-decor",
      url: "/product/water-hyacinth-table-with-wooden-legs",
      images:
        "https://media.handi-eco.vn/images/material/all-product/water-hyacinth-table-with-wooden-legs.jpg",
    },
    // VINTAGE PATTERNED DECORATIVE TABLE
    {
      name: "Vintage Patterned Decorative Table",
      description:
        "To guarantee safety for users, all products undergo strict quality checks and are crafted using non-toxic, eco-friendly finishes. Additionally, we embrace waste minimization by repurposing offcuts and leftovers into smaller accessories, maximizing the utility of each material.",
      slug: "vintage-patterned-decorative-table",
      material: ["rattan", "bamboo"],
      category: "home-decor",
      url: "/product/vintage-patterned-decorative-table",
      images:
        "https://media.handi-eco.vn/images/material/all-product/vintage-patterned-decorative-table.jpg",
    },
    {
      name: "Rattan & Water Hyacinth Basket",
      slug: "rattan-water-hyacinth-basket",
      description:
        "Crafted from high-quality water hyacinth, this storage basket features a trendy zigzag pattern that adds a contemporary touch to any space. Its stylish design makes it a versatile addition to home decor while offering practical storage solutions.",
      material: ["rattan"],
      category: "home-decor",
      url: "/product/rattan-water-hyacinth-basket",
      images:
        "https://media.handi-eco.vn/images/material/all-product/rattan-water-hyacinth-basket.jpg",
      featured: true,
    },
    {
      name: "This New Collection Is an Earthy, Rustic Call for Minimalism",
      slug: "new-collection-earthy-rustic",
      description:
        "This New Collection Is an Earthy, Rustic Call for Minimalism",
      material: ["water-hyacinth"],
      category: "home-decor",
      url: "/product/new-collection-earthy-rustic",
      images:
        "https://media.handi-eco.vn/images/material/all-product/new-collection-earthy-rustic.jpg",
      featured: true,
    },
    {
      name: "Relaxing chair, natural rattan",
      slug: "relaxing-chair-natural-rattan",
      description:
        "Handcrafted rattan chair, designed for relaxation and comfort. Crafted by skilled artisans in Vietnam, this rattan chair offers a natural, eco-friendly seating solution.",
      material: ["rattan"],
      category: "home-decor",
      url: "/product/relaxing-chair-natural-rattan",
      images:
        "https://media.handi-eco.vn/images/material/all-product/relaxing-chair-natural-rattan.jpg",
      featured: true,
    },
    {
      name: "2-Tiered Japandi Round Walnut Wood Coffee Table with Storage Rattan Base",
      slug: "2-tiered-japandi-round-walnut-wood-coffee-table",
      description:
        "A flat natural wood top gives given open, airy appeal with a rattan base, making the coffee table ideal for adding engaging visual intrigue in a contemporary.",
      material: ["wood"],
      category: "home-decor",
      url: "/product/2-tiered-japandi-round-walnut-wood-coffee-table",
      images:
        "https://media.handi-eco.vn/images/material/all-product/2-tiered-japandi-round-walnut-wood-coffee-table.jpg",
      featured: true,
    },
    {
      name: "Creative Bamboo Weaving Handmade Table Lamp",
      slug: "creative-bamboo-weaving-handmade-table-lamp",
      description:
        "Provides just the right amount of light and diffuses it evenly, bright but not blinding, muted but efficient. Plug in table lamp for quick and easy use, Perfect for reading, nursing or working in living room, bedroom, office, study room, nursery room or college dorm.",
      material: ["bamboo"],
      category: "home-decor",
      url: "/product/creative-bamboo-weaving-handmade-table-lamp",
      images:
        "https://media.handi-eco.vn/images/material/all-product/creative-bamboo-weaving-handmade-table-lamp.jpg",
      featured: true,
    },
    {
      name: "Vietnam bamboo lampshade",
      slug: "bamboo-lampshade",
      description:
        "Decorative lamps made from rattan, bamboo, wood, or seagrass, providing a warm, natural ambiance.",
      material: ["bamboo"],
      category: "home-decor",
      url: "/product/bamboo-lampshade",
      images:
        "https://media.handi-eco.vn/images/material/all-product/bamboo-lampshade.jpg",
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
      images:
        "https://media.handi-eco.vn/images/material/all-product/candle-holder-bamboo-basket.jpg",
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
      images:
        "https://media.handi-eco.vn/images/material/all-product/bamboo-hanging-lampshade.jpg",
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
      images:
        "https://media.handi-eco.vn/images/material/all-product/spun-bamboo-with-rattan-bowl.jpg",
    },
    {
      name: "Woven rattan and fern basket",
      slug: "woven-rattan-and-fern-basket",
      description:
        "Eco-friendly woven basket made of rattan and fern. Crafted by local Vietnamese artisans to support rural livelihoods after the harvest season.",
      material: ["rattan"],
      category: "kitchen-dinning",
      url: "/product/woven-rattan-and-fern-basket",
      images:
        "https://media.handi-eco.vn/images/material/all-product/woven-rattan-and-fern-baske.jpg",
    },
    {
      name: "Woven rattan box made in Vietnam",
      slug: "woven-rattan-box",
      description:
        "Handcrafted woven rattan box made in Vietnam from natural rattan and fern, perfect for stylish storage.",
      material: ["rattan"],
      category: "home-decor",
      url: "/product/woven-rattan-box",
      images:
        "https://media.handi-eco.vn/images/material/all-product/woven-rattan-box.jpg",
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
      images:
        "https://media.handi-eco.vn/images/material/all-product/woven-storage-basket-made-of-seagrass.jpg",
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
      images:
        "https://media.handi-eco.vn/images/material/all-product/pet-house-made-of-water-hyacinthynth.jpg",
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
      images:
        "https://media.handi-eco.vn/images/material/all-product/storage-basket-from-water-hyacinth.jpg",
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
      images:
        "https://media.handi-eco.vn/images/material/all-product/tissue-box-made-of-pine-wood.jpg",
    },
    {
      name: "Serving tray made of rattan and wood from Vietnam",
      slug: "serving-tray-made-of-rattan-and-wood",
      description:
        "Handcrafted serving tray made from pine wood and rattan cane webbing by Vietnam Handicraft company in Vietnam. A perfect blend of style and functionality for serving or decor.",
      material: ["wood"],
      category: "kitchen-dinning",
      url: "/product/serving-tray-made-of-rattan-and-wood",
      images:
        "https://media.handi-eco.vn/images/material/all-product/serving-tray-made-of-rattan-and-wood.jpg",
    },
    {
      name: "Tissue box made of rattan and pine wood in Vietnam",
      slug: "tissue-box-made-of-rattan-and-wood",
      description:
        "Rattan and pine wood tissue box, handcrafted in Vietnam by skilled artisans. This eco-friendly, durable tissue box adds a touch of natural elegance to any space.",
      material: ["wood"],
      category: "kitchen-dinning",
      url: "/product/tissue-box-made-of-rattan-and-wood",
      images:
        "https://media.handi-eco.vn/images/material/all-product/tissue-box-made-of-rattan-and-wood.jpg",
      new: true,
    },
    {
      name: "Loofah Sponge",
      slug: "natural-loofah-sponge",
      description:
        "Loofahs — sometimes spelled luffas — are popular shower accessories used for cleaning and exfoliating your skin. Some people think that “all-natural” loofahs are made of sea sponge or dried coral because of their coarse, spongy consistency. But natural loofahs are actually made from a gourd in the cucumber family.",
      material: ["loofah"],
      category: "bathroom-laundry",
      url: "/product/natural-loofah-sponge",
      images:
        "https://media.handi-eco.vn/images/material/all-product/natural-loofah-sponge.jpg",
      new: true,
    },
    {
      name: "Loofah Sponge",
      slug: "loofah-sponge",
      description:
        "Loofahs — sometimes spelled luffas — are popular shower accessories used for cleaning and exfoliating your skin. Some people think that “all-natural” loofahs are made of sea sponge or dried coral because of their coarse, spongy consistency. But natural loofahs are actually made from a gourd in the cucumber family.",
      material: ["loofah"],
      category: "bathroom-laundry",
      url: "/product/loofah-sponge",
      images:
        "https://media.handi-eco.vn/images/material/all-product/loofah-sponge.jpg",
      new: true,
    },
    {
      name: "Round tray made of bamboo in Vietnam",
      slug: "round-tray-made-of-bamboo",
      description: "Handcrafted round tray made of bamboo in Vietnam.",
      material: ["bamboo"],
      category: "kitchen-dinning",
      url: "/product/round-tray-made-of-bamboo",
      images:
        "https://media.handi-eco.vn/images/material/all-product/round-tray-made-of-bamboo.jpg",
    },
    {
      name: "Woven bamboo wall lamp made in Vietnam",
      slug: "woven-bamboo-wall-lamp",
      description:
        "Handcrafted bamboo basket made in Vietnam by skilled artisans",
      material: ["bamboo"],
      category: "home-decor",
      url: "/product/woven-bamboo-wall-lamp",
      images:
        "https://media.handi-eco.vn/images/material/all-product/woven-bamboo-wall-lamp.jpg",
    },
    {
      name: "Handmade coaster in heart shape",
      slug: "handmade-coaster-in-heart-shape",
      description:
        "Handmade heart-shaped coaster made of ceramic with a woven rattan border, crafted by skilled artisans from Vietnam Handicraft. Perfect for adding a natural, rustic touch to your home decor.",
      material: ["rattan"],
      category: "kitchen-dinning",
      url: "/product/handmade-coaster-in-heart-shape",
      images:
        "https://media.handi-eco.vn/images/material/all-product/handmade-coaster-in-heart-shape.jpg",
    },
    {
      name: "Oval tray made of ceramic with rattan in Vietnam",
      slug: "oval-tray-made-of-ceramic-with-rattan",
      description:
        "Oval tray made of ceramic with a colorful pattern and natural woven rattan, handcrafted by Vietnam Handicraft company. This tray combines the durability of ceramic with the rustic charm of rattan, making it perfect for serving or as a decorative piece.",
      material: ["rattan"],
      category: "kitchen-dinning",
      url: "/product/oval-tray-made-of-ceramic-with-rattan",
      images:
        "https://media.handi-eco.vn/images/material/all-product/oval-tray-made-of-ceramic-with-rattan.jpg",
    },
    {
      name: "Round placemat made of natural rattan in Vietnam",
      slug: "round-placemat-made-of-natural-rattan",
      description:
        "Handwoven round placemat made of natural rattan by skilled artisans at Vietnam Handicraft. Perfect for use as a placemat or as wall decor. Eco-friendly and beautifully crafted.",
      material: ["rattan"],
      category: "kitchen-dinning",
      url: "/product/round-placemat-made-of-natural-rattan",
      images:
        "https://media.handi-eco.vn/images/material/all-product/round-placemat-made-of-natural-rattan.jpg",
    },
    {
      name: "Black rattan lampshade manufacture in Vietnam",
      slug: "black-rattan-lampshade-manufacture-in-vietnam",
      description:
        "Handwoven black rattan lampshade, crafted in Vietnam by skilled artisans at Vietnam Handicraft. Perfect for adding a modern, natural touch to any room.",
      material: ["rattan"],
      category: "kitchen-dinning",
      url: "/product/black-rattan-lampshade-manufacture-in-vietnam",
      images:
        "https://media.handi-eco.vn/images/material/all-product/black-rattan-lampshade-manufacture-in-vietnam.jpg",
    },
    {
      name: "Rectangle seagrass storage basket",
      slug: "rectangle-seagrass-storage-basket",
      description:
        "Handwoven rectangle seagrass storage basket, crafted from natural, eco-friendly materials. Made by skilled artisans in Vietnam Handicraft, this durable basket offers versatile storage solutions for your home, while adding a rustic, natural aesthetic.",
      material: ["seagrass"],
      category: "home-decor",
      url: "/product/rectangle-seagrass-storage-basket",
      images:
        "https://media.handi-eco.vn/images/material/all-product/rectangle-seagrass-storage-basket.jpg",
    },
    {
      name: "Seagrass door mat made in Vietnam",
      slug: "seagrass-door-mat",
      description:
        "Hand-braided rectangular seagrass door mat made from natural materials by Vietnam Handicraft company. Eco-friendly, durable, and perfect for any entryway.",
      material: ["seagrass"],
      category: "home-decor",
      url: "/product/seagrass-door-mat",
      images:
        "https://media.handi-eco.vn/images/material/all-product/seagrass-door-mat.jpg",
    },
    {
      name: "Belly basket made of seagrass from Vietnam",
      slug: "belly-basket-made-of-seagrass-from-vietnam",
      description:
        "Handcrafted belly basket made from natural seagrass by Vietnam Handicraft. Ideal for storage, decoration, or as a plant holder, reflecting cultural heritage and supporting local artisans.",
      material: ["seagrass"],
      category: "home-decor",
      url: "/product/belly-basket-made-of-seagrass-from-vietnam",
      images:
        "https://media.handi-eco.vn/images/material/all-product/belly-basket-made-of-seagrass-from-vietnam.jpg",
    },
    {
      name: "Woven seagrass basket made in Vietnam",
      slug: "woven-seagrass-basket-made-in-vietnam",
      description:
        "Handwoven with precision by skilled artisans at Vietnam Handicraft Company, our Woven Seagrass Basket is a versatile storage solution. Made from natural seagrass, it exudes rustic charm while providing ample storage space. Perfect for organizing your home or adding a decorative accent, this eco-friendly basket reflects the artistry of Vietnam.",
      material: ["seagrass"],
      category: "home-decor",
      url: "/product/woven-seagrass-basket-made-in-vietnam",
      images:
        "https://media.handi-eco.vn/images/material/all-product/woven-seagrass-basket-made-in-vietnam.jpg",
    },
    {
      name: "Seagrass & jute storage basket made in Vietnam",
      slug: "seagrass-jute-storage-basket",
      description:
        "Handcrafted seagrass and jute storage basket from Vietnam Handicraft Company. Made from natural, eco-friendly materials, this basket is perfect for organizing your home in style.",
      material: ["seagrass"],
      category: "home-decor",
      url: "/product/seagrass-jute-storage-basket",
      images:
        "https://media.handi-eco.vn/images/material/all-product/seagrass-jute-storage-basket.jpg",
    },
    {
      name: "Fashion bag made of water-hyacinth from Vietnam",
      slug: "fashion-bag-made-of-water-hyacinth",
      description:
        "Discover eco-friendly fashion with our Fashion Bag made of water hyacinth by Vietnam Handicraft Company. Handcrafted in Vietnam, this stylish bag combines sustainable materials with artisanal craftsmanship, perfect for the modern, conscious consumer.",
      material: ["water-hyacinth"],
      category: "kitchen-dinning",
      url: "/product/fashion-bag-made-of-water-hyacinth",
      images:
        "https://media.handi-eco.vn/images/material/all-product/fashion-bag-made-of-water-hyacinth.jpg",
    },
    {
      name: "Lampshade made of water-hyacinth from Vietnam",
      slug: "lampshade-made-of-water-hyacinth",
      description:
        "Elevate your lighting with our Water-Hyacinth Lampshade, meticulously handwoven in Vietnam by Vietnam Handicraft. Crafted from sustainable water-hyacinth, this lampshade brings a unique, eco-friendly touch to your space.",
      material: ["water-hyacinth"],
      category: "home-decor",
      url: "/product/lampshade-made-of-water-hyacinth",
      images:
        "https://media.handi-eco.vn/images/material/all-product/lampshade-made-of-water-hyacinth.jpg",
    },
    {
      name: "Set of 3 water-hyacinth tray made in Vietnam",
      slug: "set-of-3-water-hyacinth-tray",
      description:
        "Discover the perfect fusion of functionality and natural beauty with our Set of 3 Water-Hyacinth Trays, handcrafted in Vietnam. Each tray is a testament to skilled artistry, woven from sustainable water-hyacinth.",
      material: ["water-hyacinth"],
      category: "bathroom-laundry",
      url: "/product/set-of-3-water-hyacinth-tray",
      images:
        "https://media.handi-eco.vn/images/material/all-product/set-of-3-water-hyacinth-tray.jpg",
    },
    {
      name: "Rubber wood Spoon made in Vietnam",
      slug: "rubber-wood-spoon",
      description:
        "Handcrafted rubber Wooden Spoon from Vietnam Handicraft, made from sustainable acacia wood. Durable, food-safe, and perfect for cooking or serving, it combines elegance with functionality.",
      material: ["wood"],
      category: "kitchen-dinning",
      url: "/product/rubber-wood-spoon",
      images:
        "https://media.handi-eco.vn/images/material/all-product/rubber-wood-spoon.jpg",
    },
    {
      name: "Acacia wood bowl from Vietnam",
      slug: "acacia-wood-bowl",
      description:
        "Our Acacia wood bowl is crafted from natural, food-safe wood. It’s an eco-friendly choice that adds a touch of rustic elegance to your kitchen.",
      material: ["wood"],
      category: "kitchen-dinning",
      url: "/product/acacia-wood-bowl",
      images:
        "https://media.handi-eco.vn/images/material/all-product/acacia-wood-bowl.jpg",
    },
    {
      name: "Water-hyacinth storage basket from Vietnam",
      slug: "water-hyacinth-storage-basket",
      description:
        "Enhance your living space with our Water-Hyacinth Storage Basket Set from Vietnam Handicraft. These eco-friendly baskets, woven from natural water-hyacinth with a sturdy metal frame, add a touch of organic elegance to any room. With two convenient handles, they offer easy mobility",
      material: ["water-hyacinth"],
      category: "home-decor",
      url: "/product/water-hyacinth-storage-basket",
      images:
        "https://media.handi-eco.vn/images/material/all-product/water-hyacinth-storage-basket.jpg",
    },
    {
      name: "Wooden cup manufacturer in Vietnam",
      slug: "wooden-cup-manufacturer",
      description: "Handcrafted wooden cup made in Vietnam.",
      material: ["wood"],
      category: "kitchen-dinning",
      url: "/product/wooden-cup-manufacturer",
      images:
        "https://media.handi-eco.vn/images/material/all-product/wooden-cup-manufacturer.jpg",
    },
    {
      name: "Chardin home Jute Braided Boho Oval Throw Rug",
      slug: "chardin-home-jute-braided-boho-oval-throw-rug",
      description:
        "Sophisticated Natural Earthen Charm; Jute rugs exude a rustic elegance. Their natural color and texture add warmth and character to any space. Whether your decor is coastal, farmhouse, or bohemian, a braided jute rug complements various styles",
      material: ["jute"],
      category: "home-decor",
      url: "/product/chardin-home-jute-braided-boho-oval-throw-rug",
      images:
        "https://media.handi-eco.vn/images/material/all-product/chardin-home-jute-braided-boho-oval-throw-rug.jpg",
    },
    {
      name: "Savi Home Hand Woven Jute Braided Scalloped Rug",
      slug: "savi-home-hand-woven-jute-braided-scalloped-rug",
      description:
        "Meticulously hand- Scalloped braided by skilled artisans, this 4' diameter round rug exudes the charm of traditional craftsmanship",
      material: ["jute"],
      category: "home-decor",
      url: "/product/savi-home-hand-woven-jute-braided-scalloped-rug",
      images:
        "https://media.handi-eco.vn/images/material/all-product/savi-home-hand-woven-jute-braided-scalloped-rug.jpg",
    },
    {
      name: "Handmade Tucked & Braided Round Jute Cotton Area Rug",
      slug: "handmade-tucked-braided-round-jute-cotton-area-rug",
      description:
        "Elevate your home décor with the Triangle Weavers Jute Cotton Area Rug, crafted from 100% natural jute fibers, blended with cotton sourced from India. Embrace the rustic elegance of pure style with this versatile natural cotton jute rug that seamlessly blends with any room—from the bedroom to the living room, dining room, kitchen, or hallway. Add a touch of warmth and sophistication to your space with our indoor area rug",
      material: ["jute"],
      category: "home-decor",
      url: "/product/handmade-tucked-braided-round-jute-cotton-area-rug",
      images:
        "https://media.handi-eco.vn/images/material/all-product/handmade-tucked-braided-round-jute-cotton-area-rug.jpg",
    },
    {
      name: "Hausattire Hand Woven Jute Crochet Rug",
      slug: "hausattire-hand-woven-jute-crochet-rug",
      description:
        "With its meticulous hand-woven crochet construction, this rug not only epitomizes farmhouse charm but also exudes bohemian and coastal vibes, creating a versatile aesthetic that suits various decor themes. The natural color palette adds an understated elegance, seamlessly blending with the existing decor in any room. Transform your space into a haven of style and comfort with this rug that embodies the perfect blend of craftsmanship and design",
      material: ["jute"],
      category: "home-decor",
      url: "/product/hausattire-hand-woven-jute-crochet-rug",
      images:
        "https://media.handi-eco.vn/images/material/all-product/hausattire-hand-woven-jute-crochet-rug.jpg",
    },
  ];
  return { products };
};

export default useProducts;
