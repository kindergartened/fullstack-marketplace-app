import './App.css';
import Navbar from "./components/NavBar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Carousel from "./components/Carousel/Carousel";
import file from './components/Carousel/CarouselData.json';
import React, {createContext, useState} from "react";
import Menu from "./components/NavBar/Menu/Menu";

const {slides} = file
const MenuState = createContext(false);


function App() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <MenuState.Provider value={showMenu}>
            <Menu isShow={showMenu} setShowMenu={setShowMenu}/>
            <Navbar setShowMenu={setShowMenu}/>
            <Carousel data={slides}/>
        </MenuState.Provider>
    );
}

export default App;
