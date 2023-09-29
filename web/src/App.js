import './App.css';
import Card from './components/CardList/Card/card';
import Navbar from "./components/NavBar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
        <Navbar/>
        <Card />
    </div>
  );
}

export default App;
