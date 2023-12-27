import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import DynamicMain from "./DynamicMain";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/main",
                element: <DynamicMain />
            },
        ]
    },
]);

export default router;