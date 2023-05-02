
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Certifications from "./components/Certifiactions/certifiactions";
import Port from "./Port";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Port/>}/>
        <Route path="/skills" element={<Certifications />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
