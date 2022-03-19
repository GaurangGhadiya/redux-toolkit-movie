import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header/Header.jsx";
import Home from "components/Home/Home.jsx";
import Footer from "components/Footer/Footer.jsx";
import MovieDetail from "components/MovieDetails/MovieDetails.jsx";
import PageNotFound from "components/PageNotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="p-25">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
