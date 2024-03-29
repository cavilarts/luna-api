import bcrypt from "bcryptjs";

export const users = [
  {
    name: "Admin User",
    email: "demo@mail.com",
    password: bcrypt.hashSync("123456", 10),
    phone: "1234567890",
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "test@mail.com",
    password: bcrypt.hashSync("123456", 10),
    phone: "1234567890",
    isAdmin: false,
  },
];

export const categories = [
  {
    name: "Earrings",
    image: "https://loremflickr.com/320/240/earrings",
  },
  {
    name: "Necklaces",
    image: "https://loremflickr.com/320/240/necklaces",
  },
  {
    name: "Rings",
    image: "https://loremflickr.com/320/240/rings",
  },
  {
    name: "Bracelets",
    image: "https://loremflickr.com/320/240/bracelets",
  },
  {
    name: "Anklets",
    image: "https://loremflickr.com/320/240/anklets",
  },
  {
    name: "Pendants",
    image: "https://loremflickr.com/320/240/pendants",
  },
  {
    name: "Chains",
    image: "https://loremflickr.com/320/240/chains",
  },
  {
    name: "Bangles",
    image: "https://loremflickr.com/320/240/bangles",
  },
  {
    name: "Brooches",
    image: "https://loremflickr.com/320/240/brooches",
  },
  {
    name: "Cufflinks",
    image: "https://loremflickr.com/320/240/cufflinks",
  },
  {
    name: "Tie Pins",
    image: "https://loremflickr.com/320/240/tiepins",
  },
  {
    name: "Nose Pins",
    image: "https://loremflickr.com/320/240/nosepins",
  },
  {
    name: "Toe Rings",
    image: "https://loremflickr.com/320/240/toerings",
  },
  {
    name: "Hair Accessories",
    image: "https://loremflickr.com/320/240/hairaccessories",
  },
  {
    name: "Others",
    image: "https://loremflickr.com/320/240/others",
  },
];

export const products = [
  {
    title: "Diamond Earrings",
    images: ["https://loremflickr.com/320/240/diamondearrings"],
    price: 100,
    description: "Diamond Earrings",
    category: "65f2fff79b7997bb882ade76",
    tags: ["Diamond", "Earrings"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Gold Earrings",
    images: ["https://loremflickr.com/320/240/goldearrings"],
    price: 100,
    description: "Gold Earrings",
    category: "65f2fff79b7997bb882ade76",
    tags: ["Gold", "Earrings"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Silver Earrings",
    images: ["https://loremflickr.com/320/240/silverearrings"],
    price: 100,
    description: "Silver Earrings",
    category: "65f2fff79b7997bb882ade76",
    tags: ["Silver", "Earrings"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Platinum Earrings",
    images: ["https://loremflickr.com/320/240/platinumearrings"],
    price: 100,
    description: "Platinum Earrings",
    category: "65f2fff79b7997bb882ade76",
    tags: ["Platinum", "Earrings"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Diamond Necklaces",
    images: ["https://loremflickr.com/320/240/diamondnecklaces"],
    price: 100,
    description: "Diamond Necklaces",
    category: "65f2fff79b7997bb882ade77",
    tags: ["Diamond", "Necklaces"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Gold Necklaces",
    images: ["https://loremflickr.com/320/240/goldnecklaces"],
    price: 100,
    description: "Gold Necklaces",
    category: "65f2fff79b7997bb882ade77",
    tags: ["Gold", "Necklaces"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Silver Necklaces",
    images: ["https://loremflickr.com/320/240/silvernecklaces"],
    price: 100,
    description: "Silver Necklaces",
    category: "65f2fff79b7997bb882ade77",
    tags: ["Silver", "Necklaces"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Platinum Necklaces",
    images: ["https://loremflickr.com/320/240/platinumnecklaces"],
    price: 100,
    description: "Platinum Necklaces",
    category: "65f2fff79b7997bb882ade77",
    tags: ["Platinum", "Necklaces"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Diamond Rings",
    images: ["https://loremflickr.com/320/240/diamondrings"],
    price: 100,
    description: "Diamond Rings",
    category: "65f2fff79b7997bb882ade78",
    tags: ["Diamond", "Rings"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Gold Rings",
    images: ["https://loremflickr.com/320/240/goldrings"],
    price: 100,
    description: "Gold Rings",
    category: "65f2fff79b7997bb882ade78",
    tags: ["Gold", "Rings"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Silver Rings",
    images: ["https://loremflickr.com/320/240/silverrings"],
    price: 100,
    description: "Silver Rings",
    category: "65f2fff79b7997bb882ade78",
    tags: ["Silver", "Rings"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Platinum Rings",
    images: ["https://loremflickr.com/320/240/platinumrings"],
    price: 100,
    description: "Platinum Rings",
    category: "65f2fff79b7997bb882ade78",
    tags: ["Platinum", "Rings"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Diamond Bracelets",
    images: ["https://loremflickr.com/320/240/diamondbracelets"],
    price: 100,
    description: "Diamond Bracelets",
    category: "65f2fff79b7997bb882ade79",
    tags: ["Diamond", "Bracelets"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Gold Bracelets",
    images: ["https://loremflickr.com/320/240/goldbracelets"],
    price: 100,
    description: "Gold Bracelets",
    category: "65f2fff79b7997bb882ade79",
    tags: ["Gold", "Bracelets"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Silver Bracelets",
    images: ["https://loremflickr.com/320/240/silverbracelets"],
    price: 100,
    description: "Silver Bracelets",
    category: "65f2fff79b7997bb882ade79",
    tags: ["Silver", "Bracelets"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Platinum Bracelets",
    images: ["https://loremflickr.com/320/240/platinumbracelets"],
    price: 100,
    description: "Platinum Bracelets",
    category: "65f2fff79b7997bb882ade79",
    tags: ["Platinum", "Bracelets"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Diamond Anklets",
    images: ["https://loremflickr.com/320/240/diamondanklets"],
    price: 100,
    description: "Diamond Anklets",
    category: "65f2fff79b7997bb882ade7a",
    tags: ["Diamond", "Anklets"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Gold Anklets",
    images: ["https://loremflickr.com/320/240/goldanklets"],
    price: 100,
    description: "Gold Anklets",
    category: "65f2fff79b7997bb882ade7a",
    tags: ["Gold", "Anklets"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
  {
    title: "Silver Anklets",
    images: ["https://loremflickr.com/320/240/silveranklets"],
    price: 100,
    description: "Silver Anklets",
    category: "65f2fff79b7997bb882ade7a",
    tags: ["Silver", "Anklets"],
    salesOffer: {
      status: true,
      discount: 10,
    },
    stock: 100,
  },
];
