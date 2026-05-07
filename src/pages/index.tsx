import { lazy } from "react";

const OrdersPage = lazy(() => import("./orders"));
const CustomersPage = lazy(() => import("./customers"));

export { OrdersPage, CustomersPage };
