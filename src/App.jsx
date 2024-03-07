import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Galerie from "./pages/Galerie/Galerie";

import { loadingContext, darkmodeContext } from "./Context/Context";
import { useState } from "react";
import Loadingscreen from "./pages/Loadingscreen/Loadingscreen";

function App() {
  const [loading, setLoading] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={darkmode ? "dark" : ""}>
      <darkmodeContext.Provider value={{ darkmode, setDarkmode }}>
        <loadingContext.Provider value={{ loading, setLoading }}>
          {loading ? (
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/galerie" element={<Galerie />} />
              </Routes>
            </BrowserRouter>
          ) : (
            <Loadingscreen />
          )}
        </loadingContext.Provider>
      </darkmodeContext.Provider>
    </div>
  );
}

export default App;
