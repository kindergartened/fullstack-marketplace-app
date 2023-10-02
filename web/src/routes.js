import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Page404 from './pages/Page404/Page404';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "*",
        element: <Page404/>,
    }
]);

export default router;