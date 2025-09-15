import React from "react";
import "./App.css"
import { HelmetProvider } from "react-helmet-async";
import Cursor from "./components/ParallaxWrapper"; // adjust path
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Banner from "./components/banner";
import About from "./components/aboutus";
import Menu from "./components/menu";
import Contact from "./components/contact";
import Reservation from "./components/reservation";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <div>
        <HelmetProvider>
          <Header />
          <Banner />
          <About />
          <Menu />
          <Reservation />
          <Contact />
          <Footer />
        </HelmetProvider>

      </div>
      <div> <Cursor /></div>
    </>


  );
}
