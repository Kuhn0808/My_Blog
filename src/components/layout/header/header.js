import React from 'react';
import { Link } from "react-router-dom";
import "./header.css";
import cat from "./cat.png";

function Header() {
  return(
    <div className="header_container">
      <div className="header_element">
        <div className="shortcut">
          <Link to="#">로그인</Link>
          <Link to="#">회원가입</Link>
        </div>
        <div className="logo">
          <img
            width="100%"
            height="100%"
            src={cat}
            alt="logo"
          />
        </div>
        <div className="search">
          <h1>React Blog</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;