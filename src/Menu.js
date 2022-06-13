import React from "react";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  return (
    <div className="section-center">
      {props.menuItems.map((menuItem) => (
        <ul>
          <MenuItem key={menuItem.id} {...menuItem} />
        </ul>
      ))}
    </div>
  );
};

export default Menu;
