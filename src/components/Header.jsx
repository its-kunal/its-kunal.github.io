import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button
                className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl"
                style={{ cursor: "default" }}
              >
                Welcome to my Portfolio
              </button>
            </div>
            <h1 className="text-white text-5xl font-bold">
              Hi! I'm Kunal Agrawal
            </h1>
            <p className="text-white py-4 max-w-lg ">
              Hola Amigos, I love discovering new technologies or implementation
              of them. There are countless resources available on web that
              helped me. I had started by learning HTML, CSS, and JavaScript,
              the core languages used in web development. With time, you likely
              delved into other areas such as back-end development, databases,
              and server-side scripting.{" "}
            </p>
            <button className="  text-white text-2xl">
              <a href="#contact"> Let's Connect </a>
              <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
            </button>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
