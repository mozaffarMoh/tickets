import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./Pages";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
