import { lazy } from "react";

const OrdersPage = lazy(() => import("./orders"));
const CustomersPage = lazy(() => import("./customers"));
const Category = lazy(() => import("./category"));
const LocationPage = lazy(() => import("./location"));

export { OrdersPage, CustomersPage, Category, LocationPage };
