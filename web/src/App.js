import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {createContext, useState} from "react";
import {Menu, Navbar, Footer, AuMod, ModalImgComponent} from "./components";
import {CardPage, FavouritesPage, HomePage, Page404, SearchPage} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const MenuState = createContext([false, null]);

function App() {
    const [modalActive, setModalActive] = useState(true);
    const [auActive, setAuActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <MenuState.Provider value={[showMenu, setShowMenu]}>
            <BrowserRouter>
                <AuMod active={auActive} setActive={setAuActive}/>
                <ModalImgComponent active={modalActive} setActive={setModalActive}/>

                <Menu isShow={showMenu} setShowMenu={setShowMenu}/>
                <Navbar setShowMenu={setShowMenu} setAuActive={setAuActive}/>
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
