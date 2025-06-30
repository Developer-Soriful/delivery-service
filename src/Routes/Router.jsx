import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Layouts/Home";
import Coverage from "../pages/Coverage";
import axios from "axios";


// router provider 
export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            {
                path: "/Coverage",
                Component: Coverage,
                loader: () => fetch("../../public/data/warehouses.json")
            }
        ]
    }
])
