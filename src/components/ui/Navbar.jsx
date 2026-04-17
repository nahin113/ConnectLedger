'use client'
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="w-full lg:w-11/12 mx-auto navbar">
        <div className="navbar-start">
          <Link href={"/"} className="text-xl">
            <p className="text-[24px] font-semibold text-[#244d3f]">
              <span className="font-extrabold text-[#1f2937]">Keen</span>
              Keeper
            </p>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end text-[#1f2937]">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"} className="btn">
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"} className="btn">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href={"/"} className="btn">
                  Stats
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <Link
              href={"/"}
              className={`link ${
                pathname === "/"
                  ? "bg-[#244d3fFF] text-white"
                  : "bg-base-100 text-[#64748bFF]"
              } btn border-none  font-semibold no-underline`}
            >
              <RiHome2Line /> Home
            </Link>
            <Link
              href={"/timeline"}
              className={`link ${
                pathname === "/timeline"
                  ? "bg-[#244d3fFF] text-white"
                  : "bg-base-100 text-[#64748bFF]"
              } btn border-none  font-semibold no-underline`}
            >
              {" "}
              <IoTimeOutline />
              Timeline
            </Link>
            <Link
              href={"/stats"}
              className={`link ${
                pathname === "/stats"
                  ? "bg-[#244d3fFF] text-white"
                  : "bg-base-100 text-[#64748bFF]"
              } btn border-none  font-semibold no-underline`}
            >
              <GoGraph />
              Stats
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Navbar;
