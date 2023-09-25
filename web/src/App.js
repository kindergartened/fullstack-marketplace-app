import styles from './components/NavBar/navbar.module.css'
import './App.css';
import Cards from './components/Cards/cards';
import Navbar from "./components/NavBar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
        <Navbar/>
        <Cards />
    </div>
  );
}

export default App;
