import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './assets/components/home.jsx';
import Quest from "./assets/components/introduction.jsx";
import Play from "./assets/components/playthrough.jsx"

function App() {
  return(
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;