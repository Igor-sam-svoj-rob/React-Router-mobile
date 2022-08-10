import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Messages from "./pages/Messages";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Support from "./pages/Support";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/support" element={<Support />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
