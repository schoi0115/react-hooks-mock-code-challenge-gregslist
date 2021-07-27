import React from "react";
import Search from "./Search";

function Header({onSearch, itemInfo}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
      onSearch={onSearch}
      itemInfo={itemInfo}/>
    </header>
  );
}

export default Header;
