import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './assets/components/home.jsx';
import Page1 from "./assets/components/page1.jsx";
import Time from "./assets/components/time.jsx";
import Page2 from "./assets/components/page.jsx";


function App() {
  return(
    <>
    <Time />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quest" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        
      </Routes>
    </Router>
    
    
    </>
  );
}

export default App;