import { allNav } from "./allNav";

export const getNav = (role) => {
  const finalNav = [];
  for (const navItem of allNav) {
    if (navItem.role === role) {
      finalNav.push(navItem);
    }
  }
  return finalNav;
};
