import styles from './components/NavBar/navbar.module.css'
import './App.css';
import Navbar from "./components/NavBar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Carousel from "./components/Carousel/Carousel";
import file from './components/Carousel/CarouselData.json';
const {slides} = file

function App() {
  return (
    <div>
        <Navbar/>
        <Carousel data={slides}></Carousel>
    </div>
  );
}

export default App;
