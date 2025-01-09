import Footer from "../components/Footer";
import ChartPages from "./components/ChartPages";

import Header from "./components/Header";

import Information from "./components/Information";
import InformationData from "./data/information-data";

export default function Pages() {
  return (
    <>
      <Header />
      <main>
        <div className="z-10 flex flex-col justify-self-center bg-white shadow-xl rounded-lg lg:rounded-2xl mt-[-50px] h-fit w-[80%] p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 lg:gap-7 items-center">
            <div>
              <p className="text-[#0B7176] text-xs lg:text-base lg:font-semibold">
                Easy to Use
              </p>
              <h1 className="text-2xl lg:text-5xl text-[#021716] font-bold py-3 lg:py-14">
                Start to Earthquake Clustering
              </h1>
            </div>
            <p className="text-[#021716] text-pretty text-xs py-3 lg:text-base">
              Earthquake clustering with two different method which is K-Means
              and K-Medoids was it most powerfull method for do clustering
              stuff.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-7 pt-3 text-[#021716]">
            {InformationData.map((data) => (
              <Information
                img={data.img}
                header={data.header}
                text={data.text}
              />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 justify-self-center py-10 gap-10 w-[80%]">
          <section>
            <h1 className="text-xl lg:text-3xl text-[#021716] font-bold py-3 lg:py-6">
              History of Earthquake Activity
            </h1>
            <p>
              Earthquakes can occur at any time in Indonesia. Indonesia is an
              archipelagic country located in a seismic hotspot, sitting at the
              convergence of three tectonic plates: the Eurasian Plate, the
              Indo-Australian Plate, and the Pacific Plate. The country has many
              volcanoes situated near populated areas. More than one million
              people live within 30 kilometers of 24 historically active
              volcanoes, including Mount Merapi, Dieng, and others.
              Additionally, Indonesia has numerous active faults located near
              subduction zones or seismic regions. Subduction zones are areas
              vulnerable to earthquakes, which is why Indonesia frequently
              experiences earthquake disasters.
            </p>
          </section>

          <ChartPages />
        </div>
        <Footer />
      </main>
    </>
  );
}
