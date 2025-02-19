import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './assets/components/home.jsx';
import Quest from "./assets/components/introduction.jsx";
import Time from "./assets/time.jsx";

function App() {
  return(
    <>
    
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quest" element={<Quest />} />
      </Routes>
    </Router>
    <Time />
    
    </>
  );
}

export default App;