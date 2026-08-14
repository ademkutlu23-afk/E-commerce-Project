import dep1 from "../assets/dep1.png";
import dep2 from "../assets/dep2.png";
import dep3 from "../assets/dep3.png";
import dep4 from "../assets/dep4.png";
import dep5 from "../assets/dep5.png";
import dep6 from "../assets/dep6.png";
import dep7 from "../assets/dep7.png";
import dep8 from "../assets/dep8.png";
import dep9 from "../assets/dep9.png";
import dep10 from "../assets/dep10.png";
import dep11 from "../assets/dep11.png";
import dep12 from "../assets/dep12.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";

const homeProductImages = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];

export const products = [
  {
    id: 1,
    image: dep1,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    image: dep2,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 3,
    image: dep3,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 4,
    image: dep4,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 5,
    image: dep5,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 6,
    image: dep6,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 7,
    image: dep7,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 8,
    image: dep8,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 9,
    image: dep9,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 10,
    image: dep10,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 11,
    image: dep11,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 12,
    image: dep12,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  ...homeProductImages.map((image, index) => ({
    id: index + 13,
    image,
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  })),
];
