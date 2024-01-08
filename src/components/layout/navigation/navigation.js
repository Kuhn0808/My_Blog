import React from 'react';
import './navigation.css';


function Navigation() {
  return (
    <div className="nav">
      <ul className="navlist">
        <li className="navitem"><a href='#'>소개</a></li>
        <li className="navitem"><a href='#'>게시판</a></li>
        <li className="navitem"><a href='#'>내글보기</a></li>
        <li className="navitem"><a href='#'>마이페이지</a></li>
      </ul>
    </div>
  );
}

export default Navigation;