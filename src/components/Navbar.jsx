import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navContainer">
        <div className="inner_navContainer">
          <h1>CompanyLogo</h1>
          <div className="leftPart">
            <Link to='/Analytic_Assignment_ReactJs/'><p>Home</p></Link>
            <div className="img">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80 " alt="" />
            </div>
            <p className="userName">John Martin</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
