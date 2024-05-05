import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main id="home" className="">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
