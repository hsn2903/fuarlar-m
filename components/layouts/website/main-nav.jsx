"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Logo from "./logo";
import { WEBSITE_NAV_LINKS } from "@/lib/links";

const MainNav = () => {
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
      className={`hidden lg:block  sticky top-0 z-10 bg-white text-gray-700 border-b shadow-sm`}
    >
      <nav className=" flex justify-between gap-2 text-base wrapper ">
        <div className="flex justify-center items-center">
          <Logo />
        </div>

        <ul className="flex items-center gap-4 h-full font-[500]">
          <li>
            <Link
              href="/"
              className={`cursor-pointer flex items-center gap-2 h-full px-1.5 py-6 font-semibold tracking-wide transition-all duration-300 hover:text-blue-900 `}
            >
              Anasayfa
            </Link>
          </li>
          {WEBSITE_NAV_LINKS.map((linkData, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnterDropdown(index)}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <Link
                href={linkData.link}
                className={`cursor-pointer flex items-center gap-2 h-full px-1.5 py-6 transition-all duration-300 hover:text-blue-900 `}
              >
                <span className="font-semibold tracking-wide">
                  {linkData.title}
                </span>
                {linkData.subLinks && (
                  // <IoChevronDownOutline size={16} className="mr-[5px]" />
                  <FaChevronDown size={12} className="mt-0.5" />
                )}
              </Link>
              {activeDropdown === index && (
                <ul
                  className={`absolute bottom-0-0 -right-10 z-10 rounded-sm shadow-md border border-t-4 border-t-[#297cbb] p-4 px-6 text-[#67747c] bg-white font-normal ${
                    linkData.subLinks?.length > 10
                      ? "grid grid-cols-2 gap-x-10 min-w-[520px]"
                      : "min-w-[300px]"
                  }`}
                >
                  {linkData.subLinks?.map((subLinkData, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative group text-[11px] "
                      onMouseEnter={() => handleMouseEnterSublink(subIndex)}
                      onMouseLeave={() => setActiveSublink(null)}
                    >
                      <Link
                        href={subLinkData.link}
                        className={`px-0 py-1.5 text-base flex justify-between items-center  bg-white border-b border-b-gray-200 hover:text-indigo-900 ${
                          activeSublink === subIndex ? "" : ""
                        }`}
                      >
                        {subLinkData.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link
              href="/hakkimizda"
              className={`cursor-pointer flex items-center gap-2 h-full px-1.5 py-6 font-semibold tracking-wide transition-all duration-300 hover:text-blue-900 `}
            >
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link
              href="/iletisim"
              className={`cursor-pointer flex items-center gap-2 h-full px-1.5 py-6 font-semibold tracking-wide transition-all duration-300 hover:text-blue-900 `}
            >
              İletişim
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
