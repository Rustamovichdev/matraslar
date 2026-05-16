import { createBrowserRouter } from "react-router-dom";
import App from "../layout";
import { CustomersPage, OrdersPage } from "../pages";

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
        ],
    },
]);
