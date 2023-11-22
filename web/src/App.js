import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {createContext, useEffect, useState} from "react";
import {Footer, Menu, Navbar} from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CardPage, FavouritesPage, HomePage, Page404, SearchPage} from "./pages";
import axios from "axios";
import { auth } from './api/api';
const MenuState = createContext([false, null]);

function App() {
    const [showMenu, setShowMenu] = useState(false);
    const [state, setState] = useState(null);
    const callBackendAPI = async () => {
       //тут запрос через axios на сервер
       auth()
    };

    // получение GET маршрута с сервера Express, который соответствует GET из server.js

    useEffect(() => {
        callBackendAPI()
            .catch(err => console.log(err));
    }, [])
    return (
        <MenuState.Provider value={[showMenu, setShowMenu]}>
            <BrowserRouter>
                <Menu isShow={showMenu} setShowMenu={setShowMenu}/>
                <Navbar setShowMenu={setShowMenu}/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/cart" element={<CardPage/>}/>
                    <Route path="/favourites" element={<FavouritesPage/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </MenuState.Provider>
    )
}

export default App;
//сделать запрос через axios(получить данные с бэка)
