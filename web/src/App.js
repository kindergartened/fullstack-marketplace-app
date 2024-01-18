import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {createContext, useEffect, useState} from "react";
import {Menu, Navbar, Footer, Auth, ModalImgComponent} from "./components";
import {CardPage, FavouritesPage, HomePage, Page404, SearchPage} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ErrorModal} from "./modals/Error/Error.modal";
import {auth} from "./api/api";
import toast, {Toaster} from "react-hot-toast";

const defaultState = {
    menu: {
        showMenu: false,
        setShowMenu: null
    },
    error: {
        error: null,
        setError: null
    },
    me: {
        user: {},
        setUser: null
    }
};

export const GlobalState = createContext(defaultState);

function App () {
    const [modalActive, setModalActive] = useState(false);
    const [auActive, setAuActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth().then((res) => {
            toast(res.data.message, {
                type: "success"
            });
            setUser(prev => {
                return {
                    ...prev,
                    ...res.data.user
                };
            });
            return res;
        });
    }, [setUser]);

    const state = {
        menu: {
            showMenu,
            setShowMenu
        },
        error: {
            error,
            setError
        },
        me: {
            user,
            setUser
        }
    };

    return (
        <GlobalState.Provider value={state}>
            <BrowserRouter>
                <Auth active={auActive} setActive={setAuActive}/>
                <ModalImgComponent active={modalActive} setActive={setModalActive}/>
                {error && <ErrorModal/>}

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
                <Toaster />
            </BrowserRouter>
        </GlobalState.Provider>
    );
}

export default App;
