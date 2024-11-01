export type NavListType = {
  id: number;
  name: string;
  path: string;
};

export const navList: NavListType[] = [
  {
    id: 0,
    name: "home",
    path: "/",
  },
  {
    id: 1,
    name: "about",
    path: "about",
  },
  {
    id: 2,
    name: "contact",
    path: "contact",
  },
  {
    id: 3,
    name: "productList",
    path: "product",
  },
];
