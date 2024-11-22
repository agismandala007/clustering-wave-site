import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import IMAGES from "../assets/img/about-me.png";

export default function Pages() {
  const border: string = "border-b-2 border-b-[#032F2F]";

  return (
    <>
      <Navbar />

      <main className="min-h-screen p-5 lg:py-8 lg:px-16 ">
        <div className="flex h-fit w-full">
          <img
            src={IMAGES}
            alt="about-me"
            className="z-0 w-2/5 h-full aspect-square rounded-lg border-2 border-red-400"
          />
          <div className="z-10 flex flex-col w-full border-2 border-red-500">
            <h1 className=" font-extrabold text-xl lg:text-6xl w-full lg:w-1/3 ml-[-50px] text-wrap">
              Transforming Complexity into Clarity with Clustering.
            </h1>

            <p className="hidden lg:flex m-5 lg:m-10 text-wrap">
              Welcome to my Clustering Wave Site, where we leverage advanced
              algorithms to bring you insightful data clustering solutions. Our
              platform utilizes powerful clustering techniques, specifically
              KMeans and KMedoids, to analyze and group data effectively,
              allowing for better decision-making and deeper insights.
            </p>
          </div>
        </div>
        <p className="lg:hidden m-5 lg:m-10 text-wrap">
          Welcome to my Clustering Wave Site, where we leverage advanced
          algorithms to bring you insightful data clustering solutions. Our
          platform utilizes powerful clustering techniques, specifically KMeans
          and KMedoids, to analyze and group data effectively, allowing for
          better decision-making and deeper insights.
        </p>

        <div className="w-full h-[1px] mt-5 bg-[#032F2F]"></div>
        <div className="grid grid-cols-[3fr_1fr] gap-7">
          <p>
            On the front end, I'm use ReactTS to create a dynamic and responsive
            user experience, ensuring that our users can easily interact with
            our clustering tools. FastAPI serves as our back-end framework,
            providing a robust and efficient environment for handling requests
            and processing data.
          </p>
          <div>
            <h1 className={`${border} font-bold text-base lg:text-xl`}>
              Folow Me
            </h1>
            <h1>LinkedIn</h1>
            <div className={`${border}`}></div>
            <h1>Github</h1>
            <div className={`${border}`}></div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
