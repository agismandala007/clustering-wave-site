import { NavLink, useLocation } from "react-router-dom";

type Props = {
  path: string;
  label: string;
};

export default function ListNavbar({ path, label }: Props) {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const textColor = isHome ? "text-white" : "text-[#032F2F]";
  const borderColor = isHome ? "border-white" : "border-[#032F2F]";
  const hoverBgColor = isHome ? "hover:bg-white" : "hover:bg-[#032F2F]";
  const hoverTextColor = isHome ? "hover:text-[#032F2F]" : "hover:text-white";

  return (
    <div
      className={`px-4 py-1 text-sm lg:text-lg rounded-md ${hoverBgColor} ${hoverTextColor} ${textColor}`}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? `border-b-4 ${borderColor}` : undefined
        }
      >
        {label}
      </NavLink>
    </div>
  );
}
