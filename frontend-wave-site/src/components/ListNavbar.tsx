import { NavLink, useLocation } from "react-router-dom";

type Props = {
  path: string;
  label: string;
  dropdown: boolean;
};

export default function ListNavbar({ path, label, dropdown }: Props) {
  const location = useLocation();
  const isHome: boolean = location.pathname === "/";

  const dropdownColor: string =
    " text-white hover:text-[#032F2F] hover:bg-white";

  return (
    <div
      className={`px-4 py-1 text-sm lg:text-lg rounded-md  ${
        dropdown
          ? dropdownColor
          : isHome
          ? " text-white hover:bg-white hover:text-[#032F2F]"
          : " text-[#032F2F] hover:bg-[#032F2F] hover:text-white"
      }`}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? `border-b-4 ${isHome ? " border-white" : "border-[#032F2F]"}`
            : undefined
        }
      >
        {label}
      </NavLink>
    </div>
  );
}
