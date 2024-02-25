import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Work from "./pages/work/Work";
import QwickBook from "./UI/QwickBook";
import TinyTweak from "./UI/TinyTweak";
import CaseMorph from "./UI/CaseMorph";
import About from "./pages/about/About";
import EmiCalculator from "./UI/EmiCalculator";
import DiTimeSheet from "./UI/DiTimeSheet";
import ChatBox from "./UI/ChatBox";
import Skill from "./pages/skill/Skill";
import Contact from "./pages/contact/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter scrollRestoration={false}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Work />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skill" element={<Skill />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/projects/qwickbook" element={<QwickBook />}></Route>
            <Route path="/projects/tinytweak" element={<TinyTweak />}></Route>
            <Route
              path="/projects/emicalculator"
              element={<EmiCalculator />}
            ></Route>
            <Route path="/projects/timesheet" element={<DiTimeSheet />}></Route>
            <Route
              path="/projects/casemorphpro"
              element={<CaseMorph />}
            ></Route>
            <Route path="/projects/chatbox" element={<ChatBox />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
