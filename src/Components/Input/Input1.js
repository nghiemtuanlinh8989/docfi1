import React from "react";
import "./Input1.css";
export default function Input1() {
  return (
    <div className="input-body">
      <div class="card-body">
        <ul class="list-group list-group-">
          <div class="pocolo">
            <div class="songoku">
              <input
                placeholder="What are you looking for?"
                className="search-box-input"
              ></input>
              <div class="every">
                <div class="dropdown">
                  <a
                    class="btn-secondary1 dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "black" }}
                  >
                    All Docs
                  </a>
                
                </div>
              </div>
              <div>
                <div class="fide">
                  <button class="btn1 btn-primary" type="button">
                    <i class="fa-solid fa-magnifying-glass"></i> Search
                  </button>
                </div>
              </div>
            </div>
            <div class="popu">
              <h5>Popular:</h5>
              <h6>Code, Basic, Blog, WordPress</h6>
            </div>
          </div>
        </ul>
      </div>
      {/* <div class='haianh'>
        <img src="./images/shape1.png" className="shape1"></img>
        <img src="./images/shape2.png" className="shape2"></img>
      </div> */}
      
    </div>
  );
}
