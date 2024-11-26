import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Follow from "./components/Follow";

export default function Pages() {
  const border: string = "border-b-2 border-b-[#032F2F]";

  return (
    <>
      <Navbar />

      <main>
        <div className="min-h-[71vh] p-5 lg:py-8 lg:px-16 ">
          <div className="flex h-fit w-full">
            <div className="z-10 flex flex-col lg:flex-row w-full">
              <h1 className="font-extrabold text-xl lg:text-6xl w-full lg:w-1/3 text-wrap">
                Transforming Complexity into Clarity with Clustering.
              </h1>

              <p className="hidden lg:flex m-5 lg:m-10 text-wrap">
                Welcome to my Clustering Wave Site, where we leverage advanced
                algorithms to bring you insightful data clustering solutions.
                Our platform utilizes powerful clustering techniques,
                specifically KMeans and KMedoids, to analyze and group data
                effectively, allowing for better decision-making and deeper
                insights.
              </p>
            </div>
          </div>
          <p className="lg:hidden text-wrap">
            Welcome to my Clustering Wave Site, where we leverage advanced
            algorithms to bring you insightful data clustering solutions. Our
            platform utilizes powerful clustering techniques, specifically
            KMeans and KMedoids, to analyze and group data effectively, allowing
            for better decision-making and deeper insights.
          </p>

          <div className="w-full h-[1px] mt-5 bg-[#032F2F] "></div>
          <div className="relative grid grid-cols-[3fr_1fr] gap-10 my-5 min-h-[30vh]">
            <p>
              On the front end, I'm use ReactTS to create a dynamic and
              responsive user experience, ensuring that our users can easily
              interact with our clustering tools. FastAPI serves as our back-end
              framework, providing a robust and efficient environment for
              handling requests and processing data.
            </p>

            <div className="absolute bottom-0 right-0 w-1/3 lg:w-1/5">
              <h1 className={`${border} font-bold text-base lg:text-xl`}>
                Folow Me
              </h1>

              <Follow
                text={"LinkedIn"}
                link={"https://id.linkedin.com/in/agissatriamandala"}
              />
              <Follow
                text={"Github"}
                link={"https://github.com/agismandala007/"}
              />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
