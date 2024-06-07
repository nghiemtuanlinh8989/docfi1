import React from "react";
import Header from ".././Components/Header1/Header";
import Header2 from ".././Components/Header22/Header2";
import Images1 from ".././Components/Images/Images1";
import Input1 from ".././Components/Input/Input1";
import Box1 from ".././Components/Box/Box1";
import Content1 from ".././Components/Content/Content1";
import People1 from ".././Components/People/People1";
import Feat1 from ".././Components/Feat/Feat1";
import Great1 from ".././Components/Great/Great1";
import Nine1 from ".././Components/Nine/Nine1";
import Fast1 from ".././Components/Fast/Fast1";
import Seewho1 from ".././Components/Seewho/Seewho1";

function HomePage() {
  return (
    <div className="App">
      {/* <div className="row"> */}
      <div className="col">
        <div class='blog'>
        <Header></Header>
        </div>
        <div class="Name3">
          <img src="./images/shape1.png" className="shape1"></img>
          <img src="./images/shape2.png" className="shape2"></img>
          <div class="header22">
            <Header2></Header2>
          </div>
          <div class="Input11">
            <Input1></Input1>
          </div>
        </div>

        <div class="Name4">
          <div class="Images11">
            <Images1></Images1>
          </div>
          <div class="box11">
            <Box1></Box1>
          </div>

          <div class="content11">
            <Content1></Content1>
            <div class="twoimg">
              <img src="./asset/shape_left.svg" className="shape3"></img>
              <img src="./asset/shape_right.svg" className="shape4"></img>
            </div>
          </div>
          <div class="recon">
            <div>
              <People1></People1>
              <div class="next111">
        
              <div class="next1">
        <img
          loading="lazy"
          decoding="async"
          width="165"
          height="157"
          src="https://www.radiustheme.com/demo/wordpress/themes/docfi/wp-content/uploads/2023/10/gray_dot.svg"
          class="attachment-full size-full wp-image-7157"
          alt=""
          id='wp1'
        ></img>
      </div>
      </div>
            </div>
          </div>
        </div>

        <div class="fast">
          <Fast1></Fast1>
        </div>

        <div class="seewho">
          <Seewho1></Seewho1>
         
        </div>

        <div class="nine">
          <Nine1></Nine1>
          <div class="forimg">
            <img src="./asset/cayxanh.svg" className="shape7"></img>
          </div>
        </div>

        <div class="great">
          <Great1></Great1>
        </div>

        <div class="feat99">
          <Feat1></Feat1>
          <div class="thereimg">
            <img src="./asset/shape5.svg" className="shape5"></img>
            <img src="./asset/shape6.svg" className="shape6"></img>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default HomePage;
