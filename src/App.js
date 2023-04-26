import { Routes, Route } from "react-router-dom";
import "./App.css";

// import components
import Nav from "./components/navBar/nav";
import Home from "./pages/Home/home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
