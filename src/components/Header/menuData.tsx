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
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Team",
    path: "/team",
    newTab: false,
  },
  {
    id: 4,
    title: "Case Studies",
    path: "/case-studies",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 6,
    title: "Support",
    path: "/contact",
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
      {
        id: 44,
        title: "Case Studies Page",
        path: "/case-studies",
        newTab: false,
      },
      {
        id: 45,
        title: "Case Study Details",
        path: "/case-study-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 47,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 48,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 49,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 50,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 51,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];

export default menuData;
