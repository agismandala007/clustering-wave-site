import { useState } from "react";
import ListNavbar from "./ListNavbar";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const location = useLocation();
  const colors = location.pathname === "/" ? "#ffffff" : "#032F2F";

  function handlerDropdown() {
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <div className=" text-white p-5 lg:py-8 lg:px-16 font-bold items-center">
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 lg:w-10"
          >
            <path
              d="M13.6987 39C13.2437 39 12.8456 38.8781 12.5044 38.6344C12.1631 38.3906 11.9275 38.0575 11.7975 37.635L6.825 21.45H0V17.55H8.2875C8.71 17.55 9.09188 17.6719 9.43312 17.9156C9.77437 18.1594 10.01 18.4925 10.14 18.915L13.3575 29.3962L19.5487 1.56C19.6462 1.105 19.8737 0.73125 20.2312 0.43875C20.5887 0.14625 20.995 0 21.45 0C21.905 0 22.3112 0.138125 22.6687 0.414375C23.0262 0.690625 23.2537 1.05625 23.3512 1.51125L27.5925 19.8412L30.3225 11.115C30.4525 10.6925 30.6881 10.3594 31.0294 10.1156C31.3706 9.87187 31.7525 9.75 32.175 9.75C32.5975 9.75 32.9712 9.86375 33.2962 10.0912C33.6213 10.3187 33.865 10.6275 34.0275 11.0175L36.465 17.55H39V21.45H35.1C34.6775 21.45 34.3037 21.3362 33.9787 21.1087C33.6537 20.8812 33.41 20.5725 33.2475 20.1825L32.3212 17.6962L29.1525 27.885C29.0225 28.3075 28.7787 28.6487 28.4212 28.9087C28.0637 29.1687 27.6575 29.2825 27.2025 29.25C26.7475 29.2175 26.3575 29.0631 26.0325 28.7869C25.7075 28.5106 25.4962 28.1612 25.3987 27.7387L21.45 10.7737L15.5512 37.4888C15.4537 37.9437 15.2344 38.3013 14.8931 38.5612C14.5519 38.8212 14.1537 38.9675 13.6987 39Z"
              style={{ fill: colors }}
            />
          </svg>

          <h1 className={`text-base ml-3 lg:text-2xl lg:ml-4 text-[${colors}]`}>
            Cluster Wave Site
          </h1>
        </div>

        <button
          onClick={handlerDropdown}
          className="lg:hidden justify-self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            style={{ fill: colors }}
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>

        <div
          className={`lg:flex justify-self-end  lg:text-xl ${
            isDropdownOpen
              ? `block absolute z-10 flex-col mt-12 right-2 rounded-md shadow-md bg-[#6BA3BE] p-2`
              : "hidden"
          } lg:block`}
        >
          <ListNavbar path="/" label="Home" />
          <ListNavbar path="/cluster" label="Cluster" />
          <ListNavbar path="/about" label="About Me" />
        </div>
      </div>

      {location.pathname !== "/" && (
        <div className="w-full h-[1px] mt-5 bg-[#032F2F]"></div>
      )}
    </div>
  );
}
