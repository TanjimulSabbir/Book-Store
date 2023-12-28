import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import DynamicMain from "./DynamicMain";
import AddBook from "../Components/AddBook";
import EditBook from "../Components/EditBook";

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
            {
                path: "/addbook",
                element: <AddBook />
            },
            {
                path: "/editbook/:bookId",
                element: <EditBook />
            },
        ]
    },
]);

export default router;