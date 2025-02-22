import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import FirstPage from './assets/components/firstPage.jsx';
import SecondPage from "./assets/components/secondPage.jsx";
import Time from "./assets/components/time.jsx";
import ThirdPage from "./assets/components/thirdPage.jsx";


function App() {
  return(
    <>
    <Time />
      <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        
      </Routes>
    </Router>
    
    
    </>
  );
}

export default App;