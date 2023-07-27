import React, { useEffect, useState } from 'react';
import '../StylesComponents/NavbarStyle.css';
const Navbar = ({ title }) => {
  return (
    <>
      <nav className="navbar navbar-dard bg-dark">
        <div>
          <h1>{title}</h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
