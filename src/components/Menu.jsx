import React from "react";

function Menu() {
  return (
    <div className="menu">
      <div className="menuContainer">
        <p>
          Signed in as <br />
          Universe Code
        </p>

        <div className="lineThree" />

        <div className="menuStatus">
          <input type="text" placeholder="Set Status" />
        </div>

        <div className="lineThree" />

        <p>Your profile</p>
        <p>Your repositories</p>
        <p>Your codespaces</p>
        <p>Your organizations</p>
        <p>Your projects</p>
        <p>Your stars</p>
        <p>Your gists</p>

        <div className="lineThree" />

        <p>Upgrade</p>
        <p>Feature preview</p>
        <p>Help</p>
        <p>Settings</p>

        <div className="lineThree" />

        <p>Sign out</p>
      </div>
    </div>
  );
}

export default Menu;
