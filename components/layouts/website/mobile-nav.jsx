"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { BsList, BsMenuButton } from "react-icons/bs";
import { navLinks } from "@/lib/constants";

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showSubLinks, setShowSubLinks] = useState({});

  const handleLinkClick = (title) => {
    setShowSubLinks((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const router = useRouter();

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSublink, setActiveSublink] = useState(null);

  const handleMouseEnterDropdown = (index) => {
    setActiveDropdown(index);
    setActiveSublink(null);
  };

  const handleMouseEnterSublink = (index) => {
    setActiveSublink(index);
  };

  const handleMouseLeaveDropdown = () => {
    setActiveDropdown(null);
    setActiveSublink(null);
  };

  return (
    <div
      className={`block md:hidden  ${
        router.asPath === "/"
          ? ""
          : "sticky top-0 z-10 bg-white text-gray-700 border-b shadow-sm"
      }`}
    >
      <nav className="relative flex flex-col gap-2 text-base py-4">
        <div className="w-full flex justify-between   px-4">
          <div className="flex justify-center items-center ">
            <Logo />
          </div>

          <Button
            variant="sm"
            size="icon"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <BsList size={24} />
          </Button>
        </div>

        {isNavOpen && (
          <ul className="fixed top-16 w-full flex flex-col gap-4 font-[500] bg-white text-gray-800 shadow-md rounded-md p-4 border z-50">
            <li>
              <Link
                href="/"
                className={`text-start cursor-pointer hover:bg-text-700 px-2 ${
                  router.asPath === "/"
                    ? "hover:text-white/60"
                    : "hover:text-blue-900"
                }`}
              >
                Anasayfa
              </Link>
            </li>
            {navLinks.map((navLink) => (
              <li
                key={navLink.title}
                className={`text-start cursor-pointer hover:bg-text-700 ${
                  showSubLinks[navLink.title] ? "bg-text-700 " : "bg-text-800"
                }`}
                onClick={() => handleLinkClick(navLink.title)}
              >
                <div className="flex items-center justify-between border-b border-gray-200">
                  <p
                    className={`block  p-2 py-2 w-full ${
                      showSubLinks[navLink.title] ? "" : ""
                    }`}
                  >
                    {navLink.title}
                  </p>
                  {navLink.subLinks && <FaChevronDown />}
                </div>
                {showSubLinks[navLink.title] && navLink.subLinks && (
                  <ul className="pl-4 space-y-2 text-gray-700 text-[13px] overflow-y-scroll h-40">
                    {navLink.subLinks.map((subLink) => (
                      <li
                        key={subLink.title}
                        className="border-b border-gray-200"
                      >
                        <a href={subLink.link} className="block py-1 ">
                          {subLink.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
