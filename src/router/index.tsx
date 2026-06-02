import { createBrowserRouter } from "react-router-dom";
import App from "../layout";
import {
    Category,
    CustomersPage,
    LocationPage,
    OrdersPage,
    ProductsPage,
    TechnologyPage,
} from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/orders",
                element: <OrdersPage />,
            },
            {
                path: "/customers",
                element: <CustomersPage />,
            },
            {
                path: "/categories",
                element: <Category />,
            },
            {
                path: "/addresse",
                element: <LocationPage />,
            },
            {
                path: "/products",
                element: <ProductsPage />,
            },
            {
                path: "/technology",
                element: <TechnologyPage />,
            },
        ],
    },
]);
