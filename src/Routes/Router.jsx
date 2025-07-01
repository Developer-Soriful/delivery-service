import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Layouts/Home";
import Coverage from "../pages/Coverage";
import axios from "axios";
import Pricing from "../pages/Pricing";
import SignUp from "../pages/SignUp";


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
            },
            {
                path: "/Pricing",
                Component: Pricing,
                loader: () => fetch("../../public/data/warehouses.json")
            },
            {
                path: "/singUp",
                Component: SignUp,
            }
        ]
    }
])
