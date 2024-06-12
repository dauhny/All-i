import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ContentIntro } from "./pages/ContentIntro";
import { MusicCommunity } from "./pages/MusicCommunity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contentintro" element={<ContentIntro />} />
        <Route path="/musiccommunity" element={<MusicCommunity />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
