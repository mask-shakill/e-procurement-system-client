import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/photos/img1.png";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center p-3 border shadow-md">
        <span>
          <img src={Img1} alt="" />
        </span>

        <ul className="flex items-center justify-center gap-x-8 text-md">
          <Link to={"/"}>Home</Link>
          {/* <Link to={"/client"}>Client form</Link> */}
          <Link to={"/tender"}>Tender form</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/"}>Contact</Link>
        </ul>

        <ul className="flex items-center gap-x-4">
          <Link>Login</Link>
          <Link className="bg-blue-500 px-3 py-1 rounded-md text-white">
            Signup
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
