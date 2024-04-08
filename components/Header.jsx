"use client";
import { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <NavBar />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
