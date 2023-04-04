import React from "react";
import google from "../images/googlelogo.png";

function logo() {
  return (
    <div>
      <img src={google} alt="logo" style={{ height: "92px", width: '250px' }} />
    </div>
  );
}
export default logo;
