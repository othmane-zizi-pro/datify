import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Solutions",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Case Studies",
    path: "/case-studies",
    newTab: false,
  },
  {
    id: 6,
    title: "Methodology",
    path: "/contact",
    newTab: false,
  },

  {
    id: 3,
    title: "Team",
    path: "/team",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },

  {
    id: 7,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Team Page",
        path: "/team",
        newTab: false,
      },
      {
        id: 43,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
   
    ],
  },
];

export default menuData;
