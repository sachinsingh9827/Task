import React from "react";
import Navbar1 from "../../components/navbar";
import Footer from "../../components/footer";
import ScrollToTop from "react-scroll-to-top";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar1 />
      {children}
      <ScrollToTop smooth className="rounded-circle bolder bg-danger" />
      <Footer />
    </div>
  );
}
