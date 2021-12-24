import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Download from "./components/download";
import Profit from "./components/profit";
import Anywhere from "./components/anywhere";
import Footer from "./components/footer";
import Movie from "./components/movie";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navbar";
function App() {
  return (
    <>
      <Header />
      <Navigation/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/download" element={<Download />} />
        <Route path="/profit" element={<Profit />} />
        <Route path="/anywhere" element={<Anywhere />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

/*



      */
