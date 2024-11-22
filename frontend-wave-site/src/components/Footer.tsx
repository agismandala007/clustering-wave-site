import LOGO from "../assets/img/logo.png";
import LINKED from "../assets/img/linked-in.png";
import GIT from "../assets/img/git.png";

export default function Footer() {
  return (
    <footer className="bg-[#032F2F] w-full p-5 lg:py-8 lg:px-16 bottom-0">
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="text-white justify-self-start">
          <h1 className="text-sm font-semibold lg:text-xl">Folowed Me at</h1>
          <p className="flex gap-3 py-2">
            <a href="https://id.linkedin.com/in/agissatriamandala">
              <button>
                <img src={LINKED} alt="linkedin" className="w-5 lg:w-6" />
              </button>
            </a>
            <a href="https://github.com/agismandala007/">
              <button>
                <img src={GIT} alt="github" className="w-5 lg:w-6" />
              </button>
            </a>
          </p>
        </div>

        <div className="text-white flex flex-col justify-self-end">
          <div className="flex items-center">
            <img src={LOGO} alt="wave-site-logo" className="w-5 lg:w-6" />
            <h1 className="text-sm font-semibold ml-3 lg:text-xl lg:ml-4 ">
              Cluster Wave Site
            </h1>
          </div>
          <h1 className="text-white ml-9 lg:ml-10 text-[6px] lg:text-xs font-extralight">
            2024 &copy; Agis Satria M. All rights reserved
          </h1>
        </div>
      </div>
      <div className="w-full h-[1px] mt-5 bg-white"></div>
    </footer>
  );
}
