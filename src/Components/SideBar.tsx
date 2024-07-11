import useUi from "../Hooks/UseUi";
import React from "react";
import { ArrowRight, ArrowBigLeft } from "lucide-react";
import ToggleSidebar from "./ToggleSidebar";
import { Link } from "react-router-dom";
import { ChevronsUpDown } from "lucide-react";
export default function Sidebar({ children }: { children?: React.ReactNode }) {
  const { toggleMinimizeSidebar, minimizeSidebar, showSidebar } = useUi();
  return (
    <div
      className={`fixed top-0 bottom-0 border-r z-50 bg-white ${
        minimizeSidebar ? "w-20" : "w-60"
      }  ${showSidebar ? "block" : "hidden lg:block"}`}
    >
      <div className="flex items-center justify-between px-3 h-26">
        <Link to={"/"}>
          <p
            className={`w-full flex items-center font-semibold bg-[#ff6610] p-2 text-[#fff] my-2 rounded-lg ${
              minimizeSidebar ? "hidden" : "block"
            }`}
          >
            General Dashboard
            <ChevronsUpDown />
          </p>
        </Link>
        <button
          className="hidden lg:block"
          onClick={() => toggleMinimizeSidebar()}
        >
          {minimizeSidebar ? <ArrowRight /> : <ArrowBigLeft />}
        </button>
        <ToggleSidebar />
      </div>
      <div className="flex flex-col items-start justify-between w-full h-full px-5 py-4">
        {children}
      </div>
    </div>
  );
}
