import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImageSide from "./layout/ImageSide";
import FormSide from "./layout/FormSide";

import DATA from "./data/LayoutData";
import { ClusterTypeStore } from "./store/ClusterTypeStore";

export default function Pages() {
  const { clusterType } = ClusterTypeStore();

  return (
    <>
      <Navbar />

      <main className="grid lg:grid-cols-2 place-content-center gap-5 h-[80vh]">
        <div className="flex justify-self-end">
          <FormSide data={DATA[clusterType]} />
        </div>

        <ImageSide data={DATA[clusterType]} />
      </main>

      <Footer />
    </>
  );
}
