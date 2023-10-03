import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import file from './components/Carousel/CarouselData.json';
import React, {createContext, useEffect, useState} from "react";

import {Menu, Navbar, Carousel, Footer, Modal} from "./components";

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';


const {slides} = file
const MenuState = createContext(false);

function App() {
    const [modalActive, setModalActive] = useState(true)
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
        <MenuState.Provider value={showMenu}>
            <Menu isShow={showMenu} setShowMenu={setShowMenu}/>
            <Navbar setShowMenu={setShowMenu}/>
            <Carousel data={slides}/>
            <Footer/>
            <Modal active={modalActive} setActive={setModalActive}/>
            {/* вывод данных, полученных с сервера Express */}
            <div>
                {state}
            </div>
        </MenuState.Provider>
    )
}

export default App;
