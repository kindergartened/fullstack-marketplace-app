import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Page404 from './pages/Page404/Page404';
import HomePage from './pages/HomePage';
import SearchPage from "./pages/SearchPage/SearchPage";
import CardPage from "./pages/CardPage/CardPage"

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
        path: "*",
        element: <Page404/>,
    }
]);

export default router;