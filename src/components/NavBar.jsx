import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="w-full min-h-[50px] flex items-center justify-between absolute z-10 text-white bg-gray-700">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      <div className="md:hidden z-10">
        <FaBars
          size={30}
          className="mr-4 cursor-pointer"
          onClick={handleShow}
        />
      </div>
      <div
        onClick={handleShow}
        className={`overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 ${
          show ? "left-0" : "-left-full"
        }  top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col `}
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
