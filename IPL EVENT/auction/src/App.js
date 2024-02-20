import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Players from './Components/Players';
import ElitePlayers from './Components/ElitePlayers';
import PgFOF from './Components/PgFOF';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatsCardPlayers from './Components/StatsCardPlayers';



function App() {
    return ( <BrowserRouter>
        <Routes>
        <Route exact path = "/" element = { < Home / > }/> 
        <Route exact path = "/Home" element = { < Home / > }/>
         <Route exact path = "/ElitePlayers"element = { < ElitePlayers / > }/> 
        <Route exact path = "/Players"element = { < Players / > }/>
        <Route exact path = "/StatsCardPlayers" element={<StatsCardPlayers/>} />
        <Route exact path = "*"element = { < PgFOF / > }/>

        </Routes> 
        </BrowserRouter>
    );
}

export default App;