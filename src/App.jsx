import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import PremierLeague from "./pages/PremierLeague.jsx";
import LaLiga from "./pages/LaLiga.jsx";
import NFL from "./pages/NFL.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/premierleague" element= {<PremierLeague />} />
        <Route path = "/laliga" element = {<LaLiga />} />
        <Route path = "/nfl" element = {<NFL />} />
      </Routes>
    </Router>
  );
}

export default App;