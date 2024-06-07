import React from "react";
import Find1 from "../Compo2/Find/Find1";
import Search1 from "../Components/Search/Search1";
import FooterNew1 from "../Compo2/FooterNew/FooterNew1";
import FooterNew2 from "../Compo2/FooterNew2/FooterNew2";
import "./Newspage.css";
function Newspage() {
  return (
    <div>
      <div class="New8910">
        <Search1></Search1>
      </div>
      <div class="Find">
        <Find1></Find1>
      </div>









      <div class="Footer2">
        <FooterNew2></FooterNew2>
      </div>

      <div class="Footer">
        <FooterNew1></FooterNew1>
      </div>
    </div>
  );
}

export default Newspage;
