import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {HomePage, Cart, Page404, Favourites} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/favourites",
        element: <Favourites/>
    },
    {
        path: "/search",
        element: <SearchPage/>,
    },
    {
        path: "/cart",
        element: <CardPage/>,
    },
    {
        path: "*",
        element: <Page404/>,
    }
]);

export default router;