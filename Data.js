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
