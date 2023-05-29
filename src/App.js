import Tabs from "./Pages/Tabs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Reset from "./Pages/Reset";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/workpage" element={<Tabs />}></Route>
            <Route path="/reset" element={<Reset />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
