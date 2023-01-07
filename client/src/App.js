import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import FormProducts from "./Components/FormProducts/FormProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<FormProducts />} />
          <Route path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

