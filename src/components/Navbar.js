import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

import * as FaIcons from "react-icons/fa";

import LogoBrand from "public/images/icon-sl.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="  w-full z-10">
        <div className="w-full">
          <div className="flex items-center w-full" style={{ height: 120 }}>
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <LogoBrand className=""></LogoBrand>
                <span className="ml-4 text-2xl text-slIndigo-600 font-bold text-center leading-none mr-14 font-sans">
                  Software <br /> Library
                </span>
                <div className="lg:flex items-center hidden ml-10">
                  <Link href="/">
                    <a
                      className="cursor-pointer font-semibold hover:text-slIndigo-600 text-slGray-900  px-6 py-2 rounded-md "
                      activeClass="home"
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      activeClass="contact"
                      className="cursor-pointer font-semibold hover:text-slIndigo-600 text-slGray-900  px-6 py-2 rounded-md "
                    >
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:flex">
                <div className="relative w-80 mr-6">
                  <input
                    type="text"
                    placeholder="Search"
                    className="block bg-transparent text-slPurple border border-slGray-600 py-2 px-2 focus:shadow outline-none focus:border-slIndigo-600 rounded-md w-full"
                  />
                  <span className=" absolute top-3 right-4 text-gray-400">
                    <FaIcons.FaSearch />
                  </span>
                </div>

                <div className=" flex items-baseline space-x-4">
                  <Link
                    href="/login"
                    activeClass="login"
                    className="cursor-pointer font-semibold hover:bg-slIndigo-600 text-slGray-900 hover:text-white px-3 py-2 rounded-md "
                  >
                    <a
                      activeClass="login"
                      className="cursor-pointer font-semibold hover:bg-slIndigo-600 text-slGray-900 hover:text-white px-3 py-2 rounded-md "
                    >
                      Login
                    </a>
                  </Link>
                  <Link
                    href="/register"
                    activeClass="register"
                    className="cursor-pointer font-semibold hover:bg-slIndigo-600 text-slGray-900 hover:text-white px-3 py-2 rounded-md "
                  >
                    <a
                      activeClass="register"
                      className="cursor-pointer font-semibold hover:bg-slIndigo-600 text-slGray-900 hover:text-white px-3 py-2 rounded-md "
                    >
                      Register
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" flex lg:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-slIndigo-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-slIndigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slIndigo-600 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link href="/">
                  <a className="cursor-pointer hover:bg-slIndigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="cursor-pointer hover:bg-slIndigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Contact Us
                  </a>
                </Link>

                <Link href="/login">
                  <a className="cursor-pointer hover:bg-slIndigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </a>
                </Link>
                <Link href="/register">
                  <a className="cursor-pointer hover:bg-slIndigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Register
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
