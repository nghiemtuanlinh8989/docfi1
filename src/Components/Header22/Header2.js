import React from "react";
import "./Header2.css";
import { NavLink } from "react-router-dom";
export default function Header2() {
  return (
    <div style={{ paddingTop: 20 }}>
      <div class="color2">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand me-auto" href="#">
              <img src="./asset/logo-1.svg"></img>
            </a>

            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul
                  class="navbar-nav justify-content-center flex-grow-1 pe-3"
                  style={{ gap: 15 }}
                >
                  <li class="nav-item" style={{ color: "white" }}>
                    <a
                      class="nav-link mx-lg-2 activeone"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                    <div class="box-submenu">
                      <ul>
                        <li>
                          <a href="">Main Home</a>
                        </li>
                        <li>
                        <NavLink to={"New1"} activeclassName="active99"><a href="">Help Desk Home</a></NavLink>
                        </li>
                        <li>
                        <NavLink to={"New1"} activeclassName="active99"><a href="">Focused HelpDesk Home</a></NavLink>
                        </li>
                        <li>
                          <a href="">Support Forum Home</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mx-lg-2" href="#">
                      Documentation
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mx-lg-2" href="#">
                      Forum
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mx-lg-2" href="#">
                      Pages
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mx-lg-2" href="#">
                      Blog
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mx-lg-2" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" class="login-button">
              <i class="fa-regular fa-user" style={{ marginRight: 5 }}></i>
              Get docfi
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>

      <section classname="hero-section">
        <div class="jumbotron text-center text-white">
          <h1 class="jumbo">How Can We Help You?</h1>
          <p class="jumbo2">Search here to get answers to your questions</p>
        </div>
      </section>
    </div>
  );
}
