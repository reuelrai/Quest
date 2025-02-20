import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './assets/components/home.jsx';
import Quest from "./assets/components/introduction.jsx";
import Time from "./assets/components/time.jsx";

function App() {
  return(
    <>
    <Time />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quest" element={<Quest />} />
      </Routes>
    </Router>
    
    
    </>
  );
}

export default App;