import Navbar from "../../components/Navbar";
import IMAGESHOME from "../../assets/img/home-images.png";
import { Link } from "react-router-dom";

export default function Header() {
  let classesH1 = "text-5xl lg:text-8xl text-white font-extrabold";

  return (
    <header
      className="bg-cover bg-no-repeat w-full h-[600px] lg:h-[800px]"
      style={{ backgroundImage: `url(${IMAGESHOME})` }}
    >
      <Navbar />
      <div className="flex flex-col h-5/6 justify-evenly p-10 lg:p-24">
        <div>
          <h1 className={classesH1}>Earthquake</h1>
          <h1 className={classesH1}>Clustering</h1>
        </div>

        <p className="text-base lg:text-lg text-white font-semibold">
          A web application for earthquake clustering
        </p>
        <button className="bg-[#031716] w-fit text-xs lg:text-base py-4 px-6 rounded-2xl text-white font-semibold">
          <Link to={"/cluster"}>Cluster Now</Link>
        </button>
      </div>
    </header>
  );
}
