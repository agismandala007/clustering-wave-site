import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PROFILE from "../assets/img/profil-pict.jpeg";
import Follow from "./components/Follow";

export default function Pages() {
  const border: string = "border-b-2 border-b-[#032F2F]";

  return (
    <>
      <Navbar />

      <main>
        <div className="max-w-[130vh] min-h-[71vh] p-5 lg:py-8 lg:px-16 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 h-fit w-full">
            <div className="w-full h-auto">
              <img src={PROFILE} alt="profil-pict" className="rounded-lg" />
            </div>

            <div className="flex flex-col place-content-center w-full">
              <h1 className="font-extrabold text-xl lg:text-3xl text-wrap">
                Hi There!
              </h1>

              <p className="my-3 text-wrap">
                a passionate web developer and data enthusiast specializing in
                creating dynamic, data-driven applications. With a strong focus
                on functionality, performance, and user experience, I leverage
                modern technologies to build innovative solutions that solve
                real-world problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 my-5 min-h-[30vh]">
            <div className="flex flex-col place-content-center w-full">
              <h1 className="font-extrabold text-xl lg:text-3xl text-wrap">
                Clustering Wave Site
              </h1>

              <p className="my-3 text-wrap">
                This projects involved designing and developing a web
                application focused on clustering earthquake data in Indonesia.
                The application aims to provide insights into earthquake
                patterns, helping researchers and decision-makers better
                understand seismic activity.
              </p>
            </div>

            <div className="flex place-self-end w-1/3 lg:w-full">
              <div className="w-full">
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
        </div>

        <Footer />
      </main>
    </>
  );
}
