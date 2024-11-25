import MainLayout from "../../layout/MainLayout";
import { privateRoutes } from "./privateRoutes";
import ProtectRoutes from "./ProtectRoutes";

export const getRoutes = () => {
  privateRoutes.map((routeObject) => {
    routeObject.element = (
      <ProtectRoutes route={routeObject}> {routeObject.element}</ProtectRoutes>
    );
  });

  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};
