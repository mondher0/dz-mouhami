import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainButton from "./MainButton";

const NavBar = () => {
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "AVOCAT?", href: "/" },
    { name: "ABOUT", href: "/" },
    { name: "CONTACT", href: "/" },
  ];
  return (
    <header className="flex justify-between items-center">
      <div>
        <Image src={"/assets/logo.svg"} alt="logo" width={100} height={100} />
      </div>
      <ul className="flex items-center gap-5">
        {navLinks.map((navLink, index) => {
          return (
            <li key={index} className="text-[#FFF] text-[18px]">
              <Link href={navLink.href}>{navLink.name}</Link>
            </li>
          );
        })}
      </ul>
      <MainButton text={"SIGN IN"} />
    </header>
  );
};

export default NavBar;
