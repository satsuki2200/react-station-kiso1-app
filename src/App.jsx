import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home";
import New from "./threads/New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threads/new" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
