import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ClientForm from "./pages/Client-Form/ClientForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/client" element={<ClientForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
