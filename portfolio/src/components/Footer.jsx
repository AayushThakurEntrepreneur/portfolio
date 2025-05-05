import React from "react";
import "../App.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aayush Thakur • Built with React</p>
      <button className="scroll-top" onClick={scrollToTop}>↑</button>
    </footer>
  );
};

export default Footer;
