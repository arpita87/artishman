import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import logoImg from "../../../../src/assets/images/banner/logo.png";

const Navbar = () => {
  const navitems = (
    <>
      <Link to="/">Home</Link>
      <Link to="/instructors">Instructors</Link>
      <Link>Classes</Link>
      <Link>Dashboard </Link>
    </>
  );
  return (
    <div className="px-48">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-base">{navitems}</li>
            </ul>
            
          </div>
          {/* <Link className="btn btn-ghost normal-case text-xl">{logoImg}</Link> */}
          <Link to="/">
            <img src={logoImg} alt="" className="w-1/2" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex gap-6 justify-center items-center font-semibold text-base ">
              {navitems}
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <lord-icon
            src="../../../../public/wired-outline-21-avatar.json"
            trigger="hover"
            colors="primary:#121331,secondary:#08a88a"
          ></lord-icon> */}
          <Link to='/login'>
            <Player
              src="https://assets5.lottiefiles.com/packages/lf20_fgp8rk11.json"
              className="player font-extraboldbold"
              loop
              autoplay
              style={{ height: "50px", width: "50px" }}
              class="fa-bold"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
