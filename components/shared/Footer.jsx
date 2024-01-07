import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const avocatLinks = ["rechercher", "wilaya", "spéciàlité", "les plus notes"];
  const ourAccounts = [
    {
      account: "facebook",
      href: "/",
    },
    {
      account: "twitter",
      href: "/",
    },
    {
      account: "linkdein",
      href: "/",
    },
  ];
  const ourOffice = ["Tipaza rue 15 alger", "Tipaza rue 15 alger"];
  const contactInfo = ["0558604705", "mondher@gmail.com"];
  return (
    <footer>
      <div className="flex items-center justify-between p-[40px]">
        <h1 className="text-[#FFC700] text-[48px] font-bold">
          Nous somme là pour
          <br /> sauver votre vie
        </h1>
        <Image src={"/assets/logo.svg"} alt="logo" width={200} height={200} />
      </div>
      <div className="flex items-start justify-around gap-[40px]">
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="text-[#FFC700]">Avocat</p>
          <ul className="list-none flex flex-col items-start justify-centerF">
            {avocatLinks.map((avocat, index) => {
              return (
                <li key={index} className="text-[#FFF]">
                  {avocat}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="text-[#FFC700]">our accounts</p>
          <ul className="list-none flex flex-col items-start justify-centerF">
            {ourAccounts.map((account, index) => {
              return (
                <li key={index} className="text-[#FFF]">
                  <Link href={account.href}>{account.account}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="text-[#FFC700]">contact info</p>
          <ul className="list-none flex flex-col items-start justify-centerF">
            {contactInfo.map((contact, index) => {
              return (
                <li key={index} className="text-[#FFF]">
                  {contact}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="text-[#FFC700]">our office</p>
          <ul className="list-none flex flex-col items-start justify-centerF">
            {ourOffice.map((office, index) => {
              return (
                <li key={index} className="text-[#FFF]">
                  {office}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mt-4 border-t-solid border-t-[#FFC700] border-t-[2px] flex items-center justify-between">
        <p className="p-[20px] text-white">
          Respectons les droits d'auteur. Tous droits réservés © DZMOUHAMI
        </p>
        <div className="flex items-center gap-5 p-[20px]">
          <div className="bg-[#fff] p-4 rounded-md">
            <Link href="/">
              <FaFacebookF color="#3b372c" size={20} />
            </Link>
          </div>
          <div className="bg-[#fff] p-4 rounded-md">
            <Link href="/">
              <FaTwitter color="#3b372c" size={20} />
            </Link>
          </div>
          <div className="bg-[#fff] p-4 rounded-md">
            <Link href="/">
              <FaLinkedinIn color="#3b372c" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
