import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ClientForm from "./pages/Client-Form/ClientForm";
import TenderForm from "./components/TenderForm/TenderForm ";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/client" element={<ClientForm />}></Route> */}
          <Route path="/tender" element={<TenderForm></TenderForm>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
