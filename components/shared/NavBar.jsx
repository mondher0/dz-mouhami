"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";

const NavBar = () => {
  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "AVOCAT?", href: "#avocat" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];
  const router = useRouter();
  const token = getCookie("token");
  return (
    <header className="container flex justify-between items-center">
      <div
        className="hover:cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src={"/assets/logo.svg"} alt="logo" width={100} height={100} />
      </div>
      <ul className="flex items-center gap-10">
        {navLinks.map((navLink, index) => {
          return (
            <li key={index} className="text-[#FFF] text-[18px] font-bold">
              <a href={navLink.href}>{navLink.name}</a>
            </li>
          );
        })}
      </ul>

      <Button
        size="lg"
        onClick={() => {
          if (token) {
            deleteCookie("token");
            if (typeof window !== "undefined") return;
            window.location.href = "/";
            window.location.reload();
          } else {
            router.push("/login");
          }
        }}
      >
        {token ? "Logout" : "SIGN IN"}
      </Button>
    </header>
  );
};

export default NavBar;
