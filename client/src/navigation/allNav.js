import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";

export const allNav = [
  // admin navigation
  {
    id: 1,
    title: "Dashboard",
    icon: <MdOutlineDashboardCustomize />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <BiCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: <FaUsers />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <MdPayment />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Customers",
    icon: <FaUserTimes />,
    role: "admin",
    path: "/admin/dashboard/customers",
  },
  {
    id: 7,
    title: "Coupon",
    icon: <FaCodePullRequest />,
    role: "admin",
    path: "/admin/dashboard/coupon",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <IoIosChatbubbles />,
    role: "admin",
    path: "/admin/dashboard/chat-seller",
  },
  // seller navigation
  {
    id: 1,
    title: "Dashboard",
    icon: <MdOutlineDashboardCustomize />,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 2,
    title: "All Product",
    icon: <MdOutlineDashboardCustomize />,
    role: "seller",
    path: "/seller/dashboard/all-product",
  },
  {
    id: 3,
    title: "add Product",
    icon: <MdOutlineDashboardCustomize />,
    role: "seller",
    path: "/seller/dashboard/add-product",
  },
  {
    id: 4,
    title: "Offer Product",
    icon: <MdOutlineDashboardCustomize />,
    role: "seller",
    path: "/seller/dashboard/offer",
  },
  {
    id: 5,
    title: "Orders",
    icon: <MdOutlineDashboardCustomize />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 6,
    title: "Payments",
    icon: <MdOutlineDashboardCustomize />,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 7,
    title: "Chat Support",
    icon: <MdOutlineDashboardCustomize />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
  {
    id: 8,
    title: "Chat Customer",
    icon: <MdOutlineDashboardCustomize />,
    role: "seller",
    path: "/seller/dashboard/chat-customer",
  },
];
