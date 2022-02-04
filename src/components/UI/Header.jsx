import React from "react";
import logo from "../../assets/images/logo-1x.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div class="nav-log">
          <img src={logo} alt="logo" />
        </div>
        <div class="nav-menu">
          <span class="nav-menu-item">Home</span>
          <span class="nav-menu-item">About YourWorld3</span>
          <span class="nav-menu-item">ICO</span>
          <span class="nav-menu-item">Green Swap</span>
          <span class="nav-menu-item">NFTs</span>
          <span class="nav-menu-item">Karbun</span>
          <span class="nav-menu-item">Sovereign Coins</span>
          <span class="nav-menu-item">Contact Us</span>
        </div>
        <div class="nav-login">Login</div>
      </nav>
    </header>
  );
};

export default Header;
