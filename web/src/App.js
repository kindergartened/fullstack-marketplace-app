import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {createContext, useEffect, useState} from "react";
import {Footer, Menu, Navbar} from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CardPage, FavouritesPage, HomePage, Page404, SearchPage} from "./pages";

const MenuState = createContext([false, null]);

function App() {
    const [showMenu, setShowMenu] = useState(false);
    const [state, setState] = useState(null);
    const callBackendAPI = async () => {
        const response = await fetch('/api/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    // получение GET маршрута с сервера Express, который соответствует GET из server.js

    useEffect(() => {
        callBackendAPI()
            .then(res => setState(res.express))
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
