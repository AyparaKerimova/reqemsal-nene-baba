import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/media/logo.png";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 flex items-center gap-12">
              <Link className="block " to="/">
                <img width={140} height={300} src={Logo} alt="logo" />
              </Link>
            </div>

            <div className="flex items-center gap-12">
              <nav aria-label="Global" className="block">
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/"
                >
                  {" "}
                  Ana səhifə{" "}
                </Link>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 m-3"
                  to="/about"
                >
                  {" "}
                Haqqımızda{" "}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
