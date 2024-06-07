import React from "react";
import "./Great1.css";
export default function Great1() {
  return (
    <div class="one">
      <div class="container" style={{ margintop: 30 }}>
        <div class="row">
          <div id="ente" class="col-sm-4">
            <div class="fakeimg1">
              {" "}
              <h5 style={{ fontSize: 16, color: "white" }}>SUBSCRIBE</h5>
              <h2 id='here' >
                Great Customer Relationships Start Here
              </h2>
            </div>
          </div>

          <div id="ente2"class="col-sm-8">
            <div class="two">
              <div class="fakeimg2">
                <div class="songoku1">
                  <div class="doremon">
                    <div class="pocolo2">
                      <div class="messe">
                        {" "}
                        <i id='enve' class="fa-regular fa-envelope"></i>
                      </div>
                      <input
                        placeholder="Enter your email address"
                        className="search-box-input2"
                      ></input>
                      
                    </div>
                    
                  </div>
                  
                  <div class="chaien3">
                    <div class="chaien">
                      <input
                        placeholder=""
                        className="search-box-input23"
                      ></input>
                      <span class="chaien1">Messenger</span>
                    </div>
                    <div class="chaien">
                      <input
                        placeholder=""
                        className="search-box-input23"
                      ></input>
                      <span class="chaien1">Get News</span>
                    </div>

                    <div class="chaien">
                      <input
                        placeholder=""
                        className="search-box-input23"
                      ></input>
                      <span class="chaien1">Get Update</span>
                    </div>
                  </div>
                </div>
                <div class="container3  text-white  ">
                  <button type="button" class="btn25 btn-primary ">
                   Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}
