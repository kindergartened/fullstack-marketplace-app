import styles from './components/NavBar/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/NavBar/navbar";
import Carousel from "./components/Carousel/Carousel";
import file from './components/Carousel/CarouselData.json';
const {slides} = file

function App() {
    console.log(slides)
  return (
    <div>
        <Navbar/>
        <Carousel data={slides}/>
    </div>
  );
}

export default App;
