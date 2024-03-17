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
