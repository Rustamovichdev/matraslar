import { lazy } from "react";

const OrdersPage = lazy(() => import("./orders"));
const CustomersPage = lazy(() => import("./customers"));
const Category = lazy(() => import("./category"));
const LocationPage = lazy(() => import("./location"));
const ProductsPage = lazy(() => import("./products"));

export { OrdersPage, CustomersPage, Category, LocationPage,ProductsPage };
