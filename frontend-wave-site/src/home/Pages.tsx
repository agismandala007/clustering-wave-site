import Footer from "../components/Footer";
import Header from "./components/Header";

import Information from "./components/Information";
import InformationData from "./data/information-data";

export default function Pages() {
  return (
    <>
      <Header />
      <main>
        <div className="z-10 flex flex-col bg-white shadow-xl rounded-lg lg:rounded-2xl mt-[-50px] w-[90%] mx-auto h-fit p-10 lg:p-16">
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

        <div className="p-10">
          <h1 className="text-lg lg:text-2xl text-[#021716] font-bold py-3 lg:py-6">
            History of Earthquake Activity
          </h1>
          <div className="grid lg:grid-cols-2">
            <div className="order-1 lg:order-2">Cek</div>
            <p className="order-2 lg:order-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              obcaecati iste itaque dicta molestias. Magni cupiditate labore
              voluptatum ipsa quis quasi cum odio! Cumque temporibus fugiat quos
              ipsam, rerum dolorum.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
