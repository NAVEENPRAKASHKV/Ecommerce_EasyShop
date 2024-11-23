import { lazy } from "react";

const Home = lazy(() => import("../../views/pages/Home"));
const SellerDashboard = lazy(() =>
  import("./../../views/seller/SellerDashboard")
);

const AllProduct = lazy(() => import("./../../views/seller/AllProduct"));
const AddProduct = lazy(() => import("./../../views/seller/AddProduct"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/all-product",
    element: <AllProduct />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    ability: ["admin", "seller"],
  },
];
