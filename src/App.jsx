import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/main";
import Detail from "./pages/detail";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [account, setAccount] = useState();

  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen relative z-50 ">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
