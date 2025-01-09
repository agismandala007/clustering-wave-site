import Navbar from "../../components/Navbar";
import IMAGESHOME from "../../assets/img/home-images.png";
import { Link } from "react-router-dom";

export default function Header() {
  let classesH1 = "text-3xl lg:text-5xl text-white font-extrabold";

  return (
    <header
      className="w-full h-full"
      style={{
        backgroundImage: `url(${IMAGESHOME})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="grid justify-self-center justify-between w-[80%] h-[55vh] py-24">
        <h1 className={classesH1}>Earthquake Clustering</h1>

        <p className="text-base lg:text-lg text-white font-semibold w-80">
          A web application for earthquake clustering
        </p>
        <button className="bg-[#031716] w-fit h-fit text-xs lg:text-base p-3 lg:py-4 lg:px-6 rounded-lg lg:rounded-2xl text-white font-semibold">
          <Link to={"/cluster"}>Cluster Now</Link>
        </button>
      </div>
    </header>
  );
}
