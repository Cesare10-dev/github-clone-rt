import React from "react";

function Menu() {
  return (
    <div className="menu">
      <div className="menuSign">
        <p>Signed in as</p>
        <p>Universe Code</p>
      </div>

      <div className="lineThree" />

      <div className="menuStatus">
        <input type="text" placeholder="Set Status" />
      </div>

      <div className="lineThree" />

      <div className="menuList">
        <p>Your profile</p>
        <p>Your repositories</p>
        <p>Your codespaces</p>
        <p>Your organizations</p>
        <p>Your projects</p>
        <p>Your stars</p>
        <p>Your gists</p>
      </div>

      <div className="lineThree" />

      <p>Upgrade</p>
      <p>Feature preview</p>
      <p>Help</p>
      <p>Settings</p>

      <div className="lineThree" />

      <p>Sign out</p>
    </div>
  );
}

export default Menu;
