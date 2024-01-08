import React from 'react';
import './navigation.css';


function Navigation() {
  return (
    <div className="nav">
      <ul className="navlist">
        <li className="navitem"><a href='#'>소개</a></li>
        <li className="navitem"><a href='#'>게시판</a></li>
        <li className="navitem"><a href='#'>연락</a></li>
        <li className="navitem"><a href='#'>메뉴1</a></li>
        <li className="navitem"><a href='#'>메뉴2</a></li>
        <li className="navitem"><a href='#'>메뉴3</a></li>
      </ul>
    </div>
  );
}

export default Navigation;