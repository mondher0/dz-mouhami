"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosCalendar } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";

const SideBar = () => {
  const path = usePathname();
  const parts = path.split("/");
  const id = parts[2];
  const links = [
    {
      name: "Notifications",
      icon: <IoIosNotifications size={30} />,
      link: "notifications",
    },
    {
      name: "Reviews",
      icon: <CiStar size={30} />,
      link: "reviews",
    },
    {
      name: "Profile",
      icon: <AiOutlineUser size={30} />,
      link: "profile",
    },
  ];
  return (
    <aside className="sticky w-[270px] h-screen flex flex-col items-start p-10">
      <Image src="/assets/logo.svg" width={200} height={200} />
      <ul className="flex flex-col gap-5 mt-[150px]">
        <Link href="/loyer/1">
          <li
            className={` ${
              path === `/loyer/${id}` && "bg-[#FFC107]"
            }   flex items-center  gap-4  p-4 w-[200px] rounded-[20px] text-white`}
          >
            <IoIosCalendar size={30} />
            Rendez vous
          </li>
        </Link>
        {links.map((link, index) => {
          return (
            <Link key={index} href={`/loyer/${id}/${link.link}`}>
              <li
                className={` ${
                  path === `/loyer/${id}/${link}` && "bg-[#FFC107]"
                }   flex items-center  gap-4  p-4 w-[200px] rounded-[20px] text-white `}
              >
                {link.icon}
                {link.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <button className="flex items-center justify-between gap-4 text-[18px] p-4 w-[200px] rounded-[30px] text-black bg-[#FFC107] mt-[150px]">
        Logout
        <IoIosLogOut />
      </button>
    </aside>
  );
};

export default SideBar;
