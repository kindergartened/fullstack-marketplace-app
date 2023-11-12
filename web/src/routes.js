import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {CardPage, FavouritesPage, HomePage, Page404, SearchPage} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
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
        path: "/favourites",
        element: <FavouritesPage/>
    },
    {
        path: "*",
        element: <Page404/>,
    }
]);

export default router;