"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "AVOCAT?", href: "/" },
    { name: "ABOUT", href: "/" },
    { name: "CONTACT", href: "/" },
  ];
  const router = useRouter();
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
              <Link href={navLink.href}>{navLink.name}</Link>
            </li>
          );
        })}
      </ul>
      <Button
        onClick={() => {
          router.push("/register");
        }}
      >
        SIGN IN
      </Button>
    </header>
  );
};

export default NavBar;
