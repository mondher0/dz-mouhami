import React from "react";

const NavLinks = () => {
  const links = [
    {
      name: "about",
      link: "#about",
    },
    {
      name: "adresse",
      link: "#address",
    },
    {
      name: "contact",
      link: "#contact",
    },
    {
      name: "reviews",
      link: "#reviews",
    },
  ];
  return (
    <ul className="flex w-full justify-evenly items-center p-10">
      {links.map((link, index) => {
        return (
          <>
            <li
              key={index}
              className="text-[#001F3F] font-semibold text-[18px]"
            >
              <a href={link.link}>{link.name}</a>
            </li>
            {index !== links.length - 1 && (
              <div className="w-[1px] h-[20px] bg-[#8E8E8E]" key={index}></div>
            )}
          </>
        );
      })}
    </ul>
  );
};

export default NavLinks;
