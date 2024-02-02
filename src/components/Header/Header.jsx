import React from "react";
import "../Header/header.css";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    const headerAdj = () => {
      if (window.innerWidth < 767) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        document.querySelector(
          ".nav-wrap .nav-list"
        ).style.paddingTop = `${headerHeight}px`;
      } else {
        document.querySelector(".nav-wrap .nav-list").style.paddingTop = "0";
      }
    };

    const submenuToggle = () => {
      if (window.innerWidth < 767) {
        document
          .querySelectorAll(".nav-list li.with-submenu")
          .forEach((item) => {
            item.removeEventListener("click", handleSubmenuToggle);
            item.addEventListener("click", handleSubmenuToggle);
          });
      }
    };

    const handleSubmenuToggle = () => {
      document
        .querySelector(".nav-list li.with-submenu")
        .classList.toggle("is-open");
      document.querySelector(".submenu").style.display = "block";
    };

    const handleHamburgerClick = () => {
      document.querySelector(".hamburger").classList.toggle("is-active");
      document.body.classList.toggle("sidebar-open");
      document.querySelector(".nav-wrap").classList.toggle("is-open");
    };

    const handleOverlayClick = () => {
      document.querySelector(".hamburger").classList.remove("is-active");
      document.body.classList.remove("sidebar-open");
      document.querySelector(".nav-wrap").classList.remove("is-open");
    };

    const handleResize = () => {
      headerAdj();
      submenuToggle();
      if (window.innerWidth < 767) {
        document
          .querySelector(".hamburger")
          .removeEventListener("click", handleHamburgerClick);
        document
          .querySelector(".hamburger")
          .addEventListener("click", handleHamburgerClick);
        document
          .querySelector(".overlay")
          .removeEventListener("click", handleOverlayClick);
        document
          .querySelector(".overlay")
          .addEventListener("click", handleOverlayClick);
      } else {
        document.querySelector(".hamburger").classList.remove("is-active");
        document.body.classList.remove("sidebar-open");
        document.querySelector(".nav-wrap").classList.remove("is-open");
      }
    };

    headerAdj();
    submenuToggle();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header class="header">
        <div class="container">
          <div class="row-wrap">
            <div class="logo-wrap">
              <span class="logo">LOGO</span>
            </div>
            <div class="nav-wrap">
              <ul class="nav-list">
                <li class="active">
                  <a href="#">About-us</a>
                </li>
                <li>
                  <a href="#">Contact-us</a>
                </li>
                <li class="with-submenu">
                  {/* <a href="#">Blog</a>
                  <div class="submenu">
                    <ul class="submenu-inner">
                      <li>
                        <a href="#">Link1</a>
                      </li>
                      <li>
                        <a href="#">Link2</a>
                      </li>
                      <li>
                        <a href="#">Link3</a>
                      </li>
                    </ul>
                  </div> */}
                </li>
              </ul>
            </div>
            <div class="hamburger">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </div>
        </div>
      </header>
      {/* <div class="overlay"></div> */}
    </>
  );
};

export default Header;
