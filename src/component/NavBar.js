import React from 'react';
import "./NavBar.css"

function NavBar() {
  return (
    <div className="navmain">
      <div>
        <input type="search" placeholder="it is static" />
      </div>
      <div>
        <button className="btnstyle"> login </button>
        <button className="btnstyle"> More </button>
      </div>
    </div>
  );
}

export default NavBar