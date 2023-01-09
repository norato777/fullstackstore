import "./App.css";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import FormProducts from "./Components/FormProducts/FormProducts";
import PageProducts from "./Components/PageProducts/PageProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<FormProducts />} />
          <Route path="/products" element={<PageProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
