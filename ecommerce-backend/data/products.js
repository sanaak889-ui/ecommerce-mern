
const products = [
  {
    name: "Men Casual Shirt",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Men",
    subSubcategory: "T-Shirts",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Men Polo Shirt",
    brand: "Wakiki",
    price: 1650,
    oldPrice: 3500,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Men",
    subSubcategory: "Polos",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Men Hoodie Shirt",
    brand: "CLAFOUTIS",
    price: 2500,
    oldPrice: 4500,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 5,
    reviews: 18,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Men",
    subSubcategory: "Hoodies&Sweatshirts",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Men Jacket",
    brand: "CLAFOUTIS",
    price: 8500,
    oldPrice: 10500,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 5,
    reviews: 30,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Men",
    subSubcategory: "Jackets&Coats",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Men Kurta Shalwar",
    brand: "J.",
    price: 4500,
    oldPrice: 8500,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 5,
    reviews: 30,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Men",
    subSubcategory: "Ethnic-Wear",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Men Jeans",
    brand: "J.",
    price: 4500,
    oldPrice: 8500,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 5,
    reviews: 30,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Men",
    subSubcategory: "Pants",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Men Jockey",
    brand: "Jockey",
    price: 4500,
    oldPrice: 8500,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 5,
    reviews: 30,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Men",
    subSubcategory: "Innerwear",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },

  //Women section 
  {
    name: "Women Top",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Women",
    subSubcategory: "Tops&Tees",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Women Dress",
    brand: "CLAFOUTIS",
    price: 11000,
    oldPrice: 16500,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Women",
    subSubcategory: "Dresses",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Women Kameez Trouser",
    brand: "CLAFOUTIS",
    price: 15500,
    oldPrice: 24950,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Women",
    subSubcategory: "Kurtis&Ethnic",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Women Jeans",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Women",
    subSubcategory: "Jeans&Pants",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Women Skirts",
    brand: "CLAFOUTIS",
    price: 3000,
    oldPrice: 4500,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Women",
    subSubcategory: "Skirts",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Women Inner",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Women",
    subSubcategory: "Innerwear",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },

  //kids section
  {
    name: "Boys Dress",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Boys-Clothing",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Girl Dress",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Girls-Clothing",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Boys TShirt",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "T-Shirts",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Girls TShirt",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "T-Shirts",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Boys Jeans",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Shorts&Jeans",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
   {
    name: "Girls Jeans",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Shorts&Jeans",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
   {
    name: "Boys Winter Dress",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Winter-Wear",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
   {
    name: "Girls Winter Dress",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Winter-Wear",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
   {
    name: "Boys Summer Dress",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Summer-Wear",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
   {
    name: "Girls Summer Dress",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "Kids",
    subSubcategory: "Summer-Wear",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },

  //unisex section
   {
    name: "Unisex Shirt",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "unisex",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Unisex Shirt",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "unisex",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Unisex Shirt",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "unisex",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },

  //Best-seller section
  {
    name: "Unisex Shirt",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "best-seller",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Women Jeans",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "best-seller",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Men Jeans",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "best-seller",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "Men Shirt",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "best-seller",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },
  {
    name: "women Dress",
    brand: "CLAFOUTIS",
    price: 1450,
    oldPrice: 1650,
    description:
      "High quality casual shirt, perfect for everyday wear. Soft, durable, and stylish.",
    rating: 4,
    reviews: 24,

    // ✅ CATEGORY HIERARCHY (THIS FIXES NAVBAR)
    category: "Fashion",
    subcategory: "best-seller",

    // ✅ STOCK SYSTEM (REQUIRED)
    countInStock: 17,
    sizesStock: [
      { size: "S", qty: 6 },
      { size: "M", qty: 7 },
      { size: "L", qty: 4 }
    ],

    // ✅ FLAGS
    isFeatured: true,
    isPopular: true,
    isLatest: true,

    // ✅ IMAGES
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"]
  },

  //Sale section 
   {
    name: "Kashee",
    brand: "CLAFOUTIS",
    category: "Fashion",
    subcategory: "Sale",
    images: ["/fgh1.jpg", "/fgL1.jpg"],
    price: 2800,
    oldPrice: 4000,
    description:
      "Trendy Kashee outfit, premium fabric, perfect for casual and semi-formal occasions.",
    rating: 5,
    reviews: 12,
    sizesStock: [
      { size: "S", qty: 3 },
      { size: "M", qty: 4 },
      { size: "L", qty: 3 }
    ],
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  
   {
    name: "Kashee",
    brand: "CLAFOUTIS",
    category: "Fashion",
    subcategory: "Sale",
    images: ["/fgh1.jpg", "/fgL1.jpg"],
    price: 2800,
    oldPrice: 4000,
    description:
      "Trendy Kashee outfit, premium fabric, perfect for casual and semi-formal occasions.",
    rating: 5,
    reviews: 12,
    sizesStock: [
      { size: "S", qty: 3 },
      { size: "M", qty: 4 },
      { size: "L", qty: 3 }
    ],
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
   {
    name: "Kashee",
    brand: "CLAFOUTIS",
    category: "Fashion",
    subcategory: "Sale",
    images: ["/fgh1.jpg", "/fgL1.jpg"],
    price: 2800,
    oldPrice: 4000,
    description:
      "Trendy Kashee outfit, premium fabric, perfect for casual and semi-formal occasions.",
    rating: 5,
    reviews: 12,
    sizesStock: [
      { size: "S", qty: 3 },
      { size: "M", qty: 4 },
      { size: "L", qty: 3 }
    ],
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Kashee",
    brand: "CLAFOUTIS",
    category: "Fashion",
    subcategory: "Sale",
    images: ["/fgh1.jpg", "/fgL1.jpg"],
    price: 2800,
    oldPrice: 4000,
    description:
      "Trendy Kashee outfit, premium fabric, perfect for casual and semi-formal occasions.",
    rating: 5,
    reviews: 12,
    sizesStock: [
      { size: "S", qty: 3 },
      { size: "M", qty: 4 },
      { size: "L", qty: 3 }
    ],
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  
   {
    name: "Kashee",
    brand: "CLAFOUTIS",
    category: "Fashion",
    subcategory: "Sale",
    images: ["/fgh1.jpg", "/fgL1.jpg"],
    price: 2800,
    oldPrice: 4000,
    description:
      "Trendy Kashee outfit, premium fabric, perfect for casual and semi-formal occasions.",
    rating: 5,
    reviews: 12,
    sizesStock: [
      { size: "S", qty: 3 },
      { size: "M", qty: 4 },
      { size: "L", qty: 3 }
    ],
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
   {
    name: "Kashee",
    brand: "CLAFOUTIS",
    category: "Fashion",
    subcategory: "Sale",
    images: ["/fgh1.jpg", "/fgL1.jpg"],
    price: 2800,
    oldPrice: 4000,
    description:
      "Trendy Kashee outfit, premium fabric, perfect for casual and semi-formal occasions.",
    rating: 5,
    reviews: 12,
    sizesStock: [
      { size: "S", qty: 3 },
      { size: "M", qty: 4 },
      { size: "L", qty: 3 }
    ],
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },





  
  /* =========================
     ELECTRONICS → LAPTOPS
  ========================= */

  {
    name: "Laptop",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "Laptops",
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"],
    price: 1500,
    oldPrice: 2000,
    description: "High performance laptop for daily use.",
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Laptop",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "Laptops",
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"],
    price: 1500,
    oldPrice: 2000,
    description: "High performance laptop for daily use.",
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Laptop",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "Laptops",
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"],
    price: 1500,
    oldPrice: 2000,
    description: "High performance laptop for daily use.",
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  /* =========================
     ELECTRONICS → PHONES
  ========================= */

  {
    name: "Phone",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "phone",
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"],
    price: 1500,
    oldPrice: 2000,
    description: "Latest smartphone with powerful performance.",
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
   {
    name: "Phone",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "phone",
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"],
    price: 1500,
    oldPrice: 2000,
    description: "Latest smartphone with powerful performance.",
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
   {
    name: "Phone",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "phone",
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"],
    price: 1500,
    oldPrice: 2000,
    description: "Latest smartphone with powerful performance.",
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
   {
    name: "Phone",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "phone",
    images: ["/fgL13.jpg", "/fg13.jpg", "/fgL15.jpg"],
    price: 1500,
    oldPrice: 2000,
    description: "Latest smartphone with powerful performance.",
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  // electronics SmartGadgets
  {
    name: "Watch",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "SmartGadgets",
    images: ["/WW1.jpg", "/WW2.jpg"],
    price: 1500,
    oldPrice: 2000,
    description: "Smart watch with fitness tracking.",
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },

  {
    name: "Smart Gadgets",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "SmartGadgets",
    images: ["/WW1.jpg", "/WW2.jpg"],
    price: 1500,
    oldPrice: 2000,
    description: "Latest smart gadgets for daily life.",
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Intel",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "SmartGadgets",
    images: ["/WW1.jpg", "/WW2.jpg"],
    price: 1500,
    oldPrice: 2000,
    discount: 25,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Headphones",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "SmartGadgets",
    images: ["/WW1.jpg", "/WW2.jpg"],
    price: 1500,
    oldPrice: 2000,
    discount: 25,
    rating: 4,
    countInStock: 0,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Watch",
    brand: "CLAFOUTIS",
    category: "Electronics",
    subcategory: "SmartGadgets",
    images: ["/WW1.jpg", "/WW2.jpg"],
    price: 1500,
    oldPrice: 2000,
    discount: 25,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },

  // Bags section
  {
    name: "Coach",
    brand: "CLAFOUTIS",
    category: "Bags",
    images: ["/BG1.jpg", "/BG2.jpg"],
    price: 3200,
    oldPrice: 4500,
    discount: 20,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "CoachNew",
    brand: "CLAFOUTIS",
    category: "Bags",
    images: ["/BG1.jpg", "/BG2.jpg"],
    price: 3200,
    oldPrice: 4500,
    discount: 20,
    rating: 3,
    countInStock: 0,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Coachghb",
    brand: "CLAFOUTIS",
    category: "Bags",
    images: ["/BG1.jpg", "/BG2.jpg"],
    price: 3200,
    oldPrice: 4500,
    discount: 20,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "CoachDef",
    brand: "CLAFOUTIS",
    category: "Bags",
    images: ["/BG1.jpg", "/BG2.jpg"],
    price: 3200,
    oldPrice: 4500,
    discount: 20,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },

  //Footwear section
  {
    name: "Men Running Shoes",
    brand: "CLAFOUTIS",
    category: "Footwear",
    subcategory: "Men",
    images: ["/FS1.jpg", "/FS2.jpg"],
    price: 1800,
    oldPrice: 4000,
    discount: 30,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Men Running Shoesun",
    brand: "CLAFOUTIS",
    category: "Footwear",
    subcategory: "Men",
    images: ["/FS1.jpg", "/FS2.jpg"],
    price: 1800,
    oldPrice: 4000,
    discount: 30,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Men Running Shoesun",
    brand: "CLAFOUTIS",
    category: "Footwear",
    subcategory: "Men",
    images: ["/FS1.jpg", "/FS2.jpg"],
    price: 1800,
    oldPrice: 4000,
    discount: 30,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Women Running Shoes",
    brand: "CLAFOUTIS",
    category: "Footwear",
    subcategory: "Women",
    images: ["/FS1.jpg", "/FS2.jpg"],
    price: 1800,
    oldPrice: 4000,
    discount: 30,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Women Runningvb Shoes",
    brand: "CLAFOUTIS",
    category: "Footwear",
    subcategory: "Women",
    images: ["/FS1.jpg", "/FS2.jpg"],
    price: 1800,
    oldPrice: 4000,
    discount: 30,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Men Running Shoesun",
    brand: "CLAFOUTIS",
    category: "Footwear",
    subcategory: "Women",
    images: ["/FS1.jpg", "/FS2.jpg"],
    price: 1800,
    oldPrice: 4000,
    discount: 30,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Women Runningvb Shoes",
    brand: "CLAFOUTIS",
    category: "Footwear",
    subcategory: "Kids",
    images: ["/FS1.jpg", "/FS2.jpg"],
    price: 1800,
    oldPrice: 4000,
    discount: 30,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Men Running Shoesun",
    brand: "CLAFOUTIS",
    category: "Footwear",
    subcategory: "Kids",
    images: ["/FS1.jpg", "/FS2.jpg"],
    price: 1800,
    oldPrice: 4000,
    discount: 30,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Women Runningvb Shoes",
    brand: "CLAFOUTIS",
    category: "Footwear",
    subcategory: "kids",
    images: ["/FS1.jpg", "/FS2.jpg"],
    price: 1800,
    oldPrice: 4000,
    discount: 30,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Men Running Shoesun",
    brand: "CLAFOUTIS",
    category: "Footwear",
    subcategory: "kids",
    images: ["/FS1.jpg", "/FS2.jpg"],
    price: 1800,
    oldPrice: 4000,
    discount: 30,
    rating: 4,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },

  //Grocery Section
  {
    name: "Lays",
    brand: "CLAFOUTIS",
    category: "Groceries",
    images: ["/LY1.jpg", "/LY2.jpg"],
    price: 500,
    oldPrice: 200,
    discount: 25,
    rating: 5,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Laysa",
    brand: "CLAFOUTIS",
    category: "Groceries",
    images: ["/LY1.jpg", "/LY2.jpg"],
    price: 500,
    oldPrice: 200,
    discount: 25,
    rating: 5,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Laysbb",
    brand: "CLAFOUTIS",
    category: "Groceries",
    images: ["/LY1.jpg", "/LY2.jpg"],
    price: 500,
    oldPrice: 200,
    discount: 25,
    rating: 5,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Laybvs",
    brand: "CLAFOUTIS",
    category: "Groceries",
    images: ["/LY1.jpg", "/LY2.jpg"],
    price: 500,
    oldPrice: 200,
    discount: 25,
    rating: 5,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },

  //Beauty Section
  
  {
    name: "Makeup",
    brand: "Dior",
    category: "Beauty",
    images: ["/CC.jpg", "/CC1.jpg"],
    price: 3200,
    oldPrice: 4500,
    discount: 20,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Makeup",
    brand: "NYC",
    category: "Beauty",
    images: ["/CC.jpg", "/CC1.jpg"],
    price: 3200,
    oldPrice: 4500,
    discount: 20,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "MakeUp",
    brand: "NYC",
    category: "Beauty",
    images: ["/V1.jpg", "/V2.jpg"],
    price: 3200,
    oldPrice: 4500,
    discount: 20,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Vaseline",
    brand: "CLAFOUTIS",
    category: "Beauty",
    images: ["/V1.jpg", "/V2.jpg"],
    price: 3200,
    oldPrice: 4500,
    discount: 20,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Vaselinenmn",
    brand: "CLAFOUTIS",
    category: "Beauty",
    images: ["/CC.jpg", "/CC1.jpg"],
    price: 3200,
    oldPrice: 4500,
    discount: 20,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Vaselinnjhe",
    brand: "CLAFOUTIS",
    category: "Beauty",
    images: ["/V1.jpg", "/V2.jpg"],
    price: 3200,
    oldPrice: 4500,
    discount: 20,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },

  //Accessories 
  {
    name: "EarRing ",
    brand: "CLAFOUTIS",
    category: "Accessories",
    images: ["/WM1.jpg", "/WM2.jpg"],
    price: 2800,
    oldPrice: 4000,
    discount: 30,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Vitamin-Ce",
    brand: "CLAFOUTIS",
    category: "Accessories",
    images: ["/WM1.jpg", "/WM2.jpg"],
    price: 2800,
    oldPrice: 4000,
    discount: 30,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Vitamin-njhC",
    brand: "CLAFOUTIS",
    category: "Accessories",
    images: ["/WM1.jpg", "/WM2.jpg"],
    price: 2800,
    oldPrice: 4000,
    discount: 30,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Hair-Pins",
    brand: "CLAFOUTIS",
    category: "Accessories",
    images: ["/WM1.jpg", "/WM2.jpg"],
    price: 2800,
    oldPrice: 4000,
    discount: 30,
    rating: 3,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },

  //Jewellery Section
  {
    name: "Tesoro",
    brand: "CLAFOUTIS",
    category: "Jewellery",
    images: ["/JR.jpg", "/JR1.jpg"],
    price: 1500,
    oldPrice: 2000,
    discount: 25,
    rating: 2,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Tesoronmn",
    brand: "CLAFOUTIS",
    category: "Jewellery",
    images: ["/JR.jpg", "/JR1.jpg"],
    price: 1500,
    oldPrice: 2000,
    discount: 25,
    rating: 2,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },

  {
    name: "Tesoronnnn",
    brand: "CLAFOUTIS",
    category: "Jewellery",
    images: ["/JR.jpg", "/JR1.jpg"],
    price: 1500,
    oldPrice: 2000,
    discount: 25,
    rating: 2,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
  {
    name: "Tescoyui",
    brand: "CLAFOUTIS",
    category: "Jewellery",
    images: ["/JR.jpg", "/JR1.jpg"],
    price: 1500,
    oldPrice: 2000,
    discount: 25,
    rating: 2,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Tescoui",
    brand: "CLAFOUTIS",
    category: "Jewellery",
    images: ["/JR.jpg", "/JR1.jpg"],
    price: 1500,
    oldPrice: 2000,
    discount: 25,
    rating: 2,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },

  //Furniture Section
  {
    name: "King Size Bed",
    brand: "IKEA",
    price: 200,
    oldPrice: 300,
    discount: 33,
    description: "Comfortable king size bed with premium wood finish.",
    rating: 4,
    reviews: 12,
    shippingEstimate: "7-10",
    images: ["/FR1.jpg", "/FR1b.jpg", "/FR1c.jpg"],
    category: "Furniture",
    subcategory: "Bedroom",
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
   {
    name: "King Size Bed",
    brand: "IKEA",
    price: 200,
    oldPrice: 300,
    discount: 33,
    description: "Comfortable king size bed with premium wood finish.",
    rating: 4,
    reviews: 12,
    shippingEstimate: "7-10",
    images: ["/FR1.jpg", "/FR1b.jpg", "/FR1c.jpg"],
    category: "Furniture",
    subcategory: "Bedroom",
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
   {
    name: "King Size Bed",
    brand: "IKEA",
    price: 200,
    oldPrice: 300,
    discount: 33,
    description: "Comfortable king size bed with premium wood finish.",
    rating: 4,
    reviews: 12,
    shippingEstimate: "7-10",
    images: ["/FR1.jpg", "/FR1b.jpg", "/FR1c.jpg"],
    category: "Furniture",
    subcategory: "Bedroom",
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },
  {
    name: "Leather Sofa",
    brand: "HomeTown",
    price: 350,
    oldPrice: 500,
    discount: 30,
    description: "Premium leather sofa, perfect for living room.",
    rating: 5,
    reviews: 8,
    shippingEstimate: "7-10",
    images: ["/FR2.jpg", "/FR2b.jpg", "/FR2c.jpg"],
    category: "Furniture",
    subcategory: "LivingRoom",
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: false
  },

  //Perfume section 
  {
    name: "Miss Dior",
    brand: "Dior",
    price: 120,
    oldPrice: 150,
    discount: 20,
    description: "Fragrance for women, elegant and long-lasting.",
    rating: 5,
    reviews: 10,
    shippingEstimate: "3-5",
    images: ["/P1.jpg", "/P1b.jpg", "/P1c.jpg"],
    category: "Perfumes",
    subcategory: null,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
   {
    name: "Miss Dior",
    brand: "Dior",
    price: 120,
    oldPrice: 150,
    discount: 20,
    description: "Fragrance for women, elegant and long-lasting.",
    rating: 5,
    reviews: 10,
    shippingEstimate: "3-5",
    images: ["/P1.jpg", "/P1b.jpg", "/P1c.jpg"],
    category: "Perfumes",
    subcategory: null,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
   {
    name: "Miss Dior",
    brand: "Dior",
    price: 120,
    oldPrice: 150,
    discount: 20,
    description: "Fragrance for women, elegant and long-lasting.",
    rating: 5,
    reviews: 10,
    shippingEstimate: "3-5",
    images: ["/P1.jpg", "/P1b.jpg", "/P1c.jpg"],
    category: "Perfumes",
    subcategory: null,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
   {
    name: "Miss Dior",
    brand: "Dior",
    price: 120,
    oldPrice: 150,
    discount: 20,
    description: "Fragrance for women, elegant and long-lasting.",
    rating: 5,
    reviews: 10,
    shippingEstimate: "3-5",
    images: ["/P1.jpg", "/P1b.jpg", "/P1c.jpg"],
    category: "Perfumes",
    subcategory: null,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },
   {
    name: "Miss Dior",
    brand: "Dior",
    price: 120,
    oldPrice: 150,
    discount: 20,
    description: "Fragrance for women, elegant and long-lasting.",
    rating: 5,
    reviews: 10,
    shippingEstimate: "3-5",
    images: ["/P1.jpg", "/P1b.jpg", "/P1c.jpg"],
    category: "Perfumes",
    subcategory: null,
    countInStock: 10,
    isPopular: true,
    isFeatured: true,
    isLatest: true
  },





];





export default products;