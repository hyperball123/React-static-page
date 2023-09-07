import React from "react";
import Home from "./pages/home/Home";
import Work from "./pages/work/Work";
import AboutPage from "./pages/About/AboutPage";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
function Main() {
  return (
    <div>
      <Home />
      <Work />
      <AboutPage />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Main;
