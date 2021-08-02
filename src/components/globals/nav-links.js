import { Link } from "gatsby";
import React from "react";

export default function NavLinks() {
  return (
    <React.Fragment>
      <Link to="/services">Services</Link>
      <Link to="/work">Work</Link>
      <Link to="/news">News</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </React.Fragment>
  );
}
