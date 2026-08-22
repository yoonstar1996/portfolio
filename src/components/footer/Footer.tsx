import React from "react";

function Footer() {
  return (
    <footer className="bg-[#222] py-[3rem] text-center text-[0.9rem] text-[#f5f5f5]">
      © {new Date().getFullYear()}. Yun Kyeong Min. All rights reserved.
    </footer>
  );
}

export default Footer;
