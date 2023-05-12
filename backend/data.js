//import bcrypt from "bcrypt";

const data = {
  users: [
    {
      username: "Basir",
      email: "admin@example.com",

      password: "123456",
      isAdmin: true,

      /* password: bcrypt.hashSync("123456"),
      role: admin, */
    },
    {
      username: "John",
      email: "user@example.com",
      //password: bcrypt.hashSync("123456"),
      //role: user,
    },
  ],
  products: [
    {
      // _id: '1',
      nameproduct: "Armario antiguo",
      slug: "armario siglo XI",
      image: "/images/deco.png",
      description: "high quality",
      countInStock: 1,
      price: 120,
      createDate: "13/02/2023",
      idartist: "Idoya",
      category: "decoration",
    },
    {
      // _id: '2',
      nameproduct: "Deco friends",
      slug: "decoracion friends",
      image: "/images/mueble.png",
      description: "high quality",
      countInStock: 1,
      price: 250,
      createDate: "13/02/2023",
      idartist: "Vicky",
      category: "decoration",
    },
    {
      // _id: '3',
      nameproduct: "Bola Navidad Miki",
      slug: "navidad miki",
      image: "/images/miki.png",
      description: "high quality product",
      countInStock: 1,
      price: 25,
      createDate: "13/02/2023",
      idartist: "Unai",
      category: "decoration",
    },
    {
      // _id: '4',
      nameproduct: "bola navidad",
      slug: "bola santa",
      image: "/images/santa1.png",
      description: "high quality product",
      countInStock: 5,
      price: 65,
      createDate: "13/02/2023",
      idartist: "Unai",
      category: "decoration",
    },
  ],
};
export default data;
