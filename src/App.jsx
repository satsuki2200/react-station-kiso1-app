import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home";
import NewThread from "./threads/NewThread";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threads/new" element={<NewThread />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
