import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Layouts/Home";


// router provider 
export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home }
        ]
    }
])
