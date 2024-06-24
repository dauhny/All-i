import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ContentIntro } from "./pages/ContentIntro";
import { MusicCommunity } from "./pages/MusicCommunity";
import { BookInfo } from "./pages/BookInfo";
import { BookCommunity } from "./pages/BookCommunity";
import { CommunityProfile } from "./pages/CommunityProfile";
import { Write } from "./pages/Write";
import See from "./pages/See";
import Idea from "./pages/Idea";
import Mypage from "./pages/Mypage";

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
        <Route path="/bookinfo" element={<BookInfo />} />
        <Route path="/bookcommunity" element={<BookCommunity />} />
        <Route path="/communityprofile" element={<CommunityProfile />} />
        <Route path="/write" element={<Write />} />
        <Route path="/see" element={<See />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/idea" element={<Idea />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
