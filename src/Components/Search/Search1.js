import React from "react";
import "./Search1.css";
export default function Search1() {
  return (
    <div style={{ paddingTop: 20 }}>
      <div class="color2">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand me-auto" href="#">
              <img src="./asset/docfinew.svg"></img>
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
              <div class="offcanvas-body3">
                <ul
                  class="navbar-nav justify-content-center flex-grow-1 pe-3"
                  style={{ gap: 15 }}
                >
                  <li class="nav-item" style={{ color: "black" }}>
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
                          <a href="">Help Desk Home</a>
                        </li>
                        <li>
                          <a href="">Focused HelpDesk Home</a>
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
            <a href="#" class="login-button2">
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
        <div class="jumbotron text-center text-white"></div>
      </section>

      <div className="input-body">
        <div class="card-body">
          <ul class="list-group list-group-2">
            <div class="pocolo">
              <div class="form2">
                <div class="container-fluid p-2 text-center">
                  <h2 class="help">How Can We Help You? </h2>

                  <div class="help1">
                    Search here to get answers to your questions
                  </div>
                </div>
                <div class="form">
                  <input
                    class="form_input1"
                    placeholder="Whar are you looking for?"
                  ></input>

                  <button class="form_submit1">
                    <i
                      class="fa-solid fa-magnifying-glass"
                      style={{ marginRight: 5 }}
                    ></i>
                    Search
                  </button>
                </div>
              </div>
              <div class="popu2">
                <h5>Popular:</h5>
                <h6>Code, Basic, Blog, WordPress</h6>
              </div>
            </div>
          </ul>
        </div>
        <div class="shapenew">
          <img src="./asset/shape_2_4.png" className="shapenew1"></img>
          <img src="./asset/shape_2_6.png" className="shapenew2"></img>
        </div>
      </div>
    </div>
  );
}
