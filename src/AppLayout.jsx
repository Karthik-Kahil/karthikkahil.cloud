import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";

function AppLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
