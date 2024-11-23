import { lazy } from "react";

const Home = lazy(() => import("../../views/pages/Home"));
const SellerDashboard = lazy(() =>
  import("./../../views/seller/SellerDashboard")
);

const AllProduct = lazy(() => import("./../../views/seller/AllProduct"));
const AddProduct = lazy(() => import("./../../views/seller/AddProduct"));
const SellerOrders = lazy(() => import("./../../views/seller/SellerOrders"));
const EditProduct = lazy(() => import("./../../views/seller/EditProduct"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/all-product",
    element: <AllProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <SellerOrders />,
    role: "seller",
    ability: ["active", "deactive"],
  },
];
