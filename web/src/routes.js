import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from './pages/Page404';
import HomePage from './pages/HomePage';

const Router = () => {
    <Routes>
        <Route exact path ='/' component = {HomePage}/>
        <Route component={Page404}/>
    </Routes>
}

export default Router;