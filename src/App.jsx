import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Work from "./pages/work/Work";
import QwickBook from "./UI/QwickBook";
import TinyTweak from "./UI/TinyTweak";
import CaseMorph from "./UI/CaseMorph";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter scrollRestoration={false}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Work />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skill" element={<Work />}></Route>
            <Route path="/contact" element={<Work />}></Route>
            <Route path="/projects/qwickbook" element={<QwickBook />}></Route>
            <Route path="/projects/tinytweak" element={<TinyTweak />}></Route>
            <Route
              path="/projects/casemorphpro"
              element={<CaseMorph />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
