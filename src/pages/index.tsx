import { lazy } from "react";

const OrdersPage = lazy(() => import("./orders"));
const Category = lazy(() => import("./category"));
const LocationPage = lazy(() => import("./location"));
const ProductsPage = lazy(() => import("./products"));
const TechnologyPage = lazy(() => import("./technology"));
const CustomersPage = lazy(() => import("./customers"));

export {
    OrdersPage,
    Category,
    LocationPage,
    ProductsPage,
    TechnologyPage,
    CustomersPage,
};
