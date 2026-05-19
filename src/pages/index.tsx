import { lazy } from "react";

const OrdersPage = lazy(() => import("./orders"));
const CustomersPage = lazy(() => import("./customers"));
const Category = lazy(() => import("./category"));

export { OrdersPage, CustomersPage, Category };
