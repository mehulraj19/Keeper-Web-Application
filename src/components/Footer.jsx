import React from "react";

function Footer() {
  let date = new Date();
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let yr = date.getFullYear();
  return (
    <footer>
      <p>@ {d + "/" + m + "/" + yr}</p>
    </footer>
  );
}

export default Footer;
