import CardsPage from "./pages/CardsPage/CardsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Tags from "./Components/tags/tags";
import LandingPage from "./pages/LandingP/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<LandingPage />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/profile:type" element={<CardsPage />}></Route>
          <Route path="/tags" element={<Tags/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
