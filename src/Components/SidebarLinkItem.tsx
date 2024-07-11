import useUi from "../Hooks/UseUi";
import React from "react";
import { Link, PathPattern, To, useMatch } from "react-router-dom";
interface PropsType {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string | string | PathPattern<string>;
  onClick?: () => void;
}
export default function SidebarLinkItem({
  icon,
  label,
  href,
  ...props
}: PropsType) {
  const { minimizeSidebar } = useUi();
  const match = useMatch(href || "");
  const active = match ? true : false;
  return (
    <Link
      to={href as To}
      className={` p-2 flex gap-4 items-center justify-start hover:bg-gray-200 cursor-pointer  text-sm
         ${
           active
             ? "bg-[#fdefe7] text-gray-800 border-l-4 border-[#ff6610] font-bold"
             : "text-gray-500 font-bold"
         }`}
      {...props}
    >
      <span className="text-sm"> {icon}</span>
      <span className={minimizeSidebar ? "hidden" : ""}>{label}</span>
    </Link>
  );
}
