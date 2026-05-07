export type SidebarItem = {
  id: number;
  menuName: string;
  routePath: string;
  iconImage?: string;
  icon?: string;
  liClass?: string;
};

const sidebarData: SidebarItem[] = [
  {
    id: 1,
    iconImage: "/img/seb-headshot-closeup-256.svg",
    liClass: "seb-icon",
    menuName: "Sebastian",
    routePath: "/sebastian",
  },
  {
    id: 2,
    iconImage: "/img/svg/wrench.svg",
    menuName: "Services",
    routePath: "/services",
  },
  {
    id: 3,
    iconImage: "/img/svg/paper.svg",
    menuName: "Blog",
    routePath: "/blog",
  },
  {
    id: 4,
    iconImage: "/img/logo/favicon-256.svg",
    liClass: "hexonite-icon",
    menuName: "Say hello!",
    routePath: "/contact",
  },
];

export default sidebarData;
